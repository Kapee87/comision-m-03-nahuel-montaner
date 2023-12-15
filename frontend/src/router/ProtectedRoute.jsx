import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useIsLogged } from '../hooks/useIslogged'
import Swal from 'sweetalert2'



function ProtectedRoute({ children }) {
    const { userData, setUserData } = useContext(UserContext)
    const { token } = useIsLogged()
    const navigate = useNavigate()

    useEffect(() => {
        if (token == '' || !token) {
            Swal.fire('Error', 'Debés iniciar sesión para ingresar a esta sección', 'error')
            const timeout = setTimeout(() => {
                clearTimeout(timeout)
                navigate('/', { replace: true })
            }, 2000);
            return
        }
    }, [])

    return (
        <>
            {children}
        </>
    )

}

export default ProtectedRoute