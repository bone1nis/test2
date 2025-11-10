import { useState } from "react"
import { AuthForm } from "../authForm/AuthForm"
import { RegisterForm } from "../registerForm/RegisterForm"
import { userStore } from "../../stores/userStore"
import { observer } from "mobx-react-lite"

export const AuthSection: React.FC = observer(() => {
    const [mode, setMode] = useState<"register" | "login">("register")


    if (userStore.isAuth) return null;
    return (
        <>
            {mode === "login" ? (
                <AuthForm />
            ) : (
                <RegisterForm />
            )}
            <button onClick={() => setMode(mode === "login" ? "register" : "login")}>
                {mode === "login" ? "Зарегистрироваться" : "Войти"}
            </button>
        </>
    )
})