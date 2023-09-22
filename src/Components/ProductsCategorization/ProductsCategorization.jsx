import React from 'react'
import BoxCategorization from '../BoxCategorization/BoxCategorization'

export default function ProductsCategorization() {
    return (
        <div className='my-7 p-5 bg-dark shadow-gray rounded'>
            <h1 className="text-2xl text-white p-2 text-center mb-2">دسته بندی محصولات</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <BoxCategorization img="/images/card/5.png" />
                <BoxCategorization img="/images/card/6.jpg" />
                <BoxCategorization img="/images/card/7.jpg" />
                <BoxCategorization img="/images/card/8.jpg" />
            </div>
        </div>
    )
}
