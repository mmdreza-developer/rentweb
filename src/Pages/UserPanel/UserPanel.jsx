import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../ComponentsPanel/Header/Header'
import SidebarMenu from '../../ComponentsPanel/SidebarMenu/SidebarMenu'
export const ContextPanel = createContext()
export default function UserPanel() {
  const [open, setOpen] = useState(false)
  return (
    <ContextPanel.Provider value={{
      open,
      setOpen
    }}>
      <div className="flex w-full">
        <div>
          <SidebarMenu />
        </div>
        <div className='flex-grow'>
          <Header />
          <Outlet />
        </div>
      </div>
    </ContextPanel.Provider>
  )
}
