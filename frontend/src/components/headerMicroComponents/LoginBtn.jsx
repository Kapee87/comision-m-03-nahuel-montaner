import React, { useContext, useEffect, useRef } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useUserHandler } from '../../hooks/useUserHandler'
import { useIsLogged } from '../../hooks/useIslogged'

const genericAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3jvkkZz-fiLioZZcyhugT2K7wghnw9THwg&usqp=CAU'

function LoginBtn() {
    const { token } = useIsLogged()
    const { userData } = useContext(UserContext)
    const { logout, isLogged, login, profile } = useUserHandler()
    const navigate = useNavigate()

    const inputRefs = {
        email: useRef(null),
        password: useRef(null),
    };

    useEffect(() => {
        token ? profile(token) : ''
        // console.log(userData);
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        const emailValue = inputRefs.email.current.value;
        const passwordValue = inputRefs.password.current.value;
        // console.log(`Email: ${emailValue}, Contraseña: ${passwordValue}`);

        login(emailValue, passwordValue);
        if (isLogged())
            navigate('/', { replace: true })
    }

    const handleCloseSession = () => {
        if (isLogged()) {
            logout()
            window.location = '/'
        }
    }


    return (
        <div className="mr-8 tooltip tooltip-bottom" data-tip="Iniciar sesión">
            <button className={`btn btn-square btn-ghost text-2xl`} onClick={() => document.getElementById('my_modal_2').showModal()}>
                🔐
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box flex flex-col gap-5
                ">
                    <h3 className="font-bold text-lg">
                        {!token ? 'Inicio de sesión' : 'Bienvenid@'}
                    </h3>

                    {
                        //usuario logeado o no condiciona el contenido
                        token & userData?.avatarUrl ?
                            <div className="avatar">
                                {userData?.name}
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={userData?.avatarUrl || genericAvatar} alt={userData?.avatarUrl} />
                                </div>
                            </div>
                            : ''
                    }
                    {
                        token ?
                            <div className='flex flex-col gap-6 items-center mt-4'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={userData?.avatarUrl} />
                                    </div>
                                </div>
                                <h3>{userData?.email} </h3>
                                <button className='btn btn-outline ' onClick={handleCloseSession} >
                                    Cerrar sesión
                                </button>

                            </div>
                            :
                            <form action="" className='flex flex-col items-center gap-2 [&_label_input]:rounded-md [&_label_input]:text-sm [&_label_input]:text-center [&_label_input]:ml-4 [&_label]:w-full' onSubmit={handleLogin}>
                                <label htmlFor="email">Email:
                                    <input type="email" name='email' ref={inputRefs.email} placeholder='email de usuario' />
                                </label>
                                <label htmlFor="password">Contraseña:
                                    <input type="password" name='password' ref={inputRefs.password} placeholder='contraseña' />
                                </label>
                                <button type='submit' className='btn btn-outline'>iniciar sesión</button>
                                <span>¿No tenés cuenta?, <a href={'/register'}>registrate gratis! </a></span>
                            </form>
                    }
                    <p className="pt-14 opacity-60 text-xs">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop bg-slate-400 bg-opacity-40">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default LoginBtn