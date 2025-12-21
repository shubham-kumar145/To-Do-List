import React from 'react';
import Lottie from "lottie-react";
import animationdata from "./assets/error.json";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const PageNotFound = () => {
  const bg = useSelector((state) => state.slicer1.data.bg);

  return (
    <div className={`${bg} min-h-full w-full flex flex-col justify-center items-center rounded-2xl p-4`}>
      <Lottie
        animationData={animationdata}
        loop
        className="h-[60vh] w-full max-w-2xl"
      />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-rose-500 uppercase tracking-wider mt-4"
      >
        Page Not Found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl text-rose-400 uppercase mt-2"
      >
        Check your connection or URL
      </motion.p>
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-2 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-md transition-all duration-300"
      >
        ⬅ Go Back To Home
      </Link>
    </div>
  );
};

export default PageNotFound;
