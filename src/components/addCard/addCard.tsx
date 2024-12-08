import React, { useState } from "react";
import styles from "./addCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const AddCard = () => {
    const [saveCard, setSaveCard] = useState(false)

    return (
        <div className={styles.addCard}>
            <header className={styles.header}>
                <p>
                    Streamline your checkout process by adding a new card for future transactions.
                    Your card information is secured with advanced encryption technology.
                </p>
            </header>

            <form className={styles.cardForm}>
                <div className={styles.inputGroup}>
                    <label htmlFor="cardNumber">Card Number</label>
                    <div className={styles.cardInputWrapper}>
                        <input
                            type="text"
                            id="cardNumber"
                            placeholder="4966 0000 0000 0000"
                        />
                        <button type="button" className={styles.iconButton}>
                            <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>

                <div className={styles.flexRow}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <div className={styles.cardInputWrapper}>
                            <input type="text" id="expiryDate" placeholder="MM/YY" />
                            <button type="button" className={styles.iconButton}>
                                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" placeholder="•••" />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="cardholderName">Cardholder's Name</label>
                    <input
                        type="text"
                        id="cardholderName"
                        placeholder="Enter cardholder's full name"
                    />
                </div>

                <div className={styles.saveCard}>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={saveCard}
                            onChange={() => setSaveCard(!saveCard)}
                        />
                        <span className={styles.slider}></span>
                    </label>
                    Save my card
                </div>
            </form>
        </div>
    );
};

export default AddCard;
