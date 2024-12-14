import React, { Fragment, useState } from "react";
import "./homepage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCreditCard, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faBars, faChartSimple, faHouse } from "@fortawesome/free-solid-svg-icons";
import Notifications from "../../components/notify/notify";

const transactionData = {
    0: [
        { id: 1, type: "received", name: "Quan Le Anh", amount: 200, date: "20 Jan 2024 at 10:00 PM" },
        { id: 2, type: "sent", name: "Quan Nguyen Vu Anh", amount: -500, date: "20 Jan 2024 at 10:00 PM" },
        { id: 3, type: "sent", name: "Nhat Nguyen Minh", amount: -300, date: "20 Jan 2024 at 10:00 PM" },
        { id: 4, type: "sent", name: "Quan Nguyen Vu Anh", amount: -500, date: "20 Jan 2024 at 10:00 PM" },
        { id: 5, type: "sent", name: "Nhat Nguyen Minh", amount: -300, date: "20 Jan 2024 at 10:00 PM" },
        { id: 6, type: "sent", name: "Quan Nguyen Vu Anh", amount: -500, date: "20 Jan 2024 at 10:00 PM" },
        { id: 7, type: "sent", name: "Nhat Nguyen Minh", amount: -300, date: "20 Jan 2024 at 10:00 PM" },
        { id: 8, type: "sent", name: "Nhat Nguyen Minh", amount: -300, date: "20 Jan 2024 at 10:00 PM" },
    ],
    1: [
        { id: 1, type: "received", name: "Alice Smith", amount: 500, date: "15 Jan 2024 at 2:30 PM" },
        { id: 2, type: "sent", name: "Bob Johnson", amount: -200, date: "15 Jan 2024 at 3:45 PM" },
        { id: 3, type: "received", name: "Carol Taylor", amount: 300, date: "15 Jan 2024 at 4:00 PM" },
        { id: 4, type: "sent", name: "David Brown", amount: -100, date: "15 Jan 2024 at 4:30 PM" },
    ],
    2: [
        { id: 1, type: "sent", name: "Emma Wilson", amount: -400, date: "18 Jan 2024 at 1:15 PM" },
        { id: 2, type: "received", name: "Frank Thomas", amount: 200, date: "18 Jan 2024 at 2:00 PM" },
        { id: 3, type: "received", name: "Grace Moore", amount: 300, date: "18 Jan 2024 at 2:45 PM" },
        { id: 4, type: "sent", name: "Hannah White", amount: -250, date: "18 Jan 2024 at 3:10 PM" },
    ],
    3: [
        { id: 1, type: "received", name: "Isabella Martin", amount: 700, date: "19 Jan 2024 at 9:00 AM" },
        { id: 2, type: "sent", name: "Jack Garcia", amount: -150, date: "19 Jan 2024 at 10:15 AM" },
        { id: 3, type: "received", name: "Karen Anderson", amount: 500, date: "19 Jan 2024 at 11:30 AM" },
        { id: 4, type: "sent", name: "Liam Martinez", amount: -300, date: "19 Jan 2024 at 12:45 PM" },
    ]
}


const HomePage = () => {
    const [transaction, setTransaction] = useState(transactionData[0])
    const [hide, setHide] = useState(false)

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = parseInt(event.target.value, 10) as keyof typeof transactionData; // Cast to keyof transactionData
        setTransaction(transactionData[selectedValue || 0]); // Update the transaction array
    };


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
                <div className="notifications" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
                <div className='transactions_header_homepage'>
                    <div className="recent">Recent</div>
                    <select onChange={handleSelectChange} className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Your transaction</option>
                        <option value="1">Quang's transaction</option>
                        <option value="2">Hiep's transaction</option>
                        <option value="3">Thuy's transaction</option>
                    </select>
                </div>
                <div className="overflow-con">
                    {transaction.map((transaction) => (
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

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Notifications</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Notifications></Notifications>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
