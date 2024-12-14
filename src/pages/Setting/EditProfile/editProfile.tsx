import React from "react";
import styles from "./editProfile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { navLink } from "../../../routers";
import { showAlert } from "../../../components/alert/notify";

const EditProfile = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <FontAwesomeIcon className={styles.backButton} onClick={() => navigate(navLink.setting.nav)} icon={faChevronLeft}></FontAwesomeIcon>
                <div>Edit Profile</div>
            </header>
            <div className={styles.content_wrapper}>
                <div className={styles.content}>
                    <div className={styles.profilePictureContainer}>
                        <div className={styles.profilePicture}></div>
                        <button className={styles.changePictureButton}>Change Picture</button>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="nickname">What do we call you</label>
                        <input id="nickname" type="text" defaultValue="Quang" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="fullname">Full name</label>
                        <input id="fullname" type="text" defaultValue="Tran Minh Quang" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="text" defaultValue="+14987889999" />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email address</label>
                        <input id="email" type="email" defaultValue="abc@xyz.com" />
                    </div>
                    <button onClick={() => {
                        navigate(navLink.setting.nav)
                        showAlert('Success')
                    }} type="submit" className={styles.updateButton}>Update</button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
