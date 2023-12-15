import React from 'react'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

function LogoBtn() {
    return (
        <NavLink to={'/'} style={{ "backgroundImage": `url(${logo})` }} className='bg-contain bg-no-repeat bg-center h-14 w-32 md:w-52 rounded-md'>
        </NavLink>
    )
}

export default LogoBtn


{/* <NavLink to="/" className="btn bg-transparent w-32 md:w-56 p-0 animate-hueRotate">
        </NavLink> */}