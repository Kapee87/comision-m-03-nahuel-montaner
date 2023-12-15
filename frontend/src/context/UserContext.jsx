import { createContext, useState } from "react";
import { useFirstLoad } from "../hooks/useFirstLoad";


export const UserContext = createContext({
    userData: null,
    setUserData: () => { },
})

export const UserContextProvider = ({ children, initial = {} }) => {
    const [userData, setUserData] = useState(initial)
    const { token } = useFirstLoad()

    return (
        <UserContext.Provider value={{ userData, setUserData, token }}>
            {children}
        </UserContext.Provider>
    )
}