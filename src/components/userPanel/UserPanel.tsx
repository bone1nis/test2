import { observer } from "mobx-react-lite";
import type React from "react";
import { userStore } from "../../stores/userStore";

export const UserPanel: React.FC = observer(() => {
    if (!userStore.isAuth) return null;
    return (
        <>
            <div>
                <h1>Вы вошли</h1>
                <h2>Почта: {userStore.user?.email}</h2>
                <button onClick={() => userStore.logout()}>Выйти</button>
            </div>
        </>
    )
})