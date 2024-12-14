import React, { useState } from "react";
import styles from "./GroupDetails.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronLeft, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { navLink } from "../../../../routers";

const GroupDetails = () => {
    const navigate = useNavigate();

    // Example data array for group members
    const [groupMembers, setGroupMembers] = useState([
        { name: "Nguyen Vu Anh Quan", email: "pokiwarquanden1@gmail.com", vertified: false },
        { name: "Tran Minh Quang", email: "pokiwarquanden4@gmail.com", vertified: true },
    ]);
    // State to manage new member inputs
    const [newMember, setNewMember] = useState({ name: "", email: "" });
    const [deleteId, setDeleteId] = useState<number | undefined>(undefined)

    // Handle input changes for new member
    const handleNewMemberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewMember({ ...newMember, [name]: value });
    };

    // Add new member to the group
    const handleAddMember = () => {
        if (newMember.name.trim() && newMember.email.trim()) {
            setGroupMembers([...groupMembers, { ...newMember, vertified: false }]);
            setNewMember({ name: "", email: "" }); // Reset the form
        }
    };

    // Remove a member
    const handleRemoveMember = (index: number) => {
        const updatedMembers = groupMembers.filter((_, i) => i !== index);
        setGroupMembers(updatedMembers);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <FontAwesomeIcon
                    className={styles.backButton}
                    onClick={() => navigate(navLink.groups.nav)}
                    icon={faChevronLeft}
                />
                <div>Group Details</div>
            </header>
            <div className={styles.content_wrapper}>
                <div className={styles.content}>
                    <div className={styles.profilePictureContainer}>
                        <div className={styles.profilePicture}></div>
                        <div className={styles.groupName}>
                            Group 3
                            <FontAwesomeIcon data-bs-toggle="modal" data-bs-target="#changename" className={styles.edit_button} icon={faEdit} />
                        </div>
                    </div>
                    {groupMembers.length > 0 ? (
                        groupMembers.map((member, index) => (
                            <div key={index} className={styles.inputGroup}>
                                <label className={styles.group_header} htmlFor={`fullname-${index}`}>
                                    <div className={styles.group_header_vl}>
                                        {member.name}
                                        <div className={`${styles.check_border} ${member.vertified ? styles.check_active : styles.check_nonactive}`}>
                                            <FontAwesomeIcon className={`${styles.check}`} icon={faCheck}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                    <FontAwesomeIcon onClick={() => setDeleteId(index)} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className={styles.deleteButton} icon={faTrash}></FontAwesomeIcon>
                                </label>
                                <input
                                    id={`fullname-${index}`}
                                    type="email"
                                    defaultValue={member.email}
                                />
                            </div>
                        ))
                    ) : (
                        <div className={styles.noData}>No members added yet</div> // Placeholder for no data
                    )}
                    <div data-bs-toggle="modal" data-bs-target="#addmember" className={styles.addButton}>Add member</div>
                    <button type="submit" className={styles.updateButton}>Save</button>
                </div>
            </div>


            {/* Add Group */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Are you sure ?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button onClick={() => handleRemoveMember(deleteId as number)} type="button" style={{ backgroundColor: '#FF4C4C' }} className="btn btn-primary" data-bs-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Change name */}
            <div className="modal fade" id="changename" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Group name</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input id="fullname" type="text" defaultValue="something" />
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add member modal */}
            <div
                className="modal fade"
                id="addmember"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                New member
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    value={newMember.name}
                                    onChange={handleNewMemberChange}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={newMember.email}
                                    onChange={handleNewMemberChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleAddMember}
                                data-bs-dismiss="modal"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupDetails;
