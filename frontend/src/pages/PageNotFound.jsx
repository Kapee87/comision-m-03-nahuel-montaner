import React from 'react'
import errorBg from '../assets/404.png'

export default function PageNotFound() {

    return (
        <div className="min-h-screen items-end flex justify-center">
            <img src={errorBg} alt="error 404: not found" className='min-h-screen object-scale-down lg:object-cover absolute' />
            <a href='/#/' className='btn w-60 h-16 mb-24 hover:shadow-xl hover:shadow-indigo-600 hover:text-white z-10'>Volver al inicio</a>
        </div>
    )
}
