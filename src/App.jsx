import './App.css'
import { useRoutes } from "react-router-dom"
import routes from './routes'
import { contextData } from './ContextData/ContextData'
import { useReducer, useState } from 'react'
import data from './data'
import reducer from './Reducer/Reducer'

// console.log("reducer :" + reducer);
export default function App() {
  const [state, dispatch] = useReducer(reducer, data.storeData)
  console.log("dispatch :", dispatch);
  console.log("app");
  const [openMenu, setOpenMenu] = useState(false)
  const rotuer = useRoutes(routes)
  return (
    <contextData.Provider value={{
      openMenu,
      setOpenMenu,
      state,
      dispatch
    }}>
      <div className="App">
        {rotuer}
      </div>
    </contextData.Provider>
  )
}

