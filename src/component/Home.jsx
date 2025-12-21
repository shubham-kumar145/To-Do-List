import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import Clock from "./Focus/Clock";
import {
  remove_data,
  important_data,
  complete_task_data
} from "./Store/Slicer2_todo";
import { IoIosStarOutline } from "react-icons/io";
import { FaRegCircle, FaStar, FaHandPointRight } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";

export default function NotificationPanel() {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);

  const Wishes = [
    "🌟 Wishing you a day full of calm and clarity!",
    "💖 You’ve got this—make today count!",
    "🌈 May your tasks flow smoothly and your mind stay light.",
    "🌻 Breathe deeply, stay focused, and be kind to yourself.",
    "✨ Little steps lead to big changes—keep moving forward!",
    "🌼 Let your day be purposeful, peaceful, and productive.",
    "💫 You are stronger than you think, and today is proof of that!"
  ];


  // Format today's date as "DD-MM-YYYY"
  const today = new Date();
  const todayFormatted = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
  const day_wish = today.getDate()
  const notifications = todos.filter((value) => value.start === todayFormatted);

  return (
    <div className=" h-[90vh] md:h-full w-full bg-black/50 text-white flex flex-col lg:flex-row gap-10 rounded-2xl items-start p-10 overflow-y-scroll custom-scrollbar">
      {/* Left Side - Clock */}
      <div className="w-full lg:w-[50%] mt-1   rounded-2xl p-6 flex flex-col items-center text-center space-y-4">
        <div className="text-4xl font-semibold text-indigo-600">
          <Clock />
        </div>

        <p className="text-gray-700 dark:text-gray-600 text-lg font-medium">
          📅 Today: <span className="font-semibold">{todayFormatted}</span>
        </p>

        <p className="text-xl text-pink-600 dark:text-pink-400 font-semibold italic">
          {Wishes[day_wish % 7]}
        </p>
      </div>


      {/* Right Side - Notifications */}
      <div className="w-full lg:w-[60%]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">Reminders For Today</h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-neutral-800 text-white px-4 py-2 rounded-full hover:bg-neutral-700 transition"
          >
            {isOpen ? "Close" : "Open"}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              {notifications.length === 0 && (
                <motion.p
                  className="text-gray-300 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  🎉 No reminders for today!
                </motion.p>
              )}

              {notifications.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-black p-4 rounded-2xl shadow-md "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex justify-between items-start mb-2 ">
                    <strong
                      className={`text-lg break-all text-rose-700 flex items-center gap-2 ${value.done ? "line-through text-gray-400" : ""}`}
                    >
                      <span className="text-xl">
                        <FaHandPointRight />
                      </span>
                      <span className="first-letter:uppercase">{value.title}</span>
                    </strong>

                    <div className="flex items-center gap-2 ">
                      <button
                        onClick={() => dispatch(important_data(value.id))}
                        className="text-yellow-500 hover:scale-110 transition-transform"
                        title="Mark as Important"
                      >
                        {value.important ? <FaStar size={22} /> : <IoIosStarOutline size={22} />}
                      </button>

                      <button
                        onClick={() => dispatch(complete_task_data(value.id))}
                        className="text-green-500 hover:text-green-700 transition"
                        title="Mark as Completed"
                      >
                        {value.done ? (
                          <IoCheckmarkDoneCircle size={22} />
                        ) : (
                          <FaRegCircle />
                        )}
                      </button>

                      <button
                        onClick={() => dispatch(remove_data(value.id))}
                        className="text-red-600 hover:text-red-800 transition"
                        title="Delete"
                      >
                        <MdOutlineDelete size={22} />
                      </button>

                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}