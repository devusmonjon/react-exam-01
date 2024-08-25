export const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    isSearchOpen: false,
}

export const reducer = (state, action) => {
    switch (action.type) {
        // cart
        case "ADD_TO_CART":
            localStorage.setItem("cart", JSON.stringify([...state.cart, {...action.payload, quantity: 1}]))
            return {...state, cart: [...state.cart, {...action.payload.product, quantity: action.payload.quantity}]}
        case "REMOVE_FROM_CART":
            localStorage.setItem("cart", JSON.stringify(state.cart.filter(cart => cart.id !== action.payload.id)))
            return {...state, cart: state.cart.filter(cart => cart.id !== action.payload.id) }
        case "INC_CART_ITEM":
            localStorage.setItem("cart", JSON.stringify(state.cart.map(cart => cart.id === action.payload.id ? {...cart, quantity: cart.quantity + 1} : cart)))
            return {...state, cart: state.cart.map(cart => cart.id === action.payload.id ? {...cart, quantity: cart.quantity + 1} : cart) }
        case "DEC_CART_ITEM":
            localStorage.setItem("cart", JSON.stringify(state.cart.map(cart => cart.id === action.payload.id ? {...cart, quantity: cart.quantity - 1} : cart)))
            return {...state, cart: state.cart.map(cart => cart.id === action.payload.id ? {...cart, quantity: cart.quantity - 1} : cart) }
        case "RESET_CART":
            localStorage.setItem("cart", JSON.stringify([]))
            return {...state, cart: []}
        // wishlist
        case "ADD_TO_WISHLIST":
            localStorage.setItem("wishlist", JSON.stringify([...state.wishlist, {...action.payload, quantity: 1}]))
            return {...state, wishlist: [...state.wishlist, {...action.payload, quantity: 1}]}
        case "REMOVE_FROM_WISHLIST":
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist.filter(item => item.id !== action.payload.id)))
            return {...state, wishlist: state.wishlist.filter(item => item.id !== action.payload.id) }
        case "RESET_WISHLIST":
            localStorage.setItem("wishlist", JSON.stringify([]))
            return {...state, wishlist: []}
        case "SEARCH_UPDATE":
            return {...state, isSearchOpen: action.payload}
        default:
            return state
    }
}