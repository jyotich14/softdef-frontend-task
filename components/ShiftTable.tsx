import React from "react";
import { shiftData } from "../data/shifts";

const ShiftTable: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mt-6 p-4">
      <div className="overflow-x-auto">
        {/*Table Header*/}
        <div className="flex bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-semibold p-4 rounded-t-lg border-b border-gray-200 dark:border-gray-700">
          <div className="w-1/4">Employee</div>
          <div className="flex-grow">Shifts</div>
        </div>

        {/*Table Body*/}
        <div>
          {shiftData.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="p-4 border-b border-gray-200 dark:border-gray-700"
            >
              {/* Group Title */}
              <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-3">
                {group.group}{" "}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({group.count})
                </span>
              </h3>

              {/* Employee Rows */}
              {group.employees.map((employee, empIndex) => (
                <div
                  key={empIndex}
                  className="flex items-center py-3 border-b last:border-b-0 border-gray-100 dark:border-gray-700"
                >
                  {/* Employee Name */}
                  <div className="w-1/4 text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {employee.name}
                  </div>

                  {/* Shifts */}
                  <div className="flex-grow flex flex-wrap gap-2">
                    {employee.shifts.map((shift, shiftIndex) => (
                      <div
                        key={shiftIndex}
                        className={`p-2 text-xs rounded-md text-white min-w-[100px] shadow-sm transition transform hover:scale-105 hover:shadow-md ${
                          shift.status === "Assigned"
                            ? "bg-green-500"
                            : "bg-red-400"
                        }`}
                      >
                        <p className="font-semibold">{shift.time}</p>
                        <p className="text-[11px] opacity-90">
                          {shift.duration} | {shift.pay}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShiftTable;
