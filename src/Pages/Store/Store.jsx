import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import data from '../../data'
export default function Store() {
    const dataStore = data.storeData
    return (
        <div className='w-full'>
            <Header />
            <BreadCrumb links={
                [
                    { id: 1, title: "خانه", to: "/" },
                    { id: 2, title: "سفارشات", to: "/store" }
                ]
            } />
            <div className='my-10 container'>
                <table className='w-full'>
                    <thead className='p-2 rounded bg-dark text-white'>
                        <tr className='flex gap-x-2 justify-between p-2'>
                            <th>عکس محصول</th>
                            <th>نام محصول</th>
                            <th>قیمت محصول</th>
                            <th className='ml-20'>تعداد</th>
                            <th className='ml-10'>عملکرد</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataStore.length ?

                            (
                                dataStore.map(item => (
                                    <tr className='flex gap-x-1 justify-between items-center bg-gray p-2 border '>
                                        <td>
                                            <img src="" width={60} height={60} alt="" />
                                        </td>
                                        <td>محصول 1</td>
                                        <td>2.000.000</td>
                                        <td>3</td>
                                        <td className='flex gap-x-1'>
                                            <button className='bg-red text-white p-2'>حذف</button>
                                            <button className='bg-orange-300 text-white p-2'>کاهش</button>
                                            <button className='bg-green text-white p-2'>افزایش</button>
                                        </td>
                                    </tr>
                                ))
                            )
                            :
                            (<h1 className='text-3xl text-center bg-dark text-red'>Not Product in Store Page</h1>)
                        }
                    </tbody>
                </table>
                <div className='mt-5 flex justify-center items-center gap-x-1'>
                    <div className=' bg-orange-600 p-2 flex gap-x-1'>
                        <div>پرداخت نهایی :</div>
                        <div className='text-white font-bold text-lg'>21.510.000 تومان</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
