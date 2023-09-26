import React, { memo } from 'react'
import { Link } from "react-router-dom"
import { AiOutlineInstagram } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
export default memo(
  function Footer() {
    console.log("footer");
    return (
      <div className='mt-8  pt-12 md:px-24 bg-white text-gray'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
          <div iv className='flex flex-col gap-y-4'>
            <div className='flex gap-x-4 text-2xl justify-center'>
              <Link className='hover:text-dark transition-all duration-300' to=""><AiOutlineInstagram /></Link>
              <Link className='hover:text-dark transition-all duration-300' to=""><BsTwitter /></Link>
              <Link className='hover:text-dark transition-all duration-300' to=""><FaFacebookF /></Link>
            </div>
            <div className='text-centerz'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
              <div className='flex flex-col gap-y-3 text-center'>
                <div>
                  <span className="text-xl text-dark border-b-2 text-center pb-2 border-gray font-bold">دسترسی سریع</span>
                </div>
                <Link to="" className='hover:text-dark transition-all duration-300'>وبلاگ رنت پرس</Link>
                <Link to="" className='hover:text-dark transition-all duration-300'>افزونه مدیریت لایسنس</Link>
                <Link to="" className='hover:text-dark transition-all duration-300'>قوانین سایت</Link>
              </div>
              <div className='flex flex-col gap-y-3 text-center'>
                <div>
                  <span className="text-xl text-dark border-b-2 text-center pb-2 border-gray">دسترسی سریع</span>
                </div>
                <Link to="" className='hover:text-dark transition-all duration-300'>وبلاگ رنت پرس</Link>
                <Link to="" className='hover:text-dark transition-all duration-300'>افزونه مدیریت لایسنس</Link>
                <Link to="" className='hover:text-dark transition-all duration-300'>قوانین سایت</Link>
              </div>
              <div className='flex flex-col gap-y-3 text-center'>
                <div>
                  <span className="text-xl text-dark border-b-2 text-center pb-2 border-gray">دسترسی سریع</span>
                </div>
                <Link to="" className='hover:text-dark transition-all duration-300'>وبلاگ رنت پرس</Link>
                <Link to="" className='hover:text-dark transition-all duration-300'>افزونه مدیریت لایسنس</Link>
                <Link to="" className='hover:text-dark transition-all duration-300'>قوانین سایت</Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className='flex flex-col gap-y-4'>
              <div className='text-center lg:text-right lg:pr-5 my-3'>
                <span className='text-xl pb-2 border-b-2 border-gray font-bold'>عضویت در خبرنامه</span>
              </div>
              <div>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </div>
              <div className='text-center lg:text-right flex flex-col gap-2 lg:flex-row'>
                <div className='w-full'><input type="email" className='text-dark outline-none bg-whiteSky w-full p-2 rounded placeholder:text-center' placeholder='ایمیل خود را وارد کنید' /></div>
                <div><button className='bg-orange-500 hover:bg-orange-600 transition-all duration-300 p-2 rounded text-white w-full lg:w-28'>عضویت</button></div>
              </div>
            </div>
            <div className='flex flex-col mt-5'>
              <div>
                <span className='pb-2 text-xl text-dark border-b-2 border-gray'>نماد های اعتماد</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-2">
                <div>
                  <img src="/images/enamad.webp" alt="" width={100} />
                </div>
                <div>
                  <img src="/images/enamad.webp" alt="" width={100} />
                </div>
                <div>
                  <img src="/images/enamad.webp" alt="" width={100} />
                </div>
                <div>
                  <img src="/images/enamad.webp" alt="" width={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center pt-2'>کلیه حقوق این سایت متعلق به رنت پرس می باشد</div>
      </div>
    )
  }
)
