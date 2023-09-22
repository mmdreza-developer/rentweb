import React, { memo } from 'react'

export default memo(function SectionHeader({ title, btnTitle }) {
    return (
        <div className="container px-2 mt-10">
            <div className='mt-7 mb-4 flex justify-between items-center'>
                <h4 className='text-gray text-xl md:text-2xl'>{title}</h4>
                <button className={`${btnTitle ? "border-2" : "border-none"} btn-outline `}>{btnTitle ? btnTitle : ""}</button>
            </div>
        </div>
    )
}
)