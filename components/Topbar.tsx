import React from "react";
import { LuSun, LuMoon } from "react-icons/lu";

interface TopbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ isDarkMode, toggleTheme }) => {
  // Function to get start and end of current week
  const getCurrentWeekRange = () => {
    const today = new Date();

    //get current day index (0 = sunday, 1 = Monday, ... 6 = Saturday)
    const day = today.getDay();

    // adjust to Monday as start (ISO Standard)
    const diffToMonday = today.getDate() - day + (day === 0 ? -6 : 1);

    const monday = new Date(today.setDate(diffToMonday));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };

    return `${monday.toLocaleDateString(
      "en-US",
      options
    )} - ${sunday.toLocaleDateString("en-US", options)}`;
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex space-x-4 items-center">
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400">
            Shift View
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
            Staff View
          </button>
        </div>

        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            Status: All
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            Advanced Filter
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Current Week
        </span>
        <span className="font-semibold text-gray-800 dark:text-white">
          {getCurrentWeekRange()}
        </span>
        <button
          onClick={toggleTheme}
          className="p-2 ml-4 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <LuSun className="text-xl" />
          ) : (
            <LuMoon className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Topbar;
