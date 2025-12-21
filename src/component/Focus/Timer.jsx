import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);
    const [day, setDay] = useState(0);
    const [start, setStart] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [key, setKey] = useState(0); // for forcing reset

    const totalSeconds = sec + min * 60 + hour * 3600 + day * 86400;

    function handlesubmit(e) {
        e.preventDefault();
        const form = e.target;
        setSec(Number(form.sec.value));
        setMin(Number(form.min.value));
        setHour(Number(form.hour.value));
        setDay(Number(form.day.value));
        setStart(true);
        setIsPlaying(true);
        setKey(prev => prev + 1);
    }

    function handleReset() {
        setSec(0);
        setMin(0);
        setHour(0);
        setDay(0);
        setStart(false);
        setIsPlaying(false);
        setKey(prev => prev + 1);
    }

    return (
        <div className="flex flex-col justify-center items-center w-full h-[88vh]  md:h-full p-4 ">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 drop-shadow">
                ⏳ Countdown Timer
            </h2>

            {start && totalSeconds > 0 && (
                <div className="flex justify-center items-center mb-10">
                    <div>
                        <CountdownCircleTimer
                            key={key}
                            isPlaying={isPlaying}
                            duration={totalSeconds}
                            colors={["#00bcd4", "#ff9800", "#f44336"]}
                            colorsTime={[totalSeconds, totalSeconds / 2, 0]}
                            size={220}
                            strokeWidth={10}
                        >
                            {({ remainingTime }) => {
                                const d = Math.floor(remainingTime / 86400);
                                const h = Math.floor((remainingTime % 86400) / 3600);
                                const m = Math.floor((remainingTime % 3600) / 60);
                                const s = remainingTime % 60;
                                return (
                                    <div className="text-xl font-semibold text-gray-700">
                                        {d}d {h}h {m}m {s}s
                                    </div>
                                );
                            }}
                        </CountdownCircleTimer>
                    </div>
                </div>
            )}

            <form
                onSubmit={handlesubmit}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-xl"
            >
                <input
                    type="number"
                    name="sec"
                    min={0}
                    max={59}
                    className="p-3 text-black rounded-xl border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-rose-300"
                    placeholder="Seconds"
                />
                <input
                    type="number"
                    name="min"
                    min={0}
                    max={59}
                    className="p-3 rounded-xl text-black border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-rose-300"
                    placeholder="Minutes"
                />
                <input
                    type="number"
                    name="hour"
                    min={0}
                    max={23}
                    className="p-3 rounded-xl text-black border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-rose-300"
                    placeholder="Hours"
                />
                <input
                    type="number"
                    name="day"
                    min={0}
                    max={365}
                    className="p-3 rounded-xl border-2 text-black border-gray-300 shadow-sm focus:ring-2 focus:ring-rose-300"
                    placeholder="Days"
                />

                <div className="col-span-full flex gap-4 justify-center mt-4 flex-wrap">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
                    >
                        🚀 Start
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`${isPlaying ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600" : "bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600"} text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300`}
                    >
                        {isPlaying ? "✋ Pause" : "▶ Resume"}
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
                    >
                        🔄 Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Timer;
