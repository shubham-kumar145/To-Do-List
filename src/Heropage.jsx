import React from 'react';
import { NavLink } from 'react-router';
import RotatingText from './RotatingText'
import CardSwap, { Card } from './CardSwap'
import InfiniteScroll from './InfiniteScroll';

import { motion, useSpring, useScroll } from "motion/react"

const items = [
  { content: <p className="text-gray-100">📋 View all your tasks in one place</p> },
  { content: <img src="/assest/alltask1.png" className="h-32 w-full rounded-lg" alt="All tasks" /> },

  { content: <p className="text-gray-100">⏳ Check all your pending tasks</p> },
  { content: <img src="/assest/alltask1.png" className="h-32 w-full rounded-lg" alt="Pending tasks" /> },

  { content: <p className="text-gray-100">✅ See all completed tasks at a glance</p> },
  { content: <img src="/assest/alltask1.png" className="h-32 w-full rounded-lg" alt="Completed tasks" /> },

  { content: <p className="text-gray-100">📌 Stay organized with categorized task views</p> },
  { content: <img src="/assest/alltask1.png" className="h-32 w-full rounded-lg" alt="Categorized view" /> },

  { content: <p className="text-gray-100">⭐ Focus on your most important tasks</p> },
  { content: <img src="/assest/alltask1.png" className="h-32 w-full rounded-lg" alt="Important tasks" /> },

  { content: <p className="text-gray-100">👀 Quickly preview your tasks</p> },
  { content: <img src="/assest/alltask1.png" className="h-32 w-full rounded-lg" alt="Task preview" /> },

  { content: <p className="text-gray-100">➕ Easily add and manage new tasks</p> },
  { content: <img src="/assest/alltask1.png" className="h-32 w-full rounded-lg" alt="Add task" /> },
];


const viewscreen = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const Heropage = () => {
  return (

    <div className="min-h-screen w-full  relative overflow-hidden pt-[1vh] space-y-8  bg-[linear-gradient(to_bottom,#ede9fe,#fbcfe8,#ede9fe,#fecaca,#ede9fe,#fecdd3,#ede9fe,#fef3c7,#ede9fe,#fef9c3,#ede9fe,#bae6fd)]
">
      <motion.div className="flex flex-wrap justify-center mt-[15vh]"
        variants={viewscreen}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* 🔹 Background Section */}
        <div className="flex flex-col xl:flex-row justify-around items-center gap-1 w-[95%] py-[5%] h-auto bg-gradient-to-br from-gray-700/80 via-gray-800/70 to-black/60 text-white rounded-2xl shadow-2xl overflow-hidden px-4 2xl:px-12">

          {/* 🔸 Video Section */}
          <div className="w-full 2xl:w-1/2 md:w-[50%] flex justify-center">
            <video
              width="100%"
              autoPlay
              muted
              loop
              className="rounded-2xl shadow-xl border-4 border-white/20 w-auto max-w-[720px] xl:max-w-[500px]"
            >
              <source src="/3255275-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            </video>
          </div>

          {/* 🔹 Foreground Text Content */}
          <div className="w-full text-white flex flex-col items-center justify-center text-center max-w-2xl px-2 sm:px-4 md:px-0">
            <h1 className=" text-3xl xl:text-4xl sm:text-5xl font-extrabold text-black leading-tight tracking-tight drop-shadow-sm">
              🧩 Stay Organized, Stay Ahead.
            </h1>

            <p className="xl:text-lg sm:text-xl mt-6 text-white/85 drop-shadow-md leading-relaxed">
              Take charge of your productivity. Our smart task manager helps you focus, prioritize, and execute everything from daily to-dos to big goals.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <NavLink
                to="/home"
                className="h-12 px-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 text-black text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform"
              >
                🚀 Get Started
              </NavLink>
              <NavLink
                to="/download"
                className="h-12 px-8 flex items-center justify-center rounded-full border border-white/20 text-white text-lg font-semibold bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-transform shadow"
              >
                📱 Download App
              </NavLink>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center mt-15"
        variants={viewscreen}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-[95%] mx-auto gap-16 px-6 py-14 bg-gradient-to-br from-gray-700/80 via-gray-800/70 to-black/60 rounded-2xl shadow-2xl">

          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-left space-y-6 text-amber-50">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-md">
              Tailor Your Workspace, Your Way
            </h2>

            <p className="text-lg sm:text-xl leading-relaxed text-amber-100 drop-shadow-sm">
              Don’t settle for a dull layout! With full control over the <span className="text-yellow-300 font-semibold">toolbar</span>, <span className="text-pink-300 font-semibold">sidebar</span>, and <span className="text-indigo-300 font-semibold">background</span>, you can make your space uniquely yours.
              <br />
              Choose from vibrant themes and calming tones — create the perfect environment for focus and productivity.
            </p>
          </div>


          {/* Right Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center ">
            <img
              src="/assest/tastadd1.png"
              alt="Settings UI"
              className="h-[50vh] sm:h-[55vh] w-auto z-20 object-contain "
            />
            <img
              src="/assest/allmobtask2.png"
              alt="Settings Mobile"
              className="absolute z-30 hidden lg:block max-h-[35vh] object-contain right-[-10%] bottom-[-5%] w-[40%]"
            />
          </div>

        </div>
      </motion.div>

      <motion.div className='flex flex-wrap justify-center mt-15'
        variants={viewscreen}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="flex flex-wrap justify-around items-center  w-[95%] p-[5%] h-auto bg-gradient-to-br from-gray-700/80 via-gray-800/70 to-black/60 text-white rounded-2xl shadow-2xl overflow-hidden px-4 md:px-12">
          {/* Left Text Section */}
          <div className="w-full max-w-xl flex">
            <img src="/assest/home2.png" alt="img" className='h-[47vh] w-[120vh] z-30 ' />
            <img src="/assest/homemob1.png" alt="img" className=' hidden lg:flex -translate-x-15 translate-y-20 z-40  h-[45vh]' />
          </div>

          {/* Right Text Section */}
          <div className="text-amber-50 max-w-xl space-y-6 px-2">
            <h2 className="text-4xl font-extrabold leading-tight bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-300 bg-clip-text text-transparent drop-shadow-xl">
              Organize Everything In Your Life
            </h2>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed drop-shadow-md">
              Whether it's <span className="text-yellow-300 font-semibold">work projects</span>,
              <span className="text-pink-400 font-semibold"> personal tasks</span>, or
              <span className="text-indigo-300 font-semibold"> study plans</span>,
              our intelligent task manager helps you stay organized, focused, and in control — every step of the way.
            </p>

            <p className="text-white/80 text-base sm:text-lg drop-shadow-sm">
              Your home screen gently reminds you of what’s next — so you never miss a task or deadline.
            </p>

          </div>
        </div>
      </motion.div>
      
      <motion.div className="flex flex-wrap lg:flex-row items-center justify-between mt-15 w-[95%] mx-auto gap-12 p-10 bg-gradient-to-br from-gray-700/80 via-gray-800/70 to-black/60 rounded-2xl shadow-xl"
        variants={viewscreen}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* 🔹 Left Section - Text */}
        <div className="text-amber-50 max-w-xl space-y-6 px-4 w-[50%]">
          <h2 className="xl:text-4xl sm:text-5xl font-extrabold ">
            <span>📆</span>{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 leading-tight bg-clip-text text-transparent drop-shadow-lg">
              Master Your Schedule with Ease
            </span>
          </h2>

          <p className="xl:text-lg sm:text-xl text-amber-100 leading-relaxed drop-shadow-sm">
            Whether it's <span className="text-yellow-300 font-semibold">important meetings</span>,
            <span className="text-emerald-300 font-semibold"> daily tasks</span>, or
            <span className="text-sky-300 font-semibold"> upcoming deadlines</span>, our intelligent calendar system
            keeps everything in sync. Easily <span className="text-pink-300 font-semibold">add</span>,
            <span className="text-indigo-300 font-semibold"> edit</span>, and
            <span className="text-purple-300 font-semibold"> visualize</span> your tasks in one beautifully organized interface.

            <br /><br />

            ✨ <span className="text-pink-300 font-semibold">Monthly View</span> offers a big-picture layout.<br />
            📅 <span className="text-emerald-300 font-semibold">Weekly View</span> shows busy and free intervals clearly.<br />
            📋 <span className="text-sky-300 font-semibold">Agenda View</span> helps you execute tasks in proper order.<br />
            🔁 <span className="text-yellow-300 font-semibold">Multi-Day View</span> allows flexible daily planning.<br />
            🔄 <span className="text-purple-300 font-semibold">Multi-Week View</span> makes shifting plans easy and intuitive.
          </p>

        </div>

        {/* 🔸 Right Section - CardSwap */}
        <div className="  w-200px max-w-xl flex items-center justify-center p-6 pr-32 sm:pr-48 md:pr-12  sm:p-6 md:p-12 mr-10 md:mb-10 -translate-x-50">
          <div className="relative h-[55vh] w-full">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
            >
              <Card className="bg-black/80 rounded-xl p-6 shadow-2xl text-white">
                <h3 className="text-xl font-bold mb-2">🗂️ Smart Calendar</h3>
                <p>Add or edit tasks directly in your calendar with ease.</p>
                <img src="/assest/calendar1.png" alt="Calendar Feature" className="h-40 w-full rounded-2xl mt-2" />
              </Card>

              <Card className="bg-black/80 rounded-xl p-6 shadow-2xl text-white">
                <h3 className="text-xl font-bold mb-2">⏰ Reminders</h3>
                <p>Never miss important work again with intelligent reminders.</p>
                <img src="/assest/calendar2.png" alt="Reminder Feature" className="h-40 w-full rounded-2xl mt-2" />
              </Card>

              <Card className="bg-black/80 rounded-xl p-6 shadow-2xl text-white">
                <h3 className="text-xl font-bold mb-2">📊 Weekwise Tracker</h3>
                <p>See a clear picture of your weekly productivity and progress.</p>
                <img src="/assest/calendar3.png" alt="Weekly Tracker" className="h-40 w-full rounded-2xl mt-2" />
              </Card>

              <Card className="bg-black/80 rounded-xl p-6 shadow-2xl text-white">
                <h3 className="text-xl font-bold mb-2">📅 Daily Overview</h3>
                <p>View your tasks day-by-day to stay focused and prepared.</p>
                <img src="/assest/calendar4.png" alt="Daily Tasks" className="h-40 w-full rounded-2xl mt-2" />
              </Card>

              <Card className="bg-black/80 rounded-xl p-6 shadow-2xl text-white">
                <h3 className="text-xl font-bold mb-2">🗓️ Monthly Planner</h3>
                <p>All your tasks for the month in one beautiful, scrollable view.</p>
                <img src="/assest/calendar5.png" alt="Monthly View" className="h-40 w-full rounded-2xl mt-2" />
              </Card>
            </CardSwap>
          </div>
        </div>
      </motion.div>



      <motion.div className='flex justify-between '
        variants={viewscreen}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="flex flex-col w-[95%] mt-15 lg:flex-row items-center mx-auto justify-between gap-20 px-6 py-12 bg-gradient-to-br from-gray-700/80 via-gray-800/70 to-black/60 rounded-2xl">
          {/* Left  Section */}
          <div className='h-[60vh] w-full relative bg-gray-900/5 rounded-3xl'>

            <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection='left'
              autoplay={true}
              autoplaySpeed={0.1}
              autoplayDirection="down"
              pauseOnHover={true}
            />
          </div>
          {/* Right  Section */}
          <div className="text-amber-50 w-full  space-y-6">
            <h2 className="text-4xl font-extrabold leading-tight bg-gradient-to-r from-rose-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-md">
              We organize everything for you — from little things to big plans
            </h2>

            <p className="text-lg text-amber-100 leading-relaxed drop-shadow-sm">
              Whether it's <span className="text-yellow-300 font-semibold">work projects</span>,
              <span className="text-pink-300 font-semibold"> personal tasks</span>, or
              <span className="text-indigo-300 font-semibold"> study plans</span>,
              our system keeps track of your <span className="text-emerald-300 font-semibold">completed</span>,
              <span className="text-rose-300 font-semibold"> pending</span>, and
              <span className="text-purple-300 font-semibold"> important</span> tasks.
              You can easily view them across dedicated sections the moment you start using the ToDo website.
            </p>
          </div>


        </div>
      </motion.div>


      <motion.div className='flex justify-between '
        variants={viewscreen}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="flex flex-col w-[95%] mt-16 items-center mx-auto justify-between gap-16 px-6 py-14 bg-gradient-to-br from-gray-700/80 via-gray-800/70 to-black/70 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-extrabold leading-tight text-center bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent drop-shadow-md">
            Smart Tools to Boost Your Productivity at Work
          </h2>

          <div className="w-full flex flex-wrap justify-center gap-10 px-4">
            {/* Focus Mode */}
            <div className="max-w-xs flex flex-col items-center text-center space-y-3 bg-black/30 backdrop-blur-md p-4 rounded-xl shadow-md">
              <img src="/assest/Focus1.png" alt="Focus Mode" className="h-48 rounded-lg shadow" />
              <h3 className="text-lg font-semibold text-white">Focus Mode</h3>
              <p className="text-sm text-gray-200">Track your current hour of productivity with laser focus. Perfect for deep work sessions.</p>
            </div>

            {/* Smart Timer */}
            <div className="max-w-xs flex flex-col items-center text-center space-y-3 bg-black/30 backdrop-blur-md p-4 rounded-xl shadow-md translate-y-4">
              <img src="/assest/Focus2.png" alt="Smart Timer" className="h-48 rounded-lg shadow" />
              <h3 className="text-lg font-semibold text-white">Smart Timer</h3>
              <p className="text-sm text-gray-200">Stay on track with our task timer that reminds you when it's time to switch gears.</p>
            </div>

            {/* Stopwatch */}
            <div className="max-w-xs flex flex-col items-center text-center space-y-3 bg-black/30 backdrop-blur-md p-4 rounded-xl shadow-md translate-y-8">
              <img src="/assest/Focus4.png" alt="Stopwatch" className="h-48 rounded-lg shadow" />
              <h3 className="text-lg font-semibold text-white">Stopwatch</h3>
              <p className="text-sm text-gray-200">Measure how quickly you complete tasks or sprints. Great for daily performance tracking.</p>
            </div>

            {/* Lap Recorder */}
            <div className="max-w-xs flex flex-col items-center text-center space-y-3 bg-black/30 backdrop-blur-md p-4 rounded-xl shadow-md translate-y-12">
              <img src="/assest/Focus5.png" alt="Lap Record" className="h-48 rounded-lg shadow" />
              <h3 className="text-lg font-semibold text-white">Lap Tracker</h3>
              <p className="text-sm text-gray-200">Maintain a detailed log of your time splits and task records with the lap feature.</p>
            </div>
          </div>
        </div>

      </motion.div>

      <motion.div
        className="flex justify-center mt-15"
        variants={viewscreen}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-[95%] mx-auto gap-16 px-6 py-14 bg-gradient-to-br from-gray-700/80 via-gray-800/70 to-black/60 rounded-2xl shadow-2xl">

          {/* Left Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="/assest/setting1.png"
              alt="Settings UI"
              className="h-[50vh] sm:h-[55vh] w-auto z-20 object-contain"
            />
            <img
              src="/assest/settingmob.png"
              alt="Settings Mobile"
              className="absolute z-30 hidden lg:block max-h-[35vh] object-contain right-[-10%] bottom-[-5%] w-[40%]"
            />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 text-left space-y-6 text-amber-50">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-md">
              Tailor Your Workspace, Your Way
            </h2>

            <p className="text-lg sm:text-xl leading-relaxed text-amber-100 drop-shadow-sm">
              Don’t settle for a dull layout! With full control over the <span className="text-yellow-300 font-semibold">toolbar</span>, <span className="text-pink-300 font-semibold">sidebar</span>, and <span className="text-indigo-300 font-semibold">background</span>, you can make your space uniquely yours.
              <br />
              Choose from vibrant themes and calming tones — create the perfect environment for focus and productivity.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-sky-100 p-8 sm:p-10 rounded-3xl shadow-xl gap-10 sm:gap-16">
        {/* Left Section - Descriptive Text */}
        <div className="w-full md:w-1/2 text-center md:text-left text-gray-800 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug">
            ✨ Boost Your Productivity
          </h2>
          <p className="text-lg sm:text-xl font-medium leading-relaxed">
            Discover a suite of intelligent tools <br />
            <span className="text-indigo-600 font-semibold">
              to simplify task management and elevate your workflow.
            </span>
          </p>
        </div>

        {/* Right Section - Rotating Text */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <RotatingText
            texts={[
              '🧠 Smart Time',
              '⏱️ Stopwatch',
              '📅 Calendar',
              '✅ Task Management',
              '📋 All Task Display',
              '🔔 Notification',
              '⬇️ Download',
              '🔐 Login'
            ]}
            mainClassName="px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl bg-gradient-to-r from-cyan-200 via-sky-200 to-blue-200 text-gray-900 font-bold rounded-xl shadow-md"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            rotationInterval={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default Heropage;