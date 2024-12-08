import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./notify.module.scss";
import { categories } from "../../pages/Chart/charData";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface NotifyTagsInterface {
    notification: {
        id: number;
        type: string;
        description: string;
        time: string;
    };
}

const NotifyTags = ({ notification }: NotifyTagsInterface) => {
    const [isChange, setIsChange] = useState<boolean>(false)
    const [selectedTag, setSelectedTag] = useState<{
        label: string;
        color: string;
    }>({
        label: '',
        color: ''
    })

    return <li key={notification.id} className={styles.notificationItem}>
        <div className={`${styles.iconNotify} ${notification.type === "received" ? styles.received : styles.sent}`}>
            <FontAwesomeIcon className={`${notification.type === "received" ? styles.iconNotify_received : styles.iconNotify_sent}`} icon={faArrowRight}></FontAwesomeIcon>
        </div>
        <div className={styles.details}>
            <p className={styles.description}>{notification.description}</p>
            {
                isChange
                    ?
                    <div className={styles.categories}>
                        {categories.map((category, index) => (
                            <span onClick={() => {
                                setIsChange(!isChange)
                                setSelectedTag(category)
                            }} key={index} style={{ backgroundColor: category.color }} className={styles.category}>
                                {category.label}
                            </span>
                        ))}
                    </div>
                    :
                    <span onClick={() => setIsChange(!isChange)} style={{ backgroundColor: selectedTag.color ? selectedTag.color : 'lightgray' }} className={styles.category}>
                        {selectedTag.label ? selectedTag.label : 'Select tag'}
                    </span>
            }
        </div>
        <div className={styles.time}>{notification.time}</div>
    </li>
}

export default NotifyTags