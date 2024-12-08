import React from "react";
import styles from "./notify.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { categories } from "../../pages/Chart/charData";
import NotifyTags from "./notifyTags";

const notifications = [
    {
        id: 1,
        type: "received",
        description: "+ 200$ From Quan Le Anh",
        time: "2m",
    },
    {
        id: 2,
        type: "sent",
        description: "- 500$ To Quan Nguyen Vu Anh",
        time: "15m",
    },
    {
        id: 3,
        type: "received",
        description: "+ 200$ From Quan Le Anh",
        time: "1d",
    },
    {
        id: 4,
        type: "sent",
        description: "- 500$ To Quan Nguyen Vu Anh",
        time: "2d",
    },
    {
        id: 5,
        type: "sent",
        description: "- 500$ To Quan Nguyen Vu Anh",
        time: "1w",
    },
];

const Notifications = () => {
    return (
        <div className={styles.notificationMenu}>
            <ul className={styles.notificationList}>
                {notifications.map((notification) => (
                    <NotifyTags notification={notification}></NotifyTags>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
