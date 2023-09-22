import React, { memo } from 'react'
import MenuMoblie from '../MenuMoblie/MenuMoblie';
import Navbar from '../Navbar/Navbar'
import Topbar from '../Topbar/Topbar'
export default memo(
  function Header() {
    console.log("header");
    return (
      <div className='w-full'>
        <Topbar />
        <Navbar />
        <MenuMoblie />
      </div>
    )
  }
)
