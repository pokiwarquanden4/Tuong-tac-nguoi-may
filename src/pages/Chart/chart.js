import React, { useCallback, useState } from "react";
import styles from "./chart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ChartA = () => {
    const handleClick = useCallback((e, id) => {
        console.log(e)
        console.log(id)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <FontAwesomeIcon className={styles.backButton} icon={faChevronLeft} />
                <h2 className={styles.title}>Chart</h2>
                <button className={styles.add_button}>
                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </button>
            </div>
            <div className="input-group mb-3 w-100">
                <div className={styles.tags}>
                    <div className={styles.tag}>
                        24h
                    </div>
                    <div className={styles.tag}>
                        Week
                    </div>
                    <div className={styles.tag}>
                        Month
                    </div>
                    <div className={styles.tag}>
                        Year
                    </div>
                </div>
                <div className={styles.chart_header}>
                    Your Expenses
                </div>
                <div className={styles.chart}>
                    <Bar
                        data={{
                            labels: ["bike", "car", "scooter",
                                "truck", "auto", "Bus"],
                            datasets: [{
                                label: 'worst',
                                backgroundColor: "#000000",
                                data: [17, 0, 4, 11, 8, 9],
                                borderRadius: 10,
                            }, {
                                label: 'Okay',
                                backgroundColor: "#49A078",
                                data: [14, 0, 10, 6, 12, 16],
                                borderRadius: 10,
                            }, {
                                label: 'bad',
                                backgroundColor: "#998FC7",
                                data: [2, 0, 13, 3, 24, 7],
                                borderRadius: 10,
                            },
                            {
                                label: 'nothing',
                                backgroundColor: "#D9D9D9",
                                data: [2, 21, 13, 3, 24, 7],
                                borderRadius: 10,
                            }],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                tooltip: {
                                    enabled: false, // Vô hiệu hóa tooltip 
                                },
                                legend: {
                                    display: false, // Hides the legend
                                },
                            },
                            scales: {
                                x: {
                                    stacked: true,
                                },
                                y: {
                                    stacked: true
                                }
                            },
                            onClick: handleClick
                        }}
                    />
                </div>
                <div className={styles.chart_category}>
                    <div className={styles.category}>
                        Recive 1000$
                    </div>
                    <div className={styles.category}>
                        Shopping 1000$
                    </div>
                    <div className={styles.category}>
                        Spending 1000$
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartA;
