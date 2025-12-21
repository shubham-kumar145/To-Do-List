import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setSecondsElapsed(0);
    setLaps([]);
  };

  const recordLap = () => {
    const d = Math.floor(secondsElapsed / 86400);
    const h = Math.floor((secondsElapsed % 86400) / 3600);
    const m = Math.floor((secondsElapsed % 3600) / 60);
    const s = secondsElapsed % 60;
    const formatted = `${d}d ${h}h ${m}m ${s}s`;
    setLaps((prev) => [...prev, formatted]);
  };

  const d = Math.floor(secondsElapsed / 86400);
  const h = Math.floor((secondsElapsed % 86400) / 3600);
  const m = Math.floor((secondsElapsed % 3600) / 60);
  const s = secondsElapsed % 60;

  return (
    <div className="flex flex-col md:flex-row w-full h-[88vh] md:h-full p-6 md:mt-5">
      {/* Timer Display Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-[70%] mb-10 md:mb-0">
        <div className="bg-white shadow-lg rounded-full w-64 h-64 flex items-center justify-center text-3xl font-bold text-gray-800 mb-10">
          {`${d}d ${h}h ${m}m ${s}s`}
        </div>

        <div className="space-x-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`${
              isRunning
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-green-500 hover:bg-green-600"
            } text-white px-6 py-3 rounded-full font-semibold shadow-md transition`}
          >
            {isRunning ? "✋ Pause" : "🚀 Start"}
          </button>
          <button
            onClick={handleReset}
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
          >
            🔄 Reset
          </button>
          <button
            onClick={recordLap}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
          >
            ⏱ Lap
          </button>
        </div>
      </div>

      {/* Lap List Section */}
      <div className="md:w-[30%] bg-white rounded-xl p-4 shadow-md overflow-auto max-h-[400px]">
        <h3 className="text-lg font-bold mb-2 text-gray-700">🏁 Laps</h3>
        {laps.length === 0 ? (
          <p className="text-gray-500">No laps recorded yet.</p>
        ) : (
          <ul className="space-y-2">
            {laps.map((lap, index) => (
              <li key={index} className="text-gray-800 font-mono">
                ⏳ Lap {index + 1}: <span className="text-blue-600">{lap}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
