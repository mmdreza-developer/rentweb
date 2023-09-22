import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./SidebarMenu.css"
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai"
import { ContextPanel } from '../../Pages/UserPanel/UserPanel'
import { FaUserCircle } from "react-icons/fa"
export default function SidebarMenu() {
    const contextData = useContext(ContextPanel)
    const closeMenu = () => {
        contextData.setOpen(false)
    }
    return (
        <div className={`flex flex-col gapy-4 fixed lg:relative h-screen w-96 bg-dark top-0 text-white duration-500 lg:right-0 ${contextData.open ? "right-0" : "-right-96"} `}>
            <div className='flex flex-col p-2'>
                <div className='flex justify-end mt-3 text-3xl lg:hidden text-white'><AiOutlineClose className='text-left cursor-pointer' onClick={closeMenu} /></div>
            </div>
            <div className='flex gap-x-3 items-center mr-5'>
                <div className='relative'>
                    <FaUserCircle className='text-4xl' />
                </div>
                <div className='flex flex-col'>
                    <div>محمد باقری</div>
                    <div className='text-xs text-gray'>کاربر معمولی</div>
                </div>
            </div>
            <div className='flex flex-col mt-4'>
                <NavLink to="profile" className={`flex items-center gap-x-2 p-2 border-r-8 border-orange-500 `}><AiOutlineHome className='text-2xl text-white' /><span className='text-white'>مشخصات کاربری</span></NavLink>
                <div className='flex flex-col gap-y-3 mr-5 mt-5'>
                    <h1 className='text-xl font-bold text-gray'>اطلاعات شخصی</h1>
                    <NavLink to="nothing">منو 1</NavLink>
                    <NavLink to="edit">منو 2</NavLink>
                    <NavLink to="hello">منو 3</NavLink>
                </div>
            </div>
        </div >
    )
}
