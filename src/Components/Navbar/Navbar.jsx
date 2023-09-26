import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { MdAddShoppingCart } from "react-icons/md"
import { FaRegUserCircle, FaBars } from "react-icons/fa"
import { BsChevronDown } from "react-icons/bs"
import { BiCategory } from "react-icons/bi"
import { contextData } from '../../ContextData/ContextData'
import { useContext } from 'react'
export default memo(function Navbar() {
  console.log("NavBar");
  const context = useContext(contextData)
  const openMenu = () => {
    context.setOpenMenu(true)
    console.log("Navbar ==> Open Menu ");
  }
  return (
    <div className="w-full">
      <div className='container p-2'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-x-6 items-center'>
            <button onClick={openMenu} className='block md:hidden'><FaBars className='w-8 h-8 text-gray' /></button>
            <Link to="/"><img className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src="/images/logo.png" alt="" /></Link>
          </div>
          <div className='flex items-center gap-x-2'>
            <Link to="/panel/profile" className='text-orange-500 hidden lg:block'>آکادمی</Link>
            <Link to="/store" className='p-2 bg-whiteSky text-white flex items-center gap-x-2 rounded'><MdAddShoppingCart className='text-2xl' />
            </Link>
            <Link to="" className='p-2 bg-orange-500 hover:bg-orange-600 transition duration-500 text-white flex items-center gap-x-2 rounded'>
              <FaRegUserCircle className='text-2xl' />
              <Link to="/login/login-number" className='hidden md:block'>ورود / ثبت نام</Link>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-whiteSky hidden md:block">
        <div className="row py-6 shadow-md shadow-whiteSky">
          <div className='container relative'>
            <div className="row">
              <ul className=' gap-x-4 text-dark md:flex'>
                <li to="" className='flex items-center gap-x-1 cursor-pointer'>خانه</li>
                <li to="" className='flex items-center gap-x-1 group cursor-pointer'>قالب ها وردپرسی <BsChevronDown />
                  <ul className='absolute w-full bg-white transition-all duration-300 text-gray top-6 overflow-hidden right-0 z-10  group-hover:h-96 rounded shadow-lg shadow-dark gap-8 h-0 group-hover:flex'>
                    <li className='p-4'>
                      <li className='flex items-center text-xl text-dark'><BiCategory /> دسته بندی 1 </li>
                      <ul className='mr-2'>
                        <li>
                          <Link to="" className="hover:text-dark">زیرمنو 1</Link>
                        </li>
                        <li>
                          <Link to="" className="hover:text-dark">زیرمنو 1</Link>
                        </li>
                        <li>
                          <Link to="" className="hover:text-dark">زیرمنو 1</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='p-2'>
                      <li className='flex items-center text-xl text-dark'><BiCategory /> دسته بندی 2 </li>
                      <ul>
                        <li>
                          <Link to="" className="hover:text-dark">زیرمنو 2</Link>
                        </li>
                        <li>
                          <Link to="" className="hover:text-dark">زیرمنو 2</Link>
                        </li>
                        <li>
                          <Link to="" className="hover:text-dark">زیرمنو 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='p-2'>
                      <li className='flex items-center text-xl text-dark'><BiCategory /> دسته بندی 3  </li>
                      <ul>
                        <li>
                          <Link to="" className="hover:text-dark">زیرمنو 3</Link>
                        </li>
                        <li>
                          <Link to="" className="hover:text-dark">زیرمنو 3</Link>
                        </li>
                        <li>
                          <Link to="" className="hover:text-dark">زیرمنو 3</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li to="" className='flex items-center gap-x-1 cursor-pointer'>تماس با ما</li>
                <li to="" className='flex items-center gap-x-1 cursor-pointer'>درباره ما </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
)