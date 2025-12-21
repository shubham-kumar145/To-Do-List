import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, useMotionValue, useSpring } from "framer-motion";

const Navbar_main = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  const [activeIndex, setActiveIndex] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

const letters = ["T", "O", "D", "O", "L", "I", "S", "T"];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[3rem]  sm:px-6  rounded-b-xl flex items-center justify-between">
      
      {/* 🔙 Home Button */}
      {/* <button
        onClick={() => navigate("/")}
        className=" w-30 sm:w-40 flex gap-2 items-center sm:text-xl font-bold text-rose-600 hover:text-rose-800 transition-transform hover:scale-105"
      >
        🏡 À/s 🏘️
      </button> */}
      <button
        onClick={() => navigate("/")}
        className=" w-30 sm:w-40 flex gap-2 items-center sm:text-xl font-bold text-rose-600 hover:text-rose-800 transition-transform hover:scale-105"
      >
        <img className='h-10' src="/assest/logo_sk.png" alt="" />
      </button>

      {/* ✨ Animated Letters */}
      <div className="flex items-center justify-center">
        {letters.map((letter, index) => {
          const springX = useSpring(x, { stiffness: 100, damping: 20 });
          const springY = useSpring(y, { stiffness: 100, damping: 20 });
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={index}
              className="w-6 h-7 sm:w-8 sm:h-8  sm:text-2xl font-bold cursor-grab active:cursor-grabbing
              bg-gradient-to-br from-indigo-400 via-pink-400 to-rose-400 bg-clip-text text-transparent"
              style={isActive ? { x, y } : { x: springX, y: springY }}
              drag={isActive}
              dragElastic={0.8}
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              whileTap={{ scale: 1.2 }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {letter}
            </motion.div>
          );
        })}
      </div>

      {/* ⏰ Time Display */}
      <p className=" w-30 sm:w-40 text-right sm:text-2xl font-semibold text-gray-300 drop-shadow">
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default Navbar_main;
