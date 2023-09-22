import React, { memo } from 'react'
import { Link } from 'react-router-dom';

export default memo(function Card({ img, title, desc, price, countSell,id }) {
    return (
        <div className='flex flex-col overflow-hidden m-4 pb-3 gap-y-4 rounded text-right shadow-md shadow-whiteSky'>
            <div><img src={img} alt="" /></div>
            <div className='p-2'>
                <div className="text-2xl text-dark">{title}</div>
                <div className='text-gray'>{desc}</div>
            </div>
            <div className='flex justify-between px-5'>
                <div className='text-gray'>سه ماهه</div>
                <div>{price} تومان</div>
            </div>
            <div className="flex justify-between px-5">
                <Link to={`product-info/${id}/product-details`} className='btn-outline'>اطلاعات بیشتر</Link>
                <div className='flex flex-col gap-y-1 text-gray text-center'>
                    <div className='flex justify-end'>
                        <img className='w-4' src="/images/star1.png" alt="" />
                        <img className='w-4' src="/images/star.png" alt="" />
                        <img className='w-4' src="/images/star.png" alt="" />
                        <img className='w-4' src="/images/star.png" alt="" />
                        <img className='w-4' src="/images/star.png" alt="" />
                    </div>
                    <div className='text-sm'>تعداد فروش: {countSell}</div>
                </div>
            </div>
        </div>
    )
}
)