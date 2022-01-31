import React from "react";
import "./Notification.css";
const Notification = ({ message, setMessage }) => {
    if (message === null) {
        return null;
    }
    setTimeout(() => {
        setMessage(null);
    }, 5000);
    return (
        <div className="noti">
            <p>{`${message}`}</p>
        </div>
    );
};

export default Notification;
