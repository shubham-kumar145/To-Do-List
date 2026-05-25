import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./component/Home";
import Calendar from "./component/Calendar";
import Focus from "./component/Focus";
import Navbar from "./component/Navbar";
import MobileNav from "./component/MobileNav";
import Setting from "./component/Setting";
import ToDo from "./component/ToDo";
import PageNotFount from "./component/PageNotFount";
import Navbar_main from "./component/Navbar_main";
import All_task from "./component/All_task";
import Details from "./Details";
import ClickSpark from "./component/ClickSpark";
import Login from "./Login";

function AppLayout() {
  const bg_plate = useSelector((state) => state.slicer1.data.bg_plate)
  const bg_tool = useSelector((state) => state.slicer1.data.bg_tool)
  return (
    <div className={`${bg_plate}`}>
      <div className="h-[3rem] bg-gray-500 w-full">
        <Navbar_main />
      </div>
      <div className={`min-h-[calc(100vh-3rem)] w-full transition-colors duration-500 flex flex-col md:flex-row gap-3 p-1 sm:p-4 md:pb-4 sm:pb-20`}>

        {/* Sidebar */}
        <nav className={`hidden md:block md:w-[20%] ${bg_tool} rounded-3xl shadow-2xl p-6 sticky top-6 h-[calc(100vh-5rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-rose-300 scrollbar-track-transparent`}>
          <Navbar />
        </nav>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-2xl shadow-2xl p-1 overflow-y-auto h-[calc(100vh-5rem)] ">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/focus" element={<Focus />}></Route>
              <Route path="/setting" element={<Setting />} />
              <Route path="/todo" element={<ToDo />} />
              <Route path="/all-task" element={<All_task />} />
              <Route path="*" element={<PageNotFount />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Mobile Bottom Nav */}
        <MobileNav />
      </div>
    </div>

  )
}
function App() {
  return (
    <ClickSpark
      sparkColor='blue'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >

      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </ClickSpark>

  );
}

export default App;
