import React, { memo, useState } from 'react'
import Tarrif from '../Tariff/Tarrif'
export default memo(function Tariffs() {
    const [activeTariffs, setActiveTariffs] = useState(false)
    return (
        <div className='container mb-5'>
            <div className='flex justify-center gap-x-4 mb-4 font-bold'>
                <button onClick={() => setActiveTariffs(false)} className={`outline-none text-xl text-gray pb-1 border-b-2 border-transparent ${!activeTariffs && "border-b-2 border-b-orange-500 text-orange-500"}`}>سایت فروشگاهی</button>
                <button onClick={() => setActiveTariffs(true)} className={`outline-none text-xl text-gray pb-1 border-b-2 border-transparent  ${activeTariffs && "border-b-2 border-b-orange-500 text-orange-500"}`}>سایت شرکتی</button>
            </div>

            <div className={`${!activeTariffs ? "block" : "hidden"} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-x-10 gap-y-4`}
            >
                <Tarrif />
                <Tarrif />
            </div>
            <div className={`${activeTariffs ? "block" : "hidden"} text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4`}  >
                <Tarrif />
                <Tarrif />
                <Tarrif />
            </div>
        </div>
    )
}
)