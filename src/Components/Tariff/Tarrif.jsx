import React, { memo } from 'react'
import { GiConfirmed } from "react-icons/gi"
export default memo(function Tarrif() {

    return (
        <div className='flex flex-col transition-all duration-300 shadow-gray w-full px-6 rounded transform hover:-translate-y-1'>
            <div className='flex flex-col items-center my-5 p-3 gap-y-2 w-full grow-1'>
                <div className='pb-2  my-3 text-dark border-b-2 border-gray text-xl font-bold'>سایت فروشگاهی حرفه ایی</div>
                <div className="flex flex-col gap-y-2 text-gray w-full">
                    <div className='flex justify-between items-center'>
                        <div>سرعت:</div>
                        <div className='flex'>
                            <img className='w-4' src="/images/star1.png" alt="" />
                            <img className='w-4' src="/images/star.png" alt="" />
                            <img className='w-4' src="/images/star.png" alt="" />
                            <img className='w-4' src="/images/star.png" alt="" />
                            <img className='w-4' src="/images/star.png" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <div>قابلیت سفارش سازی:</div>
                        <div className='flex'>
                            <img className='w-4' src="/images/star1.png" alt="" />
                            <img className='w-4' src="/images/star.png" alt="" />
                            <img className='w-4' src="/images/star.png" alt="" />
                            <img className='w-4' src="/images/star.png" alt="" />
                            <img className='w-4' src="/images/star.png" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <div>مشاوره کسب و کار آنلاین:</div>
                        <div><GiConfirmed className='text-green' /></div>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <div>پشتیبانی رایگان:</div>
                        <div>6 ماه</div>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <div>خدمات پشتیبانی:</div>
                        <div>3 سال</div>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <div>نوع پرداخت:</div>
                        <div>3 مرحله</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className='flex flex-col items-center my-5 p-3 gap-y-2'>
                    <div className='pb-2 border-b-2  my-3 w-full h-2 text-gray'></div>
                    <div className="flex flex-col gap-y-2 text-gray w-full">
                        <div className='flex justify-between items-center'>
                            <div>شروع قیمت:</div>
                            <div>50,000,000 ریال</div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>حداکثر قیمت:</div>
                            <div>100,000,000 ریال</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className='flex flex-col items-center p-3 gap-y-2'>
                    <div className='pb-2 border-b-2  my-3 w-full h-2 text-gray'></div>
                    <div className="gap-y-2 text-orange-500 w-full">
                        <button className='border-2 border-orange-500 px-12 py-2 rounded hover:text-white hover:bg-orange-500 transition duration-500'>مشاوره رایگان</button>
                    </div>
                </div>
            </div>
        </div>
    )
})
