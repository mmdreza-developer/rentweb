import React, { useState } from 'react'
import { MdOutlineMonitor } from "react-icons/md";
import { BsFillShareFill, BsHeart } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx"
import { useParams } from 'react-router-dom';
export default function ProductDetails() {
  const [range, setRange] = useState(25)
  const params = useParams().productID
  console.log(params);
  console.log("ProductDetails");
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 shadow-md shadow-gray'>
      <div className='flex flex-col gap-y-2 mt-5 order-2 md:order-1 lg:col-span-1 p-2'>
        <div className=''>
          <h1 className='text-2xl text-dark text-center my-4 font-bold'>مدت زمان اجاره</h1>
          <div className='flex flex-col'>
            <div className="px-4">
              <div className='flex flex-row-reverse justify-between w-full text-gray'>
                <div className='flex flex-col items-center'>
                  <span></span>
                  <span></span>
                </div>
                <div className='flex flex-col items-center transform translate-x-3 cursor-pointer ' onClick={() => setRange(25)}>
                  <span>3 ماهه</span>
                  <span><RxDotFilled /></span>
                </div>
                <div className='flex flex-col items-center transform translate-x-3 cursor-pointer' onClick={() => setRange(50)}>
                  <span>6 ماهه</span>
                  <span><RxDotFilled /></span>
                </div>
                <div className='flex flex-col items-center transform translate-x-3 cursor-pointer' onClick={() => setRange(75)}>
                  <span>9 ماهه</span>
                  <span><RxDotFilled /></span>
                </div>
                <div className='flex flex-col items-center transform translate-x-3 cursor-pointer' onClick={() => setRange(100)}>
                  <span>12 ماهه</span>
                  <span><RxDotFilled /></span>
                </div>
              </div>
              <div className='w-full h-6 bg-blueSky rounded-full relative flex flex-row-reverse overflow-hidden'>
                <div className='w-1/4 h-full bg-blue transition-all duration-500 rounded-full pl-12' style={{ width: `${range}%` }}>
                  <span className='absolute right-3/4 w-6 h-6 bg-white rounded-full cursor-pointer' onClick={() => setRange(25)}></span>
                  <span className='absolute right-2/4 w-6 h-6 bg-white rounded-full cursor-pointer' onClick={() => setRange(50)}></span>
                  <span className='absolute right-1/4 w-6 h-6 bg-white rounded-full cursor-pointer' onClick={() => setRange(75)}></span>
                  <span className='absolute right-0 w-6 h-6 bg-white rounded-full cursor-pointer' onClick={() => setRange(100)}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h1 className='text-2xl font-bold text-dark text-center'>
            امکانات سایت
          </h1>
          <div className='text-gray'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </div>
          <div className='w-full border-dashed border-b-2 border-gray pb-3'></div>
          <div className='flex justify-around mt-4 font-bold'>
            <div>سه ماهه</div>
            <div>200,000 تومان</div>
          </div>
          <div className='text-center mt-2'>
            <button className='rounded transition-all duration-500 shadow-md hover:shadow-orange-600 text-white bg-orange-500 hover:bg-orange-600 p-2'>افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
      <div className='order-1 md:order-2 lg:col-span-2'>
        <div className='flex flex-col shadow-md shadow-gray pb-2'>
          <div className='rounded overflow-hidden pb-3 mb-3'><img className='w-full' src={`/images/card/${params}.jpg`} alt="" /></div>
          <div className='flex justify-between px-3'>
            <div className='flex gap-x-2 items-center text-2xl text-dark'>
              <button><BsHeart /></button>
              <button><BsFillShareFill /></button>
            </div>
            <div className='pb-3'>
              <button className='p-2 border-2 border-orange-500 text-orange-500 rounded flex gap-x-2 items-center hover:text-white hover:bg-orange-500 duration-500'><MdOutlineMonitor /> پیش نمایش زنده</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
