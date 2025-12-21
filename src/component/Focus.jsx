import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Timer from "./Focus/Timer";
import Stopwatch from "./Focus/Stopwatch"
import Lottie from "lottie-react";
import pagevideo from "./assets/focus.json"

const tabs = ["timer", "stopwatch"];
const tabColors = {
    clock: "bg-indigo-500",
    timer: "bg-green-500",
    stopwatch: "bg-pink-500",
};
const Focus = () => {
    const [activeTab, setActiveTab] = useState("clock");
    const [isvisible, setvisible] = useState(true)
    const bg = useSelector((state) => state.slicer1.data.bg);

    return (
        <div className={`p-1 h-[88vh] md:h-full w-full text-white text-xl rounded-xl shadow-xl ${bg} z-10`}>
            {/* Tabs */}
            <div className="flex justify-center mt-4">
                <div className="relative flex bg-amber-300 rounded-full px-1 sm:px-3 py-1 gap-5 sm:gap-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => { setActiveTab(tab), setvisible(false) }}
                            className={` first-letter:uppercase relative z-10 sm:px-5 py-2 font-semibold rounded-full transition-colors duration-300 
              ${activeTab === tab ? "text-white" : "text-gray-800"}`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="tab-highlight"
                                    className={`absolute inset-0 ${tabColors[tab]} rounded-full z-[-1]`}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
            {isvisible && (
                <div className=" flex flex-col items-center justify-center text-center">
                    <Lottie
                        animationData={pagevideo}
                        className="h-[60vh] w-full max-w-4xl mx-auto"
                    />
                    <p className="mt-6 text-xl md:text-2xl font-semibold text-gray-800 drop-shadow-md">
                        ✨ Come on! Let's kick off your study session with perfect timing ⏰
                    </p>
                </div>

            )}
            {/* Animated Tab Content */}
            <div className="flex justify-center mt-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        className="w-full text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab === "timer" && (
                            <Timer />
                        )}
                        {activeTab === "stopwatch" && (
                            <Stopwatch/>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Focus;