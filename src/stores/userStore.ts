import { makeAutoObservable, runInAction } from "mobx";
import { mockLogin, mockRegister } from "../api/mock";
import type { User } from "../types";
import { notificationStore } from "./notificationStore";

class UserStore {
    user: User | null = null;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    async login(email: string, password: string) {
        this.isLoading = true;
        try {
            const user = await mockLogin(email, password);
            runInAction(() => {
                this.user = user;
                this.isAuth = true;
            })
            notificationStore.add("Вы вошли")
            console.log({
                user: this.user,
                isAuth: this.isAuth
            })
        } catch (e) {
            console.warn(e)
            notificationStore.add("Ошибка авторизации")
        }
    }

    async register(email: string, password: string) {
        this.isLoading = true;
        try {
            const user = await mockRegister(email, password);
            runInAction(() => {
                this.user = user;
                this.isAuth = true;
            })
            notificationStore.add("Вы зарегистрировались")
            console.log({
                user: this.user,
                isAuth: this.isAuth
            })
        } catch (e) {
            console.warn(e)
            notificationStore.add("Ошибка регистрации")
        }
    }

    logout() {
        this.user = null;
        this.isAuth = false;
        console.log({
            user: this.user,
            isAuth: this.isAuth
        })
        notificationStore.add("Вы вышли")
    }
}

export const userStore = new UserStore();