import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { add_data, remove_data, important_data, update_data, complete_task_data } from "./Store/Slicer2_todo";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineAddHome, MdOutlineDelete } from "react-icons/md";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FcClock, FcOvertime} from "react-icons/fc";
import { FaRegCircle, FaStar, FaHandPointRight, FaHandPointLeft } from "react-icons/fa";
import Lottie from "lottie-react"
import pagetodo from "./assets/page_todo.json"


const ToDo = () => {
    const [isChecked, setIsChecked] = useState(false);
    const bg = useSelector((state) => state.slicer1.data.bg);
    const [isvisible_imp, setisvisible_imp] = useState(false);
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.data);


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


    const formatDateToDDMMYYYY = (isoDate) => {
        if (!isoDate) return "";
        const [year, month, day] = isoDate.split("-");
        return `${day}-${month}-${year}`;
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        setIsChecked(false);

        const form = e.target;
        const title = form.tast.value;
        const rawDate = form.data.value;
        const formattedDate = formatDateToDDMMYYYY(rawDate);

        const today = new Date();
        const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

        const start = formattedDate || formatDateToDDMMYYYY(today.toISOString().split("T")[0]);
        const end = formattedDate || formatDateToDDMMYYYY(tomorrow.toISOString().split("T")[0]);
        const important = form.imp.checked;

        dispatch(add_data({ title, start, end, important }));
        form.reset();
    };

    const important_visible = () => setisvisible_imp(!isvisible_imp);

    return (
        <div className={`${bg} flex flex-col h-[86vh] md:h-full overflow-y-scroll custom-scrollbar rounded-2xl mb-14 sm:mb-auto `}>
            <div className="m-1 mb-2 flex justify-center items-center text-lg font-medium">
                <span className="mr-4 text-2xl  text-gray-800">📝 Today’s Task List</span>
                <button title="Toggle Important" onClick={important_visible} className="ml-4 text-yellow-500 hover:scale-110 transition">
                    {isvisible_imp ? <FaLightbulb size={20} /> : <FaRegLightbulb size={20} />}
                </button>
            </div>

            <div className="w-full flex h-full">
                <div className="w-full px-2">
                    <form
                        onSubmit={handlesubmit}
                        className="flex items-center gap-3 px-4 py-3 rounded-3xl w-full shadow-lg bg-[#3f3f3f] focus-within:ring-2 focus-within:ring-rose-500 transition"
                    >
                        <input
                            type="text"
                            name="tast"
                            placeholder="Enter your task..."
                            required
                            className="bg-transparent text-white placeholder-gray-400 px-4 py-2 rounded-xl w-full outline-none"
                        />

                        <input
                            type="date"
                            name="data"
                            min={new Date().toISOString().split("T")[0]}
                            max={new Date(new Date().setFullYear(new Date().getFullYear() + 100)).toISOString().split("T")[0]}
                            className="bg-transparent w-full sm:w-auto text-yellow-100 px-3 py-2 rounded-xl outline-none border border-gray-500"
                        />


                        <label className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                name="imp"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                                className="sr-only peer"
                            />
                            <span className="text-2xl transition-colors peer-checked:text-yellow-400 text-gray-400">
                                {isChecked ? <FaStar /> : <IoIosStarOutline />}
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="text-2xl text-white hover:text-rose-300 transition"
                        >
                            <MdOutlineAddHome />
                        </button>
                    </form>
                    {sortedTodos && sortedTodos.length > 0 ? (
                        <AnimatePresence>
                            <motion.div
                                className="p-4 w-full"
                                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                transition={{ duration: 0.1 }}
                            >
                                <ul className="list-none space-y-4 w-full custom-scrollbar">
                                    <AnimatePresence>
                                        {sortedTodos.map((value, index) => (
                                            <motion.li
                                                key={value.id}
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: 200, scale: 0.95 }}
                                                transition={{ duration: 0.4, delay: 0.1 * index, ease: "easeOut" }}
                                                className="w-full bg-gradient-to-br from-amber-100 to-yellow-200 border border-blue-300 shadow-md p-4 rounded-2xl hover:shadow-xl transition  border-l-6"
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <strong
                                                        className={`text-lg break-all text-rose-700 flex items-center gap-2 ${value.done ? "line-through text-gray-400" : ""}`}
                                                    >
                                                        <span className="text-xl">
                                                            <FaHandPointRight />
                                                        </span>

                                                        <span className="first-letter:uppercase ">{value.title}</span>
                                                    </strong>

                                                    <div className="flex items-center gap-2">
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
                                                            {value.done ? <IoCheckmarkDoneCircle size={22} className="text-green-600 hover:text-red-800"/> : <FaRegCircle />}
                                                        </button>
                                                        <button
                                                            onClick={() => { dispatch(remove_data(value.id)) }}
                                                            className="text-red-600 hover:text-red-800 transition"
                                                            title="Delete"
                                                        >
                                                            <MdOutlineDelete size={22} />
                                                        </button>

                                                    </div>
                                                </div>

                                                <div className="text-sm text-gray-700 space-y-1 flex  gap-6">
                                                    <div className="text-sm text-gray-700 space-y-1 w-full  flex flex-col sm:flex-row  sm:gap-6">
                                                        <p className="flex items-center gap-2">
                                                            <FcOvertime size={20} />
                                                            <span className="font-medium">Start:</span> {value.start}
                                                        </p>
                                                        <p className="flex items-center gap-2">
                                                            <FcClock size={20} />
                                                            <span className="font-medium">End:</span> {value.end}
                                                        </p>
                                                        <div className="flex font-medium items-center gap-2">
                                                            {value.done ? "✅" : "⏳"}
                                                            <span className="font-medium ">{value.done ? (<p className="text-green-600 first-letter:uppercase">completed</p>) : (<p className="text-rose-600 first-letter:uppercase">Pending</p>)}</span> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </AnimatePresence>
                                </ul>
                            </motion.div>
                        </AnimatePresence>) : (
                        <div className="flex flex-col items-center justify-center text-center px-4">
                            <Lottie
                                animationData={pagetodo}
                                className="mt-1 h-[60vh] w-full max-w-xl"
                            />
                            <p className="text-lg text-gray-700 max-w-xl">
                                Focus on your day, get things done with <span className="font-semibold text-rose-600">My Day</span>, a list that refreshes every day.
                            </p>
                        </div>

                    )}
                </div>
                {(isvisible_imp && sortedTodos && sortedTodos.length > 0) && (
                    <div className="hidden sm:flex sm:min-h-screen w-[30%] text-white flex-col items-start px-2">
                        <div className="flex items-center justify-between w-full max-w-xl py-3">
                            <h2 className="text-3xl w-full font-bold text-amber-400 flex items-center justify-center gap-2">
                                <FaHandPointRight className="text-rose-400 " />
                                Important
                                <FaHandPointLeft className="text-rose-400 " />
                            </h2>
                        </div>


                        <AnimatePresence>
                            {isvisible_imp && (
                                <motion.div
                                    className="w-full max-w-xl space-y-4"
                                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    {todos.filter((todo) => todo.important).map((value, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white text-black p-4 rounded-2xl shadow-md border-l-4 border-amber-500"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ delay: 0.1 * index }}
                                        >
                                            <div className="lg:flex justify-between items-center mb-2">
                                                <strong
                                                    className={`text-lg break-all text-rose-700 flex items-center gap-2 ${value.done ? "line-through text-gray-400" : ""}`}
                                                >
                                                    <span className="text-xl">
                                                        <FaHandPointRight />
                                                    </span>

                                                    <span className="first-letter:uppercase ">{value.title}</span>
                                                </strong>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => dispatch(important_data(value.id))}
                                                        title="Unmark Important"
                                                        className="text-yellow-500 hover:scale-110 transition-transform"
                                                    >
                                                        {value.important ? <FaStar size={20} /> : <IoIosStarOutline size={20} />}
                                                    </button>

                                                    <button
                                                        onClick={() => dispatch(complete_task_data(value.id))}
                                                        className="text-red-600 hover:text-red-800 transition"
                                                        title="Completed"
                                                    >
                                                        {value.done ? <IoCheckmarkDoneCircle size={22} /> : <FaRegCircle />}
                                                    </button>
                                                    <button
                                                        onClick={() => dispatch(remove_data(value.id))}
                                                        title="Remove"
                                                        className="text-red-600 hover:text-red-800 transition"
                                                    >
                                                        <MdOutlineDelete size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-700 space-y-1 flex justify-between">
                                                <div className="text-sm text-gray-700 space-y-1 xl:flex gap-6">
                                                    <p className="flex items-center gap-2"><FcOvertime size={20} />{value.start}</p>
                                                    <p className="flex items-center gap-2"><FcClock size={20} />{value.end}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

            </div>
        </div>
    );
};
export default ToDo;


