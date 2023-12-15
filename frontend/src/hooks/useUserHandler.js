import { useContext } from "react";
import { UserContext } from "../context/UserContext";
// import randomUser from '../assets/randomUser.jpg'
import axios from "axios";
import { apiUrl } from "../utils/urlStore";
import Swal from "sweetalert2";



export function useUserHandler() {
    const { setUserData } = useContext(UserContext)

    const register = async (username,
        email,
        password,
        avatarUrl) => {
        try {
            const newUser = await axios.post(`${apiUrl}/auth/register`, {
                username,
                email,
                password,
                avatarUrl
            })
            console.log(newUser.status !== 200, newUser.status, newUser);
            login(email, password)
            Swal.fire('Exito', 'Usuario registrado con éxito', 'success')
            return true

        } catch (error) {
            console.log(error);
            Swal.fire('error', `${error.response.data?.middleMessage || error.response.data?.error.map(err => err)}`, 'error')
            return false
        }
    }

    const logout = () => {
        setUserData(null)
        sessionStorage.clear()
    }

    const login = async (emailValue, passwordValue) => {
        try {
            const res = await axios.post(`${apiUrl}/auth/login`, { email: emailValue, password: passwordValue })
            console.log(res);
            const { email, username, avatarUrl, _id } = res.data
            sessionStorage.clear()
            sessionStorage.setItem('token', res.data.token)
            setUserData({ email, username, avatarUrl, _id })
        } catch (error) {
            console.log(error);
        }
        /* console.log(Cookies.get());

        const tempUser = {
            "email": "liostallone@mail.com",
            "name": "Lionel Stallone",
            "avatarUrl": randomUser
        }
        sessionStorage.setItem('token', '123qwe')
        sessionStorage.setItem('user', JSON.stringify(tempUser))
        setUserData(tempUser)
 */
        console.log(emailValue, passwordValue);
        return "dale"
    }
    const profile = async (token) => {
        try {
            const { data } = await axios.post(`${apiUrl}/auth/profile`, { token });
            // console.log(data);
            setUserData({ email: data.email, username: data.username, avatarUrl: data.avatarUrl, _id: data._id })
        } catch (error) {
            console.log(error)
            sessionStorage.removeItem('token')
            setUserData(null)
        }
    }

    const isLogged = () => {
        const token = sessionStorage.getItem('token')
        return token
    }

    return { logout, login, isLogged, profile, register }
}