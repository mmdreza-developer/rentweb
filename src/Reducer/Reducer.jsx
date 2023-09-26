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
export default reducer