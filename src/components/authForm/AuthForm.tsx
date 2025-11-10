import type React from "react";
import { useState } from "react";
import { userStore } from "../../stores/userStore";
import "./authForm.css"
import { observer } from "mobx-react-lite";

export const AuthForm: React.FC = observer(() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        userStore.login(email, password);
    }

    return (
        <div className="authForm">
            <h2>Авторизация</h2>
            <input placeholder="Почта" className="authFormInput" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Пароль" className="authFormInput" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="authFormBtn" onClick={handleSubmit}>
                Войти
            </button>
        </div>
    );
})