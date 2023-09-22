import React, { memo } from 'react'
import { Link } from 'react-router-dom'
export default memo(function BoxCategorization({img}) {
    return (
        <Link to="" className='flex flex-col gap-y-3 bg-white p-10 rounded transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-gray'>
            <div className='rounded overflow-hidden'><img src={img} alt="" /></div>
            <div className='text-xl text-center text-dark font-bold'>قالب وردپرس</div>
            <div className='flex gap-x-2 justify-center'>
                <div className='text-gray'>محصول:</div>
                <div className='text-orange-500'>2340</div>
            </div>
        </Link>
    )
}
)