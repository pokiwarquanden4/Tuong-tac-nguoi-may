import React, { useCallback, useEffect, useState } from "react";
import styles from "./chart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { dayData, monthData, weekData, yearData } from "./charData";

const tags = [
    { label: '24h', data: dayData },
    { label: 'Week', data: weekData },
    { label: 'Month', data: monthData },
    { label: 'Year', data: yearData }
];

const ChartA = () => {
    const [currentTag, setCurrentTag] = useState('24h')
    const [chartData, setChartData] = useState(dayData)
    const [barId, setBarId] = useState(0)
    const [isShow, setIsShow] = useState(true)
    const [categories, setCategories] = useState({
        time: '',
        categories: []
    })

    useEffect(() => {
        const datasets = chartData.datasets
        const categories = []
        let isShow = false
        datasets.forEach((data) => {
            if (data.data[barId]) isShow = true
            categories.push({
                label: data.label,
                data: data.data[barId],
                color: data.backgroundColor
            })
        })

        setIsShow(isShow)
        setCategories({
            time: chartData.labels[barId],
            categories: categories
        })
    }, [barId, chartData])

    const handleClick = useCallback((e, con) => {
        if (!con[0]) return
        const index = con[0].index

        setBarId(index)
    }, [])

    function getRandomDateTimeIn2024() {
        const start = new Date("2024-01-01T00:00:00");
        const end = new Date("2024-12-31T23:59:59");
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

        const year = randomDate.getFullYear();
        const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(randomDate.getDate()).padStart(2, '0');
        const hours = String(randomDate.getHours()).padStart(2, '0');
        const minutes = String(randomDate.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {/* <FontAwesomeIcon className={styles.backButton} icon={faChevronLeft} /> */}
                <h2 className={styles.title}>Chart</h2>
                <button className={styles.add_button}>
                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </button>
            </div>
            <div className="input-group mb-3 w-100">
                <div className={styles.tags}>
                    {tags.map((tag, id) => {
                        return <div
                            id={id}
                            className={`${styles.tag} ${currentTag === tag.label ? styles.tag_active : ''}`}
                            onClick={() => {
                                setChartData(tag.data)
                                setCurrentTag(tag.label)
                            }}
                        >
                            {tag.label}
                        </div>
                    })}
                </div>
                <div className={styles.chart_header}>
                    Your Expenses
                </div>
                <div className={styles.chart}>
                    <Bar
                        data={chartData}
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
                    {categories.categories.map((item) => {
                        if (!item.data) return undefined
                        return <div style={{ backgroundColor: item.color }} className={styles.category}>
                            {item.label} {item.data}$
                        </div>
                    })}
                </div>
                <div className={styles.date}>
                    {categories.time}
                </div>
                <div className={styles.transactions}>
                    {isShow
                        ?
                        categories.categories.map((transaction, id) => {
                            if (!transaction.data) return undefined
                            return (
                                <div key={id} className="transaction">
                                    <div className="transaction-info">
                                        <div className={`icon sent`} style={{ backgroundColor: transaction.color }}>
                                            <FontAwesomeIcon className={`icon-sent`} icon={faArrowRight}></FontAwesomeIcon>
                                        </div>
                                        <div className="details">
                                            <p>{transaction.label}</p>
                                            <small>{getRandomDateTimeIn2024()}</small>
                                        </div>
                                    </div>
                                    <div className="amount">
                                        <p>
                                            {transaction.data}$
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className={styles.noData}>No Transaction</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ChartA;
