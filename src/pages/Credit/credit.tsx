import React from "react";
import styles from "./credit.module.scss";
import AddCard from "../../components/addCard/addCard";
import { useSelector } from "react-redux";
import { RootState } from "../../config/store";
import { useNavigate } from "react-router-dom";
import { navLink } from "../../routers";

const Credit = () => {
    const navigate = useNavigate()
    const mode = useSelector((state: RootState) => state.mode.isFamilyMode)

    return (
        <div className={styles["cards-container"]}>
            <div className={styles["header"]}>
                <div style={{ fontSize: '25px' }}>Cards</div>
                <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className={styles["add-button"]}>+ Add</button>
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

            {
                mode
                    ?

                    <div className={styles["budget-section"]}>
                        <div className={styles["budget-item"]}>
                            <div className={styles["bubget-info"]}>
                                <p className={styles["bubget-info-main"]}>Family Monthly Budget</p>
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
                                <p className={styles["bubget-info-main"]}>Family Previous Month</p>
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
                    :
                    undefined
            }

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add New Card</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <AddCard></AddCard>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button data-bs-dismiss="modal" type="button" className="btn btn-outline-secondary">Scan Card</button>
                            <button data-bs-dismiss="modal" type="button" className="btn btn-primary">Add Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Credit;
