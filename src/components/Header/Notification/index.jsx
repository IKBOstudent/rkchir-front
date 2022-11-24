import React from "react";
import CloseMenuButton from "../Buttons/close-menu-button";

import "./notification.scss";

const Notification = () => {
    return (
        <div>
            <div className="notification-box hidden">
                <div className="notification-message">Notification</div>
                <button data-action="close" className="button-icon">
                    <CloseMenuButton />
                </button>
            </div>
        </div>
    );
};

export default Notification;
