import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Landing from '../../Components/Landing/Landing'
import ProductsCategorization from '../../Components/ProductsCategorization/ProductsCategorization'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import Services from '../../Components/Services/Services'
import Tariffs from '../../Components/Tariffs/Tariffs'
import data from '../../data'
export default function Index() {
  useEffect(()=>{
    document.title="صفحه اصلی"
  },[])
  return (

    <div className="w-full">
      <Header />
      <Landing />
      <SectionHeader title="طراح های پیشنهادی" btnTitle="مشاهده همه" />
      <div className="container mb-5z">
        <div className="grid grid-cols-1 px-6 sm:p-0 sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center">
          {data.productData && data.productData.map(item => (
            <Card {...item} />
          ))}
        </div>
        <div className="container my-5">
          <ProductsCategorization />
        </div>
        <SectionHeader title="تعرفه های سفارشی" />
        <Tariffs />
      </div>
      <Services />
      <Footer />
    </div>
  )
}
