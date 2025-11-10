import { observer } from "mobx-react-lite";
import type React from "react";
import { notificationStore } from "../../stores/notificationStore";

import "./notifications.css"

export const Notifications: React.FC = observer(() => {
    return (
        <>
            {notificationStore.notifications.map(item => (
                <h4 key={item.id} className="notification">{item.message}</h4>
            ))}
        </>
    )
})