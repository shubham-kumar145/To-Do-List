import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change_colour, change_plate_colour, change_tool_colour } from "./Store/Slicer_bg";

// const colorOptions = {
//     pink: "bg-pink-100",
//     blue: "bg-blue-100",
//     green: "bg-green-100",
//     yellow: "bg-yellow-100",
//     purple: "bg-purple-100",
//     red: "bg-red-100",
//     orange: "bg-orange-100",
//     teal: "bg-teal-100",
//     indigo: "bg-indigo-100",
//     amber: "bg-amber-100",
// };
const colorOptions = {
    black:"bg-black/5",
    gray:"bg-black/60",
    white:"bg-white",
    pink: "bg-pink-100",
    rose: "bg-rose-100",
    red: "bg-red-100",
    orange: "bg-orange-100",
    amber: "bg-amber-100",
    yellow: "bg-yellow-100",
    lime: "bg-lime-100",
    green: "bg-green-100",
    emerald: "bg-emerald-100",
    teal: "bg-teal-100",
    cyan: "bg-cyan-100",
    sky: "bg-sky-50",
    blue: "bg-blue-100",
    indigo: "bg-indigo-100",
    violet: "bg-violet-100",
    purple: "bg-purple-300",
    fuchsia: "bg-fuchsia-100",
    slate: "bg-slate-100",
    zinc: "bg-zinc-100",
    neutral: "bg-neutral-100",
    stone: "bg-stone-100",
};

const Setting = () => {
    const dispatch = useDispatch();
    const bg = useSelector((state) => state.slicer1.data.bg);
    // const bg = useSelector((state) => state.slicer1.bg);

    const handleChange = (e) => {
        dispatch(change_colour(e.target.value));
    };

    const handleChange_plate = (e) => {
        dispatch(change_plate_colour(e.target.value));
    };
    const handleChange_tool = (e) => {
        dispatch(change_tool_colour(e.target.value));
    };

    return (
        <div className={`p-6 ${bg} h-[88vh] w-full rounded-2xl shadow-xl transition-all`}>
            <div className="flex flex-col max-w-md space-y-6">

                {/* Background Color */}
                <div className="space-y-2">
                    <label htmlFor="bg_colour" className="block text-lg font-semibold text-gray-800">
                        🎨 Choose Background Color:
                    </label>
                    <select
                        name="colour"
                        id="bg_colour"
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm bg-white text-gray-800 overflow-y-scroll custom-scrollbar focus:ring-2 focus:ring-rose-400 focus:outline-none transition"
                    >
                        <option value="">-- Select --</option>
                        {Object.entries(colorOptions).map(([key, className]) => (
                            <option key={key} value={className} className={`${className}`}>
                                {key[0].toUpperCase() + key.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Plate Color */}
                <div className="space-y-2">
                    <label htmlFor="plate_bg_colour" className="block text-lg font-semibold text-gray-800">
                        🧱 Choose Plate Background Color:
                    </label>
                    <select
                        name="plate_colour"
                        id="plate_bg_colour"
                        onChange={handleChange_plate}
                        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm bg-white text-gray-800 focus:ring-2 focus:ring-amber-400 focus:outline-none transition overflow-y-scroll custom-scrollbar"
                    >
                        <option value="">-- Select --</option>
                        {Object.entries(colorOptions).map(([key, className]) => (
                            <option key={className} value={className} className={`${className}`}>
                                {key[0].toUpperCase() + key.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Toolbar Color */}
                <div className="space-y-2">
                    <label htmlFor="tool_bg_colour" className="block text-lg font-semibold text-gray-800">
                        🛠️ Choose Toolbar Background Color:
                    </label>
                    <select
                        name="tool_colour"
                        id="tool_bg_colour"
                        onChange={handleChange_tool}
                        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm bg-white text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none transition overflow-y-scroll custom-scrollbar"
                    >
                        <option value="">-- Select --</option>
                        {Object.entries(colorOptions).map(([key, className]) => (
                            <option key={className} value={className} className={`${className}`}>
                                {key[0].toUpperCase() + key.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

            </div>
        </div>

    );
};

export default Setting;
