import React from "react";
import styles from "./credit.module.scss";

const Credit = () => {
    return (
        <div className={styles["cards-container"]}>
            <div className={styles["header"]}>
                <div style={{ fontSize: '25px' }}>Cards</div>
                <button className={styles["add-button"]}>+ Add</button>
            </div>

            <div className={styles["card-display"]}>
                <div className={styles["bank-card"]}>
                    <p className={styles["bank-name"]}>Allied Supreme Bank</p>
                    <h3 className={styles["card-number"]}>8763 2736 9873 0329</h3>
                    <div className={styles["card-details"]}>
                        <p className={styles["card-holder"]}>
                            <strong>Card Holder Name</strong> <br />
                            Quang
                        </p>
                        <p className={styles["expiry-date"]}>
                            <strong>Expired Date</strong> <br />
                            10/28
                        </p>
                    </div>
                    <div className={styles["card-logo"]}>
                        <div className={`${styles["logo"]} ${styles["red"]}`}></div>
                        <div className={`${styles["logo"]} ${styles["yellow"]}`}></div>
                    </div>
                </div>
            </div>

            <div className={styles["budget-section"]}>
                <div className={styles["budget-item"]}>
                    <div className={styles["bubget-info"]}>
                        <p className={styles["bubget-info-main"]}>Monthly Budget</p>
                        <p className={styles["bubget-info-sub"]}>May 2023 current</p>
                    </div>
                    <div className={styles["budget-money"]}>
                        <p>
                            <strong>2,000$</strong>
                        </p>
                        <p className={styles["amount-left"]}>200$ left</p>
                    </div>
                </div>
                <div className={styles["budget-item"]}>
                    <div className={styles["bubget-info"]}>
                        <p className={styles["bubget-info-main"]}>Previous Month</p>
                        <p className={styles["bubget-info-sub"]}>April 2023</p>
                    </div>
                    <div className={styles["budget-money"]}>
                        <p>
                            <strong>3,000$</strong>
                        </p>
                        <p className={styles["amount-left"]}>10$ left</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Credit;
