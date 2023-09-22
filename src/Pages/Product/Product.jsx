import React from 'react'
import "./Product.css"
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { NavLink, useParams, Link, Outlet } from 'react-router-dom'
export default function Product() {
  const params = useParams()
  // console.log(params);
  return (
    <div>
      <Header />
      <BreadCrumb links={
        [
          { id: 1, title: "خانه", to: "/" },
          { id: 2, title: "محصولات", to: "/product-info-info/1" },
          { id: 3, title: `محصول ${params.productID}`, to: `/product-info/${params.productID}` },
        ]
      } />
      <div className="container text-gray">
        <h1 className="text-3xl text-center text-dark my-12">
          محصول {params.productID}
        </h1>
        <div>
          <div className="flex gap-4 my-5">
            <NavLink to={`/product-info/${params.productID}/product-details`} className="pb-2 border-b-2 font-medium"
            >جزییات قالب</NavLink>
            <NavLink to={`/product-info/${params.productID}/product-support`} className="pb-2 border-b-2 font-medium"
            >پشتیبانی</NavLink>
            <NavLink to={`/product-info/${params.productID}/product-comment`} className="pb-2 border-b-2 font-medium"
            >نظرات کاربران</NavLink>
          </div>

        </div>
        <Outlet />

        {/* / */}
            <div className="flex gap-6 mt-10">
              <div className="gap-4 hidden md:flex">
                <div className="flex flex-col gap-x-4">
                  <div className="pb-4 flex gap-4 border-b-2 border-dashed border-gray">
                    <div className="flex flex-col gap-y-2 items-center text-2xl">
                      <span> تعداد فروش</span>
                      <span className="text-orange-500 font-medium">234</span>
                    </div>
                    <div className="flex flex-col gap-y-2 items-center text-2xl">
                      <span>
                        رضایت مشتری
                      </span>
                      <span className="text-green font-medium">90%</span>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-y-2 ">
                    <div className="flex justify-between">
                      <span className="text-dark text-lg">آخرین نسخه انتشار</span>
                      <span>1401/10/03</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark text-lg">اخرین بروز رسانی</span>
                      <span>1401/10/03</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark text-lg">چیدمان</span>
                      <span></span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark text-lg">ورژن</span>
                      <span>1.1.1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark text-lg">دسته بندی</span>
                      <span>سایت شرکتی</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark text-lg">موضوع</span>
                      <span>سایت حرفه ایی</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 grow">
                <div className="col-span-2 mt-2 flex flex-col gap-2">
                  <div className="text-xl font-medium">صفحه اصلی</div>
                  <img src="/images/card/10.jpg" className="w-full h-auto" alt="" />
                </div>
                <div className="col-span-2 lg:col-span-1 mt-2 flex flex-col gap-2">
                  <div className="text-xl font-medium">صفحه اصلی</div>
                  <img src="/images/card/10.jpg" className="w-full h-auto" alt="" />
                </div>
                <div className="col-span-2 lg:col-span-1 mt-2 flex flex-col gap-2">
                  <div className="text-xl font-medium">صفحه اصلی</div>
                  <img src="/images/card/10.jpg" className="w-full h-auto" alt="" />
                </div>
                <div className="col-span-2 lg:col-span-1 mt-2 flex flex-col gap-2">
                  <div className="text-xl font-medium">صفحه اصلی</div>
                  <img src="/images/card/10.jpg" className="w-full h-auto" alt="" />
                </div>
                <div className="col-span-2 lg:col-span-1 mt-2 flex flex-col gap-2">
                  <div className="text-xl font-medium">صفحه اصلی</div>
                  <img src="/images/card/10.jpg" className="w-full h-auto" alt="" />
                </div>
              </div>
            </div>
      </div>
      <Footer />
    </div>
  )
}
