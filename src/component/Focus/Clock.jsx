import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Time calculations
    const second = time.getSeconds();
    const minute = time.getMinutes();
    const hour = time.getHours();

    const degSecond = second * 6;
    const degMinute = minute * 6 + second * 0.1;
    const degHour = (hour % 12) * 30 + minute * 0.5;

    const numbers = Array.from({ length: 12 }, (_, i) => i + 1);



    return (
        <motion.div className="sm:flex-row flex flex-col sm:justify-center sm:items-center h-[88%]  font-mono z-0 p-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >



            {/* Clock Face */}
            <div
                className="relative h-90 sm:h-80 w-80 bg-rose-200 border-[6px] border-amber-500 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.2)] flex sm:items-center sm:justify-center"
            >
                {/* Center Dot */}
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-black rounded-full z-50 -translate-x-1/2 -translate-y-1/2 shadow-md animate-pulse"></div>

                {/* Hour Hand */}
                <div
                    className="absolute bottom-1/2 left-1/2 w-[6px] h-24 bg-amber-900 rounded-full origin-bottom z-30 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-50%) rotate(${degHour}deg)` }}
                ></div>

                {/* Minute Hand */}
                <div
                    className="absolute bottom-1/2 left-1/2 w-[4px] h-32 bg-amber-800 rounded-full origin-bottom z-20 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-50%) rotate(${degMinute}deg)` }}
                ></div>

                {/* Second Hand */}
                <div
                    className="absolute bottom-1/2 left-1/2 w-[2px] h-36 bg-red-600 rounded-full origin-bottom z-10 transition-transform duration-300 ease-linear"
                    style={{ transform: `translateX(-50%) rotate(${degSecond}deg)` }}
                ></div>

                {/* Clock Numbers */}
                {numbers.map((i) => {
                    const angle = ((i - 3) * 360) / 12 * (Math.PI / 180);
                    const radius = 145;
                    const x = 155 + radius * Math.cos(angle);
                    const y = 155 + radius * Math.sin(angle);
                    return (
                        <div
                            key={i}
                            className="absolute text-xl font-bold text-amber-700 drop-shadow-lg hover:scale-110 transition-transform z-10"
                            style={{
                                left: `${x}px`,
                                top: `${y}px`,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {i}
                        </div>
                    );
                })}

                {/* Tick Marks */}
                {Array.from({ length: 60 }).map((_, i) => {
                    const isHour = i % 5 === 0;
                    const angle = (i - 15) * 6;
                    return (
                        <div
                            key={i}
                            className={`absolute top-[47%] left-[50%] ${isHour ? "h-2 w-[2px] bg-gray-900 z-0" : "h-2 w-[1px] bg-white"
                                } origin-bottom`}
                            style={{
                                transform: `rotate(${angle}deg) translateY(-140px)`,
                            }}
                        ></div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Clock;
