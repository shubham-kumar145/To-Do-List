import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { IoCalendarNumberOutline, IoHome } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaTasks } from "react-icons/fa";

function MobileNav() {

  const bg_tool = useSelector((state) => state.slicer1.data.bg_tool)
    const navigate = useNavigate();
    const buttons = [
        { icon: <IoHome size={24} />, label: "Home", path: "/home" },
        { icon: <ImBooks size={24} />, label: "To Do", path: "/todo" },
        { icon: <GoBook size={24} />, label: "Focus", path: "/focus" },
        { icon:<FaTasks size={24}/>,label:"All Task",path:"/all-task"},
        { icon: <IoCalendarNumberOutline size={24} />, label: "Calendar", path: "/calendar" },
        { icon: <IoSettingsOutline size={24} />, label: "Setting", path: "/setting" },
        
    ];

    return (
        <div className={` ${bg_tool } fixed h-[8vh] bottom-0 left-0 w-full z-50 border-t border-gray-300 flex justify-around items-center p-2 shadow-inner md:hidden`}>
            {buttons.map((btn, index) => (
                <button
                    key={index}
                    onClick={() => navigate(btn.path)}
                    className="flex flex-col items-center text-gray-700 hover:text-pink-500 transition duration-300 ease-in-out"
                >
                    {btn.icon}
                    <span className="text-xs mt-1">{btn.label}</span>
                </button>
            ))}
        </div>
    );
}

export default MobileNav