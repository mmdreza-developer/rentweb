import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa"
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { BsFileEarmarkTextFill } from "react-icons/bs"
export default function Profile() {
    const [name, setName] = useState("محمدرضا مقدر")
    const [email, setEmail] = useState("mmdreza@gmail.com")
    const [pass, setPass] = useState("")
    const [passAgain, setPassAgain] = useState("")
    return (
        <div className='flex flex-col gap-y-4 pr-10 mt-5'>
            <div>
                <h1 className='text-3xl text-orange-600 font-bold inline-block'>پروفایل من</h1>
            </div>
            <div className='flex gap-x-4'>
                <div className='text-6xl'><FaUserCircle /></div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='font-bold text-lg text-dark'>{name}</div>
                    <div className='text-gray text-sm font-bold'>ادمین سایت</div>
                </div>
            </div>
            <h1 className='text-xl font-bold text-gray mt-2'>اطلاعات شخصی</h1>
            <form action="" className='px-12' onSubmit={(e) => e.preventDefault()}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-2 md:gap-x-10 justify-center md:px-10'>
                    <div className='w-full flex flex-col gap-y-1'>
                        <label htmlFor="username" className='text-dark font-bold flex gap-x-1 items-center'><AiOutlineUser className='text-xl text-orange-600' /> نام کاربری</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} id='username' type="text" className='p-2 border-2 border-gray rounded w-full outline-none text-xs md:text-base placeholder:text-xs md:placeholder:text-base' placeholder='نام کاربری خود را وارد کنید' />
                    </div>
                    <div className='w-full flex flex-col gap-y-1'>
                        <label htmlFor="email" className='text-dark font-bold flex gap-x-1 items-center'><AiOutlineMail className='text-xl text-orange-600' /> ایمیل</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' className='p-2 border-2 border-gray rounded w-full outline-none text-xs md:text-base placeholder:text-xs md:placeholder:text-base' placeholder='ایمیل خود را وارد کنید' />
                    </div>
                    <div className='w-full flex flex-col gap-y-1'>
                        <label htmlFor="pass" className='text-dark font-bold flex gap-x-1 items-center'><RiLockPasswordLine className='text-xl text-orange-600' /> رمز عبور</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id='pass' className='p-2 border-2 border-gray rounded w-full outline-none text-xs md:text-base placeholder:text-xs md:placeholder:text-base' placeholder='ایمیل خود را وارد کنید' />
                    </div>
                    <div className='w-full flex flex-col gap-y-1'>
                        <label htmlFor="return-pass" className='text-dark font-bold flex gap-x-1 items-center'><RiLockPasswordLine className='text-xl text-orange-600' />تکرار رمزعبور</label>
                        <input value={passAgain} onChange={(e) => setPassAgain(e.target.value)} type="password" id='return-pass' className='p-2 border-2 border-gray rounded w-full outline-none text-xs md:text-base placeholder:text-xs md:placeholder:text-base' placeholder='ایمیل خود را وارد کنید' />
                    </div>

                </div>
                <div className='w-full flex flex-col gap-y-1 md:px-10 mt-5'>
                    <label htmlFor="biography" className='text-dark font-bold flex gap-x-1 items-center'><BsFileEarmarkTextFill className='text-xl text-orange-600' />بیوگرافی</label>
                    <textarea className='w-full border-2 border-gray rounded outline-none p-2' id="biography" rows="10" placeholder='درباره خودم'></textarea>
                </div>
                <div className='mt-7 md:pr-10 flex gap-x-2'>
                    <button className='w-44 py-2 duration-300 bg-orange-500 border-2 border-orange-500 text-white hover:shadow-md hover:shadow-orange-500 rounded'>ثبت</button>
                    <button className='w-44 py-2 duration-300 bg-white text-orange-500 hover:text-white hover:bg-orange-500 border-2 border-orange-500 rounded hover:shadow-md hover:shadow-orange-500'>انصراف</button>
                </div>
            </form>
        </div>
    )
}
