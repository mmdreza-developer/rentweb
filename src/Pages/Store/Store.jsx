import React, { useContext, useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import data from '../../data'
import { contextData } from '../../ContextData/ContextData'
export default function Store() {
    const { state, dispatch } = useContext(contextData)
    console.log(state);
    const removeProduct = (item) => {
        console.log(item);
        dispatch({ type: "REMOVE_PRODUCT", payload: item })
    }
    const decreaseProduct = (item) => {
        console.log(item);
        dispatch({ type: "DECREASE_PRODUCT", payload: item })
    }
    const increaseProduct = (item) => {
        console.log(item);
        dispatch({ type: "INCREASE_PRODUCT", payload: item })
    }

    const functionReduce = () => {
        const prices = state.map(product => product.price * product.quantity)
        const total = Number(prices.reduce((prev, current,) => prev + current, 0)).toLocaleString()
        // console.log("prices :" + prices, "totalPrices :" + total);
        return total
    }
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
                        {state.length ?

                            (
                                state.map(item => (
                                    <tr className='flex gap-x-1 justify-between items-center bg-gray p-2 border '>
                                        <td>
                                            <img src={item.img} width={60} height={60} alt="" />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{(item.price * item.quantity).toLocaleString()}</td>
                                        <td>{item.quantity}</td>
                                        <td className='flex gap-x-1'>
                                            <button onClick={() => removeProduct(item)} className='bg-red text-white p-2'>حذف</button>
                                            <button onClick={() => decreaseProduct(item)} className='bg-orange-300 text-white p-2'>کاهش</button>
                                            <button onClick={() => increaseProduct(item)} className='bg-green text-white p-2'>افزایش</button>
                                        </td>
                                    </tr>
                                ))
                            )
                            :
                            (
                                <tr className='text-3xl text-center bg-dark text-red p-4'>هیچ محصولی به سبد خرید افزوده نشد</tr>)
                        }
                    </tbody>
                </table>
                <div className='mt-5 flex justify-center items-center gap-x-1 flex-col'>
                    <div className=' bg-dark text-white p-2 flex gap-x-1'>
                        <div>پرداخت نهایی :</div>
                        <div className='text-white font-bold text-lg'><span></span>{functionReduce()} تومان</div>
                    </div>
                    <button className='bg-orange-500 text-whiteSky py-2 px-4 rounded mt-2'>ثبت سفارش</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
