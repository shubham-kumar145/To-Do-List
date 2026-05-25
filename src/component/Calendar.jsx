
import ClickSpark from './ClickSpark';

import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

// slicer
import { add_data, remove_data, important_data, update_data, complete_task_data, update_task } from "./Store/Slicer2_todo";

// animation
import { AnimatePresence, motion } from "framer-motion";

// icon
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegCircle, FaStar, FaHandPointRight } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FcClock, FcOvertime } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcFolder } from "react-icons/fc";
import { FcKindle } from "react-icons/fc";

// video
import Lottie from "lottie-react";
import pagetodo from "./assets/important.json";


// React Big Calendar imports
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const DnDCalendar = withDragAndDrop(Calendar);

// Utility to convert "DD-MM-YYYY" to Date
function parseDDMMYYYY(dateStr) {
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed
}

export default function CalendarPage() {

  const dispatch = useDispatch()

  // data 
  const todos = useSelector((state) => state.todo.data);

  // bg from the store change will happen from setting
  const bg = useSelector((state) => state.slicer1.data.bg);

  // sorting the data with the starting date
  const sortedTodos = todos
    .slice()
    .sort((a, b) => {
      if (a.done !== b.done) {
        return a.done ? 1 : -1;
      }
      const [dayA, monthA, yearA] = a.start.split("-");
      const [dayB, monthB, yearB] = b.start.split("-");
      const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
      const dateB = new Date(`${yearB}-${monthB}-${dayB}`);
      return dateA - dateB;
    });

  const [view, setView] = useState('month');
  const [date, setDate] = useState(new Date());

  // Sample input data in DD-MM-YYYY format
  const rawEvents = sortedTodos.map((value) => ({
    id: value.id,
    title: value.title,
    start: value.start,
    end: value.end,
  }));

  // Convert to valid calendar event format
  const events = useMemo(() =>
    rawEvents.map(event => ({
      ...event,
      start: parseDDMMYYYY(event.start),
      end: parseDDMMYYYY(event.end),
    })), [rawEvents]);

  const moveEvent = ({ event, start, end }) => {
    const today = new Date().setHours(0, 0, 0, 0);
    if (start.getTime() < today) {
      alert("⚠️ You can't move the event to a past date!");
    } else {
      dispatch(update_data({
        id: event.id,
        title: event.title,
        start: format(start, 'dd-MM-yyyy'),
        end: format(end, 'dd-MM-yyyy'),
      }));
    }
  };


  // adding task from calendar
  // button code
  const [isOn, setIsOn] = useState(false);
  const handleSelectSlot = ({ start, end }) => {
    if (start.getTime() < new Date().setHours(0, 0, 0, 0)) {
      alert("You cannot create events in the past.");
      return;
    }
    else {
      const title = prompt("Enter event title:");

      if (title) {
        dispatch(add_data({
          title,
          start: format(start, 'dd-MM-yyyy'),
          end: format(end, 'dd-MM-yyyy'),
        }));
      }
    }
  };

  // Edit task title
  // button code
  const [editison, seteditison] = useState(false)
  // display by alert on the srceen
  const handleSelectEvent = (event) => {
    if (editison) {
      const title = prompt("Edit event title:", event.title);
      if (title && title.trim()) {
        dispatch(update_task({
          idtoupdatetitle: event.id,
          updatedtitle: title.trim(),
        }));
      }
    } else {
      alert(`Title: ${event.title}\nStart: ${event.start}\nEnd: ${event.end}`);
    }
  };

  return (
    <ClickSpark
      sparkColor='blue'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {/* my content here */}
      <div className={`h-full w-full ${bg} sm:flex rounded-2xl mb-19 sm:mb-0 justify-between`}>



        <div className='p-5 sm:w-[70%] sm:h-full bg-gradient-to-br from-yellow-200 to-rose-200 rounded-xl shadow-xl '>
          <div className="flex items-center justify-center sm:justify-between w-full mb-4">
            <h1 className="flex items-center gap-3 text-3xl font-extrabold text-rose-600">
              <FcCalendar className="text-4xl" />
              Calendar
            </h1>

            <div className="flex gap-6">

              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">Enable Add</span>

                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <span className={`${isOn ? "text-purple-700 font-bold" : ""}`}>On</span>

                  <button
                    onClick={() => setIsOn(!isOn)}
                    className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors duration-300 ${isOn ? "justify-start bg-purple-300" : "justify-end bg-gray-300"
                      }`}
                  >
                    <motion.div
                      layout
                      transition={{ type: "spring", duration: 0.4, bounce: 0.25 }}
                      className="w-4 h-4 bg-purple-700 rounded-full shadow-md"
                    />
                  </button>

                  <span className={`${!isOn ? "text-purple-700 font-bold" : ""}`}>Off</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">Enable Edit</span>

                <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <span className={`${isOn ? "text-purple-700 font-bold" : ""}`}>On</span>
                  <button
                    onClick={() => seteditison(!editison)}
                    className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors duration-300 ${editison ? "justify-start bg-purple-300" : "justify-end bg-gray-300"}`}                >
                    <motion.div
                      layout
                      transition={{ type: "spring", duration: 0.4, bounce: 0.25 }}
                      className="w-4 h-4 bg-purple-700 rounded-full shadow-md"
                    />
                  </button>
                  <span className={`${!editison ? "text-purple-700 font-bold" : ""}`}>Off</span>
                </div>
              </div>

            </div>


          </div>
          <DnDCalendar
            className="calendar-custom custom-scrollbar rounded-xl shadow-lg border border-amber-300 bg-rose-50"
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '75vh' }}
            views={['month', 'week', 'day', 'agenda']}
            view={view}
            onView={setView}
            date={date}
            onNavigate={setDate}
            popup
            selectable
            resizable
            onEventDrop={moveEvent}
            onEventResize={moveEvent}
            onSelectSlot={isOn && handleSelectSlot}
            onSelectEvent={handleSelectEvent}
          />
        </div>

        <div
          className=" sm:max-h-[86.5vh] md:max-h-[90.5vh] sm:w-[29.5%] mt-3 sm:mt-0 bg-rose-100 rounded-2xl lg:p-4 lg:space-y-4 overflow-y-scroll custom-scrollbar"
        >
          {sortedTodos && sortedTodos.length > 0 ? (

            <AnimatePresence>

              <motion.div
                className="p-4 w-full"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl mb-2 font-semibold text-center text-rose-600 flex items-center justify-center gap-3">
                  <FcFolder size={28} /><span className="tracking-wide">All Tasks</span><FcKindle size={24} />
                </p>
                <ul className="list-none space-y-4 w-full overflow-y-hidden custom-scrollbar">
                  {sortedTodos.map((value, key) => (
                    <motion.li
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: 0.1 * key }}
                      className="w-full bg-gradient-to-br from-amber-100 to-yellow-200 border border-blue-600 shadow-md p-4 sm:p-1 lg:p-4 rounded-2xl hover:shadow-xl transition  border-l-6"
                    >
                      <div className="flex flex-row sm:flex-col lg:flex-row justify-between items-start mb-2">
                        <strong
                          className={`text-lg break-all text-rose-700 flex items-center gap-2 ${value.done ? "line-through text-gray-400" : ""}`}
                        >
                          <span className="text-xl">
                            <FaHandPointRight />
                          </span>

                          <span className="first-letter:uppercase ">{value.title}</span>
                        </strong>
                        <div className="flex sm:justify-center lg:justify-start sm:w-full lg:w-auto items-center gap-2">
                          <button
                            onClick={() => dispatch(important_data(value.id))}
                            className="text-yellow-500 hover:scale-110 transition-transform"
                            title="Mark as Important"
                          >
                            {value.important ? <FaStar size={22} /> : <IoIosStarOutline size={22} />}
                          </button>
                          <button
                            onClick={() => dispatch(complete_task_data(value.id))}
                            className="text-red-600 hover:text-red-800 transition"
                            title="Completed"
                          >
                            {value.done ? <IoCheckmarkDoneCircle size={22} className="text-green-600"/> : <FaRegCircle />}
                          </button>
                          <button
                            onClick={() => dispatch(remove_data(value.id))}
                            className="text-red-900 hover:text-red-800 transition"
                            title="Delete"
                          >
                            <MdOutlineDelete size={22} />
                          </button>
                        </div>
                      </div>

                      <div className="text-sm text-gray-700 space-y-1 flex gap-6">
                        <div className="text-sm text-gray-700 space-y-1 gap-6 ">
                          <p className="flex items-center gap-2">
                            <FcOvertime size={20} />
                            <span className="font-medium">Start:</span> {value.start}
                          </p>
                          <p className="flex items-center gap-2">
                            <FcClock size={20} />
                            <span className="font-medium">End:</span> {value.end}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center text-center p-6 w-full min-h-full">
                <Lottie
                  animationData={pagetodo}
                  loop
                  className="w-full h-full mb-4"
                />
                <p className="text-xl sm:text-2xl text-white font-semibold">
                  No tasks available
                </p>
                <p className="text-md text-yellow-300 mt-1">Start by adding your first task ✍️</p>
              </div>
            </>

          )}
        </div>
      </div>
    </ClickSpark>
  );
}
