import React, { useCallback, useEffect, useState } from "react";
import styles from "./chart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronLeft, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { dayData0, dayData1, dayData2, dayData3, monthData0, monthData1, monthData2, monthData3, weekData0, weekData1, weekData2, weekData3, yearData0, yearData1, yearData2, yearData3 } from "./charData";
import { useSelector } from "react-redux";

const tagList = {
    0: [
        { label: '24h', data: dayData0 },
        { label: 'Week', data: weekData0 },
        { label: 'Month', data: monthData0 },
        { label: 'Year', data: yearData0 }
    ],
    1: [
        { label: '24h', data: dayData1 },
        { label: 'Week', data: weekData1 },
        { label: 'Month', data: monthData1 },
        { label: 'Year', data: yearData1 }
    ],
    2: [
        { label: '24h', data: dayData3 },
        { label: 'Week', data: weekData3 },
        { label: 'Month', data: monthData3 },
        { label: 'Year', data: yearData3 }
    ],
    3: [
        { label: '24h', data: dayData2 },
        { label: 'Week', data: weekData2 },
        { label: 'Month', data: monthData2 },
        { label: 'Year', data: yearData2 }
    ],
}

const ChartA = () => {
    const mode = useSelector((state) => state.mode.isFamilyMode)
    const [currentTag, setCurrentTag] = useState('24h')
    const [chartData, setChartData] = useState(dayData0)
    const [barId, setBarId] = useState(0)
    const [tagData, setTagData] = useState(tagList[0])
    const [isShow, setIsShow] = useState(true)
    const [categories, setCategories] = useState({
        time: '',
        categories: []
    })

    useEffect(() => {
        const currentData = tagData.find((tag) => tag.label === currentTag).data

        const datasets = currentData.datasets
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
            time: currentData.labels[barId],
            categories: categories
        })
    }, [barId, currentTag, tagData])

    const handleClick = useCallback((e, con) => {
        if (!con[0]) return
        const index = con[0].index

        setBarId(index)
    }, [])

    useEffect(() => {
        const currentData = tagData.find((tag) => tag.label === currentTag).data

        const blankDataSet = {
            label: '',
            backgroundColor: '#D9D9D9',
            data: [],
            borderRadius: 10,
        }

        const newDataSet = currentData.datasets.map((item) => {
            const dataList = [...item.data]
            dataList.forEach((data, index) => {
                if (!blankDataSet.data[index]) blankDataSet.data[index] = 0
                if (barId !== index) {
                    dataList[index] = 0
                    blankDataSet.data[index] += data
                }
            })

            return {
                label: item.label,
                backgroundColor: item.backgroundColor,
                data: dataList,
                borderRadius: item.borderRadius,
            }
        })

        newDataSet.push(blankDataSet)

        const newData = {
            labels: currentData.labels,
            datasets: newDataSet
        }

        setChartData(newData)
    }, [barId, currentTag, tagData])

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

    const handleSelectChange = (event) => {
        const selectedValue = parseInt(event.target.value, 10) // Cast to keyof transactionData
        setTagData(tagList[selectedValue || 0]); // Update the transaction array
    };

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
                    {tagData.map((tag, id) => {
                        return <div
                            id={id}
                            className={`${styles.tag} ${currentTag === tag.label ? styles.tag_active : ''}`}
                            onClick={() => {
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
                    {
                        mode
                            ?
                            <select onChange={handleSelectChange} className={`${styles.userSelect} form-select form-select-sm`} aria-label=".form-select-sm example">
                                <option selected>Your transaction</option>
                                <option value="1">Quang's transaction</option>
                                <option value="2">Hiep's transaction</option>
                                <option value="3">Thuy's transaction</option>
                            </select>
                            :
                            undefined
                    }
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
