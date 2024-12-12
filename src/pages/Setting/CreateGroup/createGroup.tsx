import React, { useState } from "react";
import styles from "./createGroup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faPeopleGroup, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { navLink } from "../../../routers";

const transactions = [
    { name: "Family 1", category: "Entertainment", amount: "- $5,99" },
    { name: "Family 2", category: "Music", amount: "- $12,99" },
];

const Groups = () => {
    const [selected, setSelected] = useState(0)
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
                <h2 className={styles.title}>Groups</h2>
                <button onClick={() => navigate(navLink.addGroup.nav)} className={styles.add_button}>+ Add</button>
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
                        <div className={styles.list}>
                            <input
                                type="checkbox"
                                className={`form-check-input ${styles.checkBox}`}
                                checked={index === selected} // Bind checked state to `selected`
                                onChange={() => setSelected(index)} // Update `selected` on change
                            />
                            <li onClick={() => navigate(navLink.groupsDetails.nav)} key={index} className={`${styles.transactionItem} ${index === selected ? styles.active : styles.disable}`}>
                                <div className={styles.left}>
                                    <div className={styles.icon}>
                                        <FontAwesomeIcon className={styles.peopleIcon} icon={faPeopleGroup}></FontAwesomeIcon>
                                    </div>
                                    <div>
                                        <div className={styles.name}>{transaction.name}</div>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon className={styles.plus_icon} icon={faPlus}></FontAwesomeIcon>
                                </div>
                            </li>
                        </div>
                    ))
                ) : (
                    <li className={styles.noResults}>No transactions found</li>
                )}
            </ul>
            {/* <div className={styles.bottom_nav}>
                <div className={styles.bottom_header}>
                    Select your current group
                </div>
                <div className={styles.bottom_list}>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div> */}
        </div>
    );
};

export default Groups;
