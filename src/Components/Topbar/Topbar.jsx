import React, { memo } from 'react'

export default memo(
  function Topbar() {
    return (
      <div className="w-full bg-whiteSky">
        <div className='container py-4 hidden lg:block '>
          <div className="row flex justify-between items-center text-dark">
            <div>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله </div>
            <div className='py-2 px-3 border-2 border-orange-300 text-orange-500 rounded'>خرید با 20% تخفیف</div>
          </div>
        </div>
      </div>
    )
  }

)