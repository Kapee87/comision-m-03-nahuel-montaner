import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useUserHandler } from "./useUserHandler";
import { useIsLogged } from "./useIslogged";

// import axios from "axios";

export function useFirstLoad() {
    const { profile } = useUserHandler()
    const { token } = useIsLogged()
    const { userData, setUserData } = useContext(UserContext)

    // console.log(token);
    useEffect(() => {


        async function loadaxios() {
            try {
                profile(token)
            } catch (error) {
                console.log(error);
            }
        }

        if (token) {
            loadaxios()

        } else {
            setUserData(null)
            sessionStorage.clear()
        }

    }, [])
    return {
        userData,
        token
    }
}

