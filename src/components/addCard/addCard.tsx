import React, { useState } from "react";
import "./AddCard.css";

const AddCard = () => {
    const [saveCard, setSaveCard] = useState(false);

    const handleSaveCardChange = () => {
        setSaveCard(!saveCard);
    };

    return (
        <div className="add-card-container">
            <div className="add-card-header">
                <div className="icon-container">📄</div>
                <h2>Add new card</h2>
                <button className="close-button">✖</button>
            </div>
            <p className="description">
                Streamline your checkout process by adding a new card for future transactions. Your card information is secured
                with advanced encryption technology.
            </p>

            <form className="card-form">
                <div className="input-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="4966 0000 0000 0000" />
                </div>
                <div className="inline-inputs">
                    <div className="input-group">
                        <label>Expiry Date</label>
                        <input type="text" placeholder="MM/YY" />
                    </div>
                    <div className="input-group">
                        <label>CVV</label>
                        <input type="text" placeholder="•••" />
                    </div>
                </div>
                <div className="input-group">
                    <label>Cardholder's Name</label>
                    <input type="text" placeholder="Enter cardholder's full name" />
                </div>
                <div className="save-card-checkbox">
                    <input
                        type="checkbox"
                        id="saveCard"
                        checked={saveCard}
                        onChange={handleSaveCardChange}
                    />
                    <label htmlFor="saveCard">Save my card</label>
                </div>
                <div className="form-buttons">
                    <button type="button" className="scan-button">
                        Scan Card
                    </button>
                    <button type="submit" className="add-button">
                        Add Card
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCard;
