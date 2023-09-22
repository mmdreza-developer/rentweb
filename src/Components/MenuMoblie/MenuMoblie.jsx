import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from "react-icons/ai"
import "./Menu.css"
import { useContext } from 'react'
import { contextData } from '../../ContextData/ContextData'
import { BiCategory } from "react-icons/bi"
import { HiChevronDown } from "react-icons/hi"
import { BiSearchAlt2 } from "react-icons/bi"
export default memo(function MenuMoblie() {
    const context = useContext(contextData)
    console.log("Mobile Menu");
    const closeMenu = () => {
        context.setOpenMenu(false)
        console.log("Mobile Menu ==> Close Menu");
    }
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    return (
        <div className={` bg-dark text-white fixed z-10 menu-mobile ${context.openMenu ? "open-menu" : "close-menu"}`}>
            <div className='text-4xl pt-4 pl-4 flex justify-end text-white'><AiOutlineClose onClick={closeMenu} className='cursor-pointer hover:text-orange-600' /></div>
            <div className='flex justify-center items-center my-4'>
                <img src="/images/logo.png" className='w-28' alt="" />
            </div>
            <div className='px-10 relative'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='w-full p-2 pr-8 placeholder:pr-2 placeholder:text-white bg-transparent outline-none border-b-2' placeholder='جست و جو' />
                <button className='outline-none bg-transparent border-none absolute top-2 right-12 text-white text-2xl'><BiSearchAlt2 /></button>
            </div>
            <ul className='flex flex-col pt-4'>
                <Link to="" className='flex items-center gap-x-1 hover:text-orange-500 hover:bg-white pr-4 p-3 text-lg'><BiCategory />خانه </Link>
                <li to="" className='flex flex-col gap-x-1 text-lg cursor-pointer'><div onClick={() => setOpen(prevState => !prevState)} className='flex items-center gap-2 p-3 hover:bg-white hover:text-orange-600'><BiCategory /> قالب ها وردپرسی <HiChevronDown className={`transition duration-300 ${open ? "transform rotate-180" : ""}`} /></div>
                    <ul className={`overflow-hidden transition-all duration-500 ${open ? "h-auto" : "h-0"}`}>
                        <li className='hover:bg-white hover:text-orange-500 p-2'>
                            <Link>1</Link>
                        </li>
                        <li className='hover:bg-white hover:text-orange-500 p-2'>
                            <Link>2</Link>
                        </li>
                        <li className='hover:bg-white hover:text-orange-500 p-2'>
                            <Link>3</Link>
                        </li>
                        <li className='hover:bg-white hover:text-orange-500 p-2'>
                            <Link>4</Link>
                        </li>
                    </ul>
                </li>
                <Link to="" className='flex items-center gap-x-1 hover:text-orange-500 hover:bg-white pr-4 p-3 text-lg'><BiCategory />تماس با ما</Link>
                <Link to="" className='flex items-center gap-x-1 hover:text-orange-500 hover:bg-white pr-4 p-3 text-lg'><BiCategory /> درباره ما</Link>
            </ul>
        </div>
    )
}
)

