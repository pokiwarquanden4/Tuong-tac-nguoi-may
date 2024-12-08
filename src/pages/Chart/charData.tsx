// export const categories = ['Gift Money', 'Food & Drinks', 'Shopping', 'Bills', 'Transportation', 'Personal Loans', "Bank Loans"]

export const categories = [
    {
        label: 'Gift Money',
        color: "#49A078"
    },
    {
        label: 'Food & Drinks',
        color: "#998FC7"
    },
    {
        label: 'Shopping',
        color: "#D9D9D9"
    },
    {
        label: 'Bills',
        color: "#FF6F61"
    },
    {
        label: 'Transportation',
        color: "#6B8E23"
    },
    {
        label: 'Personal Loans',
        color: "#8B0000"
    },
    {
        label: 'Bank Loans',
        color: "#4682B4"
    },
]

export const weekData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [{
        label: 'Gift Money',
        backgroundColor: "#49A078",
        data: [0, 50, 0, 0, 0, 0, 100],
        borderRadius: 10,
    }, {
        label: 'Food & Drinks',
        backgroundColor: "#998FC7",
        data: [30, 40, 50, 60, 70, 80, 90],
        borderRadius: 10,
    }, {
        label: 'Shopping',
        backgroundColor: "#D9D9D9",
        data: [0, 20, 0, 30, 0, 40, 0],
        borderRadius: 10,
    }, {
        label: 'Bills',
        backgroundColor: "#FF6F61",
        data: [100, 0, 0, 150, 0, 0, 0],
        borderRadius: 10,
    }, {
        label: 'Transportation',
        backgroundColor: "#6B8E23",
        data: [20, 30, 40, 50, 60, 70, 80],
        borderRadius: 10,
    }, {
        label: 'Personal Loans',
        backgroundColor: "#8B0000",
        data: [0, 0, 100, 0, 0, 50, 0],
        borderRadius: 10,
    }, {
        label: 'Bank Loans',
        backgroundColor: "#4682B4",
        data: [0, 0, 0, 200, 0, 0, 0],
        borderRadius: 10,
    }],
}

export const dayData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`), // Labels for each hour (e.g., "0:00", "1:00", "2:00", ..., "23:00")
    datasets: [
        {
            label: 'Gift Money',
            backgroundColor: "#49A078",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Example data for gifts, adjust as needed
            borderRadius: 10,
        },
        {
            label: 'Food & Drinks',
            backgroundColor: "#998FC7",
            data: [0, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220], // Example data
            borderRadius: 10,
        },
        {
            label: 'Shopping',
            backgroundColor: "#D9D9D9",
            data: [0, 0, 0, 10, 20, 0, 30, 0, 0, 0, 40, 0, 0, 0, 50, 0, 0, 0, 0, 0, 60, 0, 0, 70], // Example data
            borderRadius: 10,
        },
        {
            label: 'Bills',
            backgroundColor: "#FF6F61",
            data: [0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0], // Example data
            borderRadius: 10,
        },
        {
            label: 'Transportation',
            backgroundColor: "#6B8E23",
            data: [0, 0, 0, 0, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190], // Example data
            borderRadius: 10,
        },
        {
            label: 'Personal Loans',
            backgroundColor: "#8B0000",
            data: [0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 30, 0, 0, 0, 40, 0, 0], // Example data
            borderRadius: 10,
        },
        {
            label: 'Bank Loans',
            backgroundColor: "#4682B4",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0], // Example data
            borderRadius: 10,
        }
    ],
};

export const monthData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Labels for each day (e.g., "Day 1", "Day 2", ..., "Day 30")
    datasets: [
        {
            label: 'Gift Money',
            backgroundColor: "#49A078",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 100, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Example data for gift money
            borderRadius: 10,
        },
        {
            label: 'Food & Drinks',
            backgroundColor: "#998FC7",
            data: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320], // Example data for food & drinks
            borderRadius: 10,
        },
        {
            label: 'Shopping',
            backgroundColor: "#D9D9D9",
            data: [0, 20, 0, 30, 0, 40, 0, 0, 50, 0, 60, 0, 70, 0, 0, 0, 0, 80, 0, 90, 0, 0, 100, 0, 0, 110, 0, 0, 120, 0], // Example data for shopping
            borderRadius: 10,
        },
        {
            label: 'Bills',
            backgroundColor: "#FF6F61",
            data: [100, 0, 0, 150, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Example data for bills
            borderRadius: 10,
        },
        {
            label: 'Transportation',
            backgroundColor: "#6B8E23",
            data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310], // Example data for transportation
            borderRadius: 10,
        },
        {
            label: 'Personal Loans',
            backgroundColor: "#8B0000",
            data: [0, 0, 100, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0], // Example data for personal loans
            borderRadius: 10,
        },
        {
            label: 'Bank Loans',
            backgroundColor: "#4682B4",
            data: [0, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Example data for bank loans
            borderRadius: 10,
        }
    ],
};

export const yearData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: 'Gift Money',
            backgroundColor: "#49A078",
            data: [0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100], // Example data for gift money each month
            borderRadius: 10,
        },
        {
            label: 'Food & Drinks',
            backgroundColor: "#998FC7",
            data: [150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260], // Example data for food & drinks each month
            borderRadius: 10,
        },
        {
            label: 'Shopping',
            backgroundColor: "#D9D9D9",
            data: [0, 20, 0, 30, 0, 40, 0, 0, 50, 0, 60, 0], // Example data for shopping each month
            borderRadius: 10,
        },
        {
            label: 'Bills',
            backgroundColor: "#FF6F61",
            data: [100, 150, 200, 150, 130, 170, 180, 190, 160, 150, 140, 130], // Example data for bills each month
            borderRadius: 10,
        },
        {
            label: 'Transportation',
            backgroundColor: "#6B8E23",
            data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160], // Example data for transportation each month
            borderRadius: 10,
        },
        {
            label: 'Personal Loans',
            backgroundColor: "#8B0000",
            data: [0, 0, 100, 0, 0, 50, 0, 0, 0, 0, 0, 0], // Example data for personal loans each month
            borderRadius: 10,
        },
        {
            label: 'Bank Loans',
            backgroundColor: "#4682B4",
            data: [0, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0], // Example data for bank loans each month
            borderRadius: 10,
        }
    ],
};


