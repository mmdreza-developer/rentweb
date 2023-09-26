import React, { memo } from 'react'
import Serivce from '../Service/Serivce'
import { MdOutlineSupportAgent } from "react-icons/md"
import { AiOutlineCloudServer } from "react-icons/ai"
import { FaRegHandshake } from "react-icons/fa"
import { BsCashCoin } from "react-icons/bs"

export default memo(function Services() {
    return (
        <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-24 mb-5 gap-x-4'>
            <Serivce title="پشتیبانی رایگان" icon={<MdOutlineSupportAgent />} />
            <Serivce title="بهترین خدمات" icon={<AiOutlineCloudServer />} />
            <Serivce title="رضایت مشتری" icon={<FaRegHandshake />} />
            <Serivce title="ضمانت بازگشت وجه" icon={<BsCashCoin />} />
        </div>
    )
})
