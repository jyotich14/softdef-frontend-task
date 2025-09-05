export const shiftData = [
    {
        group: "Bar Staff",
        count: 2,
        employees: [
            {
                name: "Carol",
                shifts: [
                    { time: "9:00 AM - 5:00 PM", duration: "8 hrs", pay: "$120", status: "Assigned"},
                   { time : "1:00 PM - 9:00 PM", duration: "8 hrs", pay: "$120", status: "Approved Leave"},
                ],
            },
            {
                name: "John Smith",
                shifts: [
                    { time: "6:00 PM - 2:00 AM", duration: "8 hrs", pay: "$130", status: "Assigned"},
                ],
            },
        ],
    },
    {
        group: "Janitors",
        count: 2,
        employees: [
            {
                name: "David Lee",
                shifts: [
                    {time: "8:00 AM - 4:00 PM", duration: "8 hrs", pay: "$100", status: "Assigned"},                    
                ],
            },
            {
                name: "Emily White",
                shifts: [
                    {time: "10:00 AM - 6:00 PM", duration: "8 hrs", pay: "$100", status: "Assigned"},
                ],
            },
        ] ,
    },
    {
        group: "Waiters/Waitresses",
        count: 6,
        employees: [
            {
                name: "Jane Doe",
                shifts: [
                    {time: "9:00 AM - 5:00 PM", duration: "8 hrs", pay: "$110", status: "Assigned"},
                ],
            },
        ],
    },
];