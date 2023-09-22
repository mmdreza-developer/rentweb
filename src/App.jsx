import './App.css'
import { useRoutes } from "react-router-dom"
import routes from './routes'
import { contextData } from './ContextData/ContextData'
import { useState } from 'react'
export default function App() {
  console.log("app");
  const [openMenu, setOpenMenu] = useState(false)
  const rotuer = useRoutes(routes)
  return (
    <contextData.Provider value={{
      openMenu,
      setOpenMenu
    }}>
      <div className="App">
        {rotuer}
      </div>
    </contextData.Provider>
  )
}

