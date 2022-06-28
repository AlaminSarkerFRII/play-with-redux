
const {createStore,applyMiddleware} = require('redux');
const { default: logger } = require('redux-logger');

//======== variable============//
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"

//=======initials state value ==========//
const initialStateProducts = {
    products : ["Alamin", "Sarker"],
    numberOfProducts : 2
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
// ===========store creation product============//
 const store = createStore(productReducer,applyMiddleware(logger))
// create a root reducer for combined 


// ====== subscribe ===========//

store.subscribe(()=>{
    console.log(store.getState())
})

// =========dispatch for store and action===========//

store.dispatch(getProducts())
store.dispatch(addProducts("Kajol"))
