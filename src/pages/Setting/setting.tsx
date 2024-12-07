import React, { useState } from "react";
import styles from "./setting.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import ChangePassword from "./ChangePassword/changePassword";

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>Settings</div>
            </header>

            <div className={styles.content_wrapper}>
                <div className={styles.content}>
                    <div className={styles.profileSection}>
                        <FontAwesomeIcon className={styles.profileImage} icon={faUser}></FontAwesomeIcon>
                        <p className={styles.profileName}>Tran Minh Quang</p>
                    </div>

                    <div className={styles.options}>
                        <div className={styles.section}>
                            <h3>Account Settings</h3>
                            <div className={styles.settingItem}>
                                <p>Edit profile</p>
                                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                            </div>
                            <div data-bs-toggle="modal" data-bs-target="#staticBackdrop" className={styles.settingItem}>
                                <p>Change password</p>
                                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                            </div>
                            <div className={styles.settingItem}>
                                <p>History</p>
                                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                            </div>
                            <div className={styles.settingItem}>
                                <p>Push notifications</p>
                                <label className={styles.switch}>
                                    <input
                                        type="checkbox"
                                        checked={notifications}
                                        onChange={() => setNotifications(!notifications)}
                                    />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>
                            <div className={styles.settingItem}>
                                <p>Dark mode</p>
                                <label className={styles.switch}>
                                    <input
                                        type="checkbox"
                                        checked={darkMode}
                                        onChange={() => setDarkMode(!darkMode)}
                                    />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h3>More</h3>
                            <div className={styles.settingItem}>
                                <p>About us</p>
                                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                            </div>
                            <div className={styles.settingItem}>
                                <p>Privacy policy</p>
                                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                            </div>
                            <div className={styles.settingItem}>
                                <p>Terms and conditions</p>
                                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Change Password</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ChangePassword></ChangePassword>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Change Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
