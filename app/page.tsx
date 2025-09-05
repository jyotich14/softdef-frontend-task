"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar"; //import the Sidebar component
import Topbar from "../components/Topbar"; // import the Topbar component
import ShiftTable from "../components/ShiftTable"; // import the ShiftTable component

const HomePage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // start with dark mode

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(()=>{
    const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Sidebar />

      {/* Main Layout */}
      <div className="flex-1 flex flex-col">
        {/* Topbar with theme toggle */}
        <Topbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        {/* Page Content */}
        <main className="p-6">
          <ShiftTable />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
