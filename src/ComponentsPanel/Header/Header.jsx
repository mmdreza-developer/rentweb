import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa"
import { FiLogOut } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { ContextPanel } from '../../Pages/UserPanel/UserPanel'
export default function Header() {
    const contextData = useContext(ContextPanel)
    console.log(contextData.open);
    const openMenu = () => {
        contextData.setOpen(true)
    }
    return (
        <div className=' flex justify-between p-2 w-full items-center'>
            <Link to="/" className='flex gap-x-4 items-center text-3xl'><FaBars className='text-dark cursor-pointer lg:hidden' onClick={openMenu} />
                <img src="/images/logo.png" width={60} alt="" /></Link>
            <div>
                <Link to="/login/login-number">
                    <FiLogOut className='text-3xl text-dark' />
                </Link>
            </div>
        </div>
    )
}
