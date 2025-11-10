import { makeAutoObservable } from "mobx";
import type { Notification } from "../types";

class NotificationStore {
    notifications: Notification[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    add(message: string) {
        const id = Date.now();
        this.notifications.push({ id, message });
        setTimeout(() => {
            this.remove(id)
        }, 2000);
    }

    remove(id: number) {
        this.notifications = this.notifications.filter(item => item.id !== id);
    }
}

export const notificationStore = new NotificationStore();