import React, { Fragment, useState } from "react";
import "./homepage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCreditCard, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faBars, faChartSimple, faHouse } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
    const [hide, setHide] = useState(false)

    const transactions = [
        { id: 1, type: "received", name: "Quan Le Anh", amount: 200, date: "20 Jan 2024 at 10:00 PM" },
        { id: 2, type: "sent", name: "Quan Nguyen Vu Anh", amount: -500, date: "20 Jan 2024 at 10:00 PM" },
        { id: 3, type: "sent", name: "Nhat Nguyen Minh", amount: -300, date: "20 Jan 2024 at 10:00 PM" },
        { id: 4, type: "sent", name: "Quan Nguyen Vu Anh", amount: -500, date: "20 Jan 2024 at 10:00 PM" },
        { id: 5, type: "sent", name: "Nhat Nguyen Minh", amount: -300, date: "20 Jan 2024 at 10:00 PM" },
        { id: 6, type: "sent", name: "Quan Nguyen Vu Anh", amount: -500, date: "20 Jan 2024 at 10:00 PM" },
        { id: 7, type: "sent", name: "Nhat Nguyen Minh", amount: -300, date: "20 Jan 2024 at 10:00 PM" },
        { id: 8, type: "sent", name: "Nhat Nguyen Minh", amount: -300, date: "20 Jan 2024 at 10:00 PM" },
    ];

    return (
        <div className="dashboard-container">
            <div className="header">
                <div className="profile">
                    <div className="avatar"></div>
                    <div className="greeting">
                        <h3>Quang</h3>
                        <p>Good Morning!</p>
                    </div>
                </div>
                <div className="notifications">
                    {/* <span className="bell-icon">🔔</span> */}
                    <FontAwesomeIcon className="bell-icon" icon={faBell}></FontAwesomeIcon>
                    <span className="notification-dot"></span>
                </div>
            </div>

            <div className="blance-card-container" onClick={() => {
                setHide(!hide)
            }}>
                <div className="balance-card">
                    <p>Your Total Balance</p>
                    {
                        !hide
                            ?
                            <FontAwesomeIcon className="eye-slash eye-slash-big" icon={faEyeSlash}></FontAwesomeIcon>
                            :
                            <Fragment>
                                <h1>10.000$</h1>
                                <div className="hide-button">
                                    Hide
                                    <FontAwesomeIcon className="eye-slash" icon={faEyeSlash}></FontAwesomeIcon>
                                </div>
                            </Fragment>
                    }
                </div>
            </div>

            <div className="recent-transactions">
                <h3>Recent Transaction</h3>
                <div className="overflow-con">
                    {transactions.map((transaction) => (
                        <div key={transaction.id} className="transaction">
                            <div className="transaction-info">
                                <div className={`icon ${transaction.type === "received" ? "received" : "sent"}`}>
                                    <FontAwesomeIcon className={`${transaction.type === "received" ? "icon-received" : "icon-sent"}`} icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                                <div className="details">
                                    <p>{transaction.type === "received" ? `From ${transaction.name}` : `To ${transaction.name}`}</p>
                                    <small>{transaction.date}</small>
                                </div>
                            </div>
                            <div className="amount">
                                <p>
                                    {transaction.amount}$
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
