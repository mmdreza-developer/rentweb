import './App.css'
import { useRoutes } from "react-router-dom"
import routes from './routes'
import { contextData } from './ContextData/ContextData'
import { useReducer, useState } from 'react'
import data from './data'

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const newItem = {
        id: action.payload.id,
        title: action.payload.title,
        img: action.payload.img,
        price: action.payload.price,
        quantity: 1
      }
      const isItem = state.find(item => item.id === newItem.id)
      console.log(isItem);
      if (isItem) {
        isItem.quantity += 1
        return [...state]
      } else {
        return state = [...state, newItem]
      }


    }
    case "REMOVE_PRODUCT": {
      const removeItem = state.filter(item => item.id !== action.payload.id)
      return removeItem
    }
    case "INCREASE_PRODUCT": {
      const isItem = state.find(item => item.id === action.payload.id)
      isItem.quantity += 1
      return [...state]
    }
    case "DECREASE_PRODUCT": {
      const isItem = state.find(item => item.id === action.payload.id)
      if (isItem.quantity <= 1) {
        return state.filter(item => item.id !== action.payload.id)
      }
      isItem.quantity = isItem.quantity - 1
      return [...state]
    }
    default:
      return state
  }
}
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

