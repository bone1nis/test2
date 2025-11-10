import type React from "react";
import { useState } from "react";
import { userStore } from "../../stores/userStore";
import "./registerForm.css"
import { observer } from "mobx-react-lite";

export const RegisterForm: React.FC = observer(() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        userStore.register(email, password);
    }

    return (
        <div className="authForm">
            <h2>Регистрация</h2>
            <input placeholder="Почта" className="authFormInput" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Пароль" className="authFormInput" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="authFormBtn" onClick={handleSubmit}>
                Зарегистрироваться
            </button>
        </div>
    );
})