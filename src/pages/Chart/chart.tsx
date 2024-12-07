// import React from "react";
// import { Bar } from "react-chartjs-2";
// import "./Analytics.css";

// const Chart = () => {
//     const data = {
//         labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//         datasets: [
//             {
//                 label: "Expenses",
//                 data: [400, 300, 500, 600, 700, 200, 900],
//                 backgroundColor: [
//                     "#A3A3A3",
//                     "#A3A3A3",
//                     "#A3A3A3",
//                     "#A3A3A3",
//                     "#6B4EFF",
//                     "#A3A3A3",
//                     "#A3A3A3",
//                 ],
//                 borderRadius: 5,
//             },
//             {
//                 label: "Highlight",
//                 data: [0, 0, 0, 0, 150, 0, 0],
//                 backgroundColor: "#000000",
//                 borderRadius: 5,
//             },
//         ],
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: { display: false },
//         },
//         scales: {
//             x: { grid: { display: false } },
//             y: { grid: { color: "#E0E0E0" } },
//         },
//     };

//     return (
//         <div className="analytics-container">
//             <header className="analytics-header">
//                 <button className="back-button">←</button>
//                 <h2>Analytics</h2>
//                 <button className="download-button">⬇</button>
//             </header>

//             <div className="time-filters">
//                 <button className="filter active">24 h</button>
//                 <button className="filter">Week</button>
//                 <button className="filter">Month</button>
//                 <button className="filter">Year</button>
//                 <button className="filter settings">⚙</button>
//             </div>

//             <div className="expenses-section">
//                 <h3>Your Expenses</h3>
//                 <Bar data={data} options={options} className="chart" />
//                 <div className="legend">
//                     <span className="legend-item grocery">Grocery $300</span>
//                     <span className="legend-item shopping">Shopping $250</span>
//                     <span className="legend-item transfer">Transfer $150</span>
//                 </div>
//             </div>

//             <div className="transactions">
//                 <h3>10 May, Fri</h3>
//                 <div className="transaction">
//                     <span className="icon transfer-icon">⇄</span>
//                     <div>
//                         <p>Quan Le Anh</p>
//                         <small>Transfer</small>
//                     </div>
//                     <p className="amount">$200</p>
//                 </div>
//                 <div className="transaction">
//                     <span className="icon netflix-icon">N</span>
//                     <div>
//                         <p>Netflix</p>
//                         <small>Shopping</small>
//                     </div>
//                     <p className="amount">$10</p>
//                 </div>
//                 <div className="transaction">
//                     <span className="icon food-icon">🍔</span>
//                     <div>
//                         <p>GrabFood</p>
//                         <small>Food</small>
//                     </div>
//                     <p className="amount">$20</p>
//                 </div>
//             </div>

//             <footer className="bottom-navigation">
//                 <button className="nav-button active">🏠</button>
//                 <button className="nav-button">📊</button>
//                 <button className="nav-button">⚙</button>
//             </footer>
//         </div>
//     );
// };

// export default Chart;
