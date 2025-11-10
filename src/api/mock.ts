import type { User } from "../types";

export const mockLogin = (email: string, password: string): Promise<User> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "123@mail.ru" && password === "123") {
                resolve({ email, password });
            } else {
                reject({ message: "Ошибка авторизации" })
            }
        }, 1000);
    })

export const mockRegister = (email: string, password: string): Promise<User> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({ email, password });
        }, 1000);
    })