
const {createStore, combineReducers} = require('redux');

//======== variable============//
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"
const GET_CART_ITEM = "GET_CART_ITEM"
const ADD_CART_ITEM = "ADD_CART_ITEM"

//=======initials state value ==========//
const initialStateProducts = {
    products : ["Alamin", "Sarker"],
    numberOfProducts : 2
}

// cart

const initialStateCart = {
    cart : ["Shakil"],
    numberOfProducts : 1
}


// ======create action for Products=========//
const getProducts = ()=>{
    return{
        type :"GET_PRODUCTS"
    }
}
const addProducts = (product)=>{
    return{
        type :"ADD_PRODUCT",
        payload : product
    }
}
// ======create action for Cart=========//
const getCart = ()=>{
    return{
        type :"GET_CART_ITEM"
    }
}
const addCart = (cart)=>{
    return{
        type :"ADD_CART_ITEM",
        payload : cart
    }
}

// ======create reducer for product ============//

const productReducer = (state=initialStateProducts,action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
            }
        case ADD_PRODUCT:
            return{
                products:[...state.products, action.payload],
                numberOfProducts:state.numberOfProducts + 1
            }
        default:
         return state;
    }
}
// ======create reducer for cart ============//

const cartReducer = (state=initialStateCart,action)=>{
    switch (action.type) {
        case GET_CART_ITEM:
            return{
                ...state,
            }
        case ADD_CART_ITEM:
            return{
                cart:[...state.cart, action.payload],
                numberOfProducts:state.numberOfProducts + 1
            }
        default:
          return state;
    }
}

// ===========store creation product============//

//  const store = createStore(productReducer)

// create a root reducer for combined 


const rootReducer = combineReducers({
    productR : productReducer,
    cartR: cartReducer
})


// ====== store ===========//

const store = createStore(rootReducer);

// ====== subscribe ===========//

store.subscribe(()=>{
    console.log(store.getState())
})

// =========dispatch for store and action===========//

store.dispatch(getProducts())
store.dispatch(addProducts("Kajol"))

store.dispatch(getCart())
store.dispatch(addCart("Hi"))