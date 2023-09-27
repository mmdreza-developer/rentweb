import React, { useEffect, useState } from 'react'
import "./Login.css"
import { Link, NavLink, Outlet } from 'react-router-dom'
import { BsGoogle } from "react-icons/bs"
export default function Login() {
  useEffect(()=>{
    document.title="ثبت نام و ورود"
  },[])
  return (
    <div className='h-screen w-full flex justify-center items-center mt-10'>
      <div className='flex flex-col  rounded overflow-hidden ' style={{ width: "500px", height: "100vh" }}>
        <div className='flex justify-center items-center'>
          <img src="/images/logo.png" className='' alt="" style={{ height: 250 }} />
        </div>
        <div className="flex flex-col gap-3 p-3 grow">
          <div className='flex gap-4 justify-center items-center text-disabled tap-login'>
            <NavLink to="login-number" className="py-1 focus:border-b-2 btn-active"> ورود با شماره تلفن</NavLink>
            <NavLink to="login-username" className="py-1 btn-active">ورود با رمز عبور</NavLink>
          </div>
          <Outlet />
          <div className='mt-2 mb-6 font-medium'>
            <button className='bg-transparent border-2 text-orange-500 font-bold border-orange w-full p-3 rounded flex justify-center items-center gap-1'><BsGoogle className='text-2xl' /> ورود با حساب گوگل</button>
          </div>
          <div className='mt-5 text-center text-gray'>
            با ورود به سایت <Link to="" className='border-b-2 border-gray-600 hover:text-gray-500 pb-1'>شرایط و قوانین حریم خصوصی </Link> را میپذیرم
          </div>
        </div>
      </div>
    </div >
  )
}
