import React, { memo } from 'react'
export default memo(
    function Serivce({ icon, title }) {
        return (
            <div className='flex flex-col gap-y-1 justify-center items-center shadow-md shadow-orange-500 rounded py-4 px-6 mt-3'>
                <div className="text-5xl text-orange-600">
                    {icon}
                </div>
                <div className="text-dark text-xl">{title}</div>
            </div>
        )
    }
)
