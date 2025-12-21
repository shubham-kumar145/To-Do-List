// import React, { useState } from 'react';
// import { useSelector } from "react-redux";
// import { motion, AnimatePresence } from "framer-motion";

// const tabs = ["All Task", "Completed Task", "Pending", "Important"];

// const All_task = () => {
//   const bg = useSelector((state) => state.slicer1.data.bg);
//   const todos = useSelector((state) => state.todo.data);

//   const [activeTab, setActiveTab] = useState("All Task");

//   // Filter data based on active tab
//   let displaydata = [];
//   switch (activeTab) {
//     case "Completed Task":
//       displaydata = todos.filter((todo) => todo.done);
//       break;
//     case "Pending":
//       displaydata = todos.filter((todo) => !todo.done);
//       break;
//     case "Important":
//       displaydata = todos.filter((todo) => todo.important);
//       break;
//     case "All Task":
//     default:
//       displaydata = todos;
//       break;
//   }

//   return (
//     <div className={`${bg} h-full w-full rounded-2xl p-4`}>
//       {/* Tab Buttons */}
//       <div className="flex justify-center">
//         <div className="relative flex bg-amber-300 rounded-full px-3 py-1 gap-1">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`relative z-10 px-5 py-2 font-semibold rounded-full transition-colors duration-300 
//                 ${activeTab === tab ? "text-white" : "text-gray-800"}`}
//             >
//               {tab}
//               {activeTab === tab && (
//                 <motion.div
//                   layoutId="tab-highlight"
//                   className="absolute inset-0 bg-rose-500 rounded-full z-[-1]"
//                   transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Task Cards */}
//       <div className="flex justify-center mt-6">
//         <AnimatePresence mode="wait">
//           {displaydata.length > 0 ? (
//             <motion.div
//               key={activeTab}
//               className="w-full max-w-2xl grid gap-4"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 30 }}
//               transition={{ duration: 0.4 }}
//             >
//               {displaydata.map((value, index) => (
//                 <motion.div
//                   key={value.id}
//                   className={`p-4 rounded-2xl shadow-md border-l-[6px] ${value.done
//                     ? "bg-green-100 text-green-800 border-green-500"
//                     : value.important
//                       ? "bg-yellow-100 text-yellow-800 border-yellow-500"
//                       : "bg-white text-gray-900 border-gray-300"
//                     }`}
//                   initial={{ opacity: 0, y: -100 ,delay:0.3}}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 100 }}
//                   transition={{ delay: 0.03* index }}
//                 >
//                   <p className="font-bold text-lg first-letter:capitalize">{value.title}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               key="no-task"
//               className="text-center text-gray-600 text-lg mt-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 1 }}
//             >
//               No tasks found in this category.
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default All_task;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { remove_data, important_data, complete_task_data } from "./Store/Slicer2_todo";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FcClock, FcOvertime } from "react-icons/fc";
import { FaRegCircle, FaStar, FaHandPointRight } from "react-icons/fa";

const tabs = ["All Task", "Completed Task", "Pending", "Important"];

const All_task = () => {
  const dispatch = useDispatch();
  const bg = useSelector((state) => state.slicer1.data.bg);
  const todos = useSelector((state) => state.todo.data);

  const [activeTab, setActiveTab] = useState("All Task");
  let tablecolour = "bg-red-500"

  // Filter data based on active tab
  let displaydata = [];
  switch (activeTab) {
    case "Completed Task":
      tablecolour = "bg-green-600"
      displaydata = todos.filter((todo) => todo.done);
      break;
    case "Pending":
      tablecolour = "bg-blue-600"
      displaydata = todos.filter((todo) => !todo.done);
      break;
    case "Important":
      tablecolour = "bg-purple-500"
      displaydata = todos.filter((todo) => todo.important);
      break;
    case "All Task":
    default:
      displaydata = todos;
      break;
  }

  return (
    <div className='h-full w-full'>
      <div className={`${bg} h-[86vh] md:min-h-full w-full overflow-y-scroll custom-scrollbar rounded-2xl p-4 mb-17 sm:mb-0 `}>
        {/* Tab Buttons */}
        <div className="flex justify-center">
          <div className="relative flex bg-amber-300 rounded-full px-1 sm:px-3 py-1 gap-5 sm:gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 sm:px-5 py-2 font-semibold rounded-full transition-colors duration-300 
                ${activeTab === tab ? "text-white" : "text-gray-800"}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-highlight"
                    className={`absolute inset-0 ${tablecolour} rounded-full z-[-1] `}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Task Cards */}
        <div className="flex justify-center mt-6 ">
          <AnimatePresence mode="wait">
            {displaydata.length > 0 ? (
              <motion.div
                key={activeTab}
                className="w-full grid gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.01 }}
              >
                {displaydata.map((value, index) => (
                  <motion.div
                    key={value.id}
                    className={`p-4 w-full rounded-2xl shadow-md border-l-[6px] ${value.done
                      ? "bg-green-100 text-green-800 border-green-500"
                      : value.important
                        ? "bg-yellow-100 text-yellow-800 border-yellow-500"
                        : "bg-purple-100 text-gray-900 border-blue-300"
                      }`}
                    initial={{ opacity: 0, y: -100, delay: 0.01 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ delay: 0.02 * index }}
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
                          {value.done ? <IoCheckmarkDoneCircle size={22} className="text-green-600 hover:text-red-800" /> : <FaRegCircle />}
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

                    <div className="text-sm text-gray-700 space-y-1 flex gap-6">
                      <div className="text-sm text-gray-700 space-y-1 flex gap-6">
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


                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-task"
                className="text-center text-gray-600 text-lg mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
              >
                No tasks found in this category.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default All_task;
