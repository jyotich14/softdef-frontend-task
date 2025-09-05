import React from "react";
import {
  LuLayoutDashboard,
  LuUsers,
  LuFileText,
  LuCalendar,
} from "react-icons/lu";

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-[#1F2937] dark:bg-gray-900 text-gray-300 dark:text-gray-200 h-screen p-4 flex-shrink-0 relative">
      <div className="text-xl font-bold text-white dark:text-white mb-8">
        SoftDef
      </div>
      <nav className="flex-1">
        <ul>
          {/*Dashboard and other Links*/}
          <li className="flex items-center space-x-3 p-3 my-2 rounded-md cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-800">
            <LuLayoutDashboard className="text-xl" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3  p-3 my-2 rounded-md cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-800">
            <LuUsers className="text-xl" />
            <span>Employees</span>
          </li>
          <li className="flex items-center space-x-3 p-3 my-2 rounded-md cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-800">
            <LuFileText className="text-xl" />
            <span>Reports</span>
          </li>
          <li className="flex items-center space-x-3 p-3 my-2 rounded-md cursor-pointer bg-gray-700 dark:bg-gray-800 text-white">
            <LuCalendar className="text-xl" />
            <span>Shifts</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
