import React, { useState } from 'react'
import { ImSearch } from "react-icons/im"
export default function Landing() {
    console.log("landing");
    const [search, setSearch] = useState("")
    return (
        <div className='flex w-full'>
            <div className='landing relative flex justify-end text-center sm:h-auto'>
                <img src="/images/banner.jpg" className='w-full h-52 sm:h-auto' alt="" />
                <div className='flex flex-col items-center gap-y-4 absolute w-1/2 top-1/3'>
                    <h1 className='text-white text-xs sm:text-sm lg:text-xl xl:text-xl'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی با تولید سادگی   
                        </h1>
                    <label className='w-3/3 sm:w-2/3 flex gap-x-2'>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} className='w-full p-2 md:p-4 rounded border-none outline-none text-xs sm:text-sm md:text-base' placeholder='جست و جو کنید' type="text" />
                        <button className='btn-outline'>
                            <ImSearch className='text-sm md:text-base lg:text-2xl' />
                        </button>
                    </label>
                </div>
            </div>
        </div>
    )
}
