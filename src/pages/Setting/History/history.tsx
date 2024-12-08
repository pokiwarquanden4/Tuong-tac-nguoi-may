import React, { useState } from "react";
import styles from "./history.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { navLink } from "../../../routers";

const transactions = [
    { icon: "🍎", name: "Apple Store", category: "Entertainment", amount: "- $5,99" },
    { icon: "🎵", name: "Spotify", category: "Music", amount: "- $12,99" },
    { icon: "💵", name: "Money Transfer", category: "Transaction", amount: "$300" },
    { icon: "🛒", name: "Grocery", category: "Shopping", amount: "- $88" },
    { icon: "🎥", name: "Netflix", category: "Entertainment", amount: "- $5,99" },
    { icon: "💵", name: "Money Transfer", category: "Transaction", amount: "$300" },
    { icon: "🍎", name: "Apple Store", category: "Entertainment", amount: "- $5,99" },
    { icon: "🎵", name: "Spotify", category: "Music", amount: "- $12,99" },
    { icon: "🎥", name: "Netflix", category: "Entertainment", amount: "- $5,99" },
    { icon: "💵", name: "Money Transfer", category: "Transaction", amount: "$300" },
    { icon: "🍎", name: "Apple Store", category: "Entertainment", amount: "- $5,99" },
    { icon: "🎵", name: "Spotify", category: "Music", amount: "- $12,99" },
];

const History = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState(""); // State to manage search input

    // Filter transactions based on the search query
    const filteredTransactions = transactions.filter((transaction) =>
        transaction.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <FontAwesomeIcon className={styles.backButton} onClick={() => navigate(navLink.setting.nav)} icon={faChevronLeft} />
                <h2 className={styles.title}>History</h2>
            </div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    style={{ marginTop: "0" }}
                    className="form-control"
                    placeholder="Search by name"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={() => setSearchQuery("")} // Clear search query on button click
                >
                    Clear
                </button>
            </div>
            <ul className={styles.transactionList}>
                {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((transaction, index) => (
                        <li key={index} className={styles.transactionItem}>
                            <div className={styles.left}>
                                <div className={styles.icon}>{transaction.icon}</div>
                                <div>
                                    <div className={styles.name}>{transaction.name}</div>
                                    <div className={styles.category}>{transaction.category}</div>
                                </div>
                            </div>
                            <div className={styles.right}>{transaction.amount}</div>
                        </li>
                    ))
                ) : (
                    <li className={styles.noResults}>No transactions found</li>
                )}
            </ul>
        </div>
    );
};

export default History;
