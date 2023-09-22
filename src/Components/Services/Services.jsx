import React, { memo } from 'react'
import Serivce from '../Service/Serivce'
import { MdOutlineSupportAgent } from "react-icons/md"

export default memo(function Services() {
    return (
        <div className='container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-24 mb-5 gap-x-4'>
            <Serivce title="پشتیبانی رایگان" icon={<MdOutlineSupportAgent />} />
            <Serivce title="پشتیبانی رایگان" icon={<MdOutlineSupportAgent />} />
            <Serivce title="پشتیبانی رایگان" icon={<MdOutlineSupportAgent />} />
            <Serivce title="پشتیبانی رایگان" icon={<MdOutlineSupportAgent />} />
        </div>
    )
})
