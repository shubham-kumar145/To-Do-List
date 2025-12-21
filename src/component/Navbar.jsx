import { NavLink } from "react-router-dom";
import ClickSpark from "./ClickSpark";

const navItems = [
  { path: "/home", label: "🏠 Home" },
  { path: "/todo", label: "📝 Add Task" },
  { path: "/focus", label: "🎯 Focus" },
  { path: "/all-task", label: "📋 All Task" },
  { path: "/calendar", label: "📅 Calendar" },
  { path: "/setting", label: "⚙️ Setting" },
];


const Navbar = () => {
  return (
    <ClickSpark
      sparkColor='blue'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >

      <nav
        className="flex flex-col h-fullshadow-xl rounded-xl lg:p-2 space-y-2"
      >
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `lg:px-4 text-xl py-2 rounded-lg font-semibold transition-all duration-300 ${isActive
                ? "bg-rose-500 text-white scale-105 shadow-md"
                : "text-rose-700 hover:bg-rose-200"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </ClickSpark>
  );
};

export default Navbar;
