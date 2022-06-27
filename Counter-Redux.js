const {createStore} = require('redux');

// steps 
// state- Count = 0
// reducer
// store 
//subscribe 
// dispatch


const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

const initialState ={
        count:0  
}

// function of increment 

const incrementCounter = ()=>{
    return {
        type:"INCREMENT"
    }
}
const decrementCounter = ()=>{
    return {
        type:"DECREMENT"
    }
}
const resetCounter = ()=>{
    return {
        type:"RESET"
    }
}

const counterReducer = (state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:{
            return{
                ...state, // multiple state thakle
                count:state.count + 1
            }
        }
        // or
        case DECREMENT:{
            return {
                ...state,
                count:state.count - 1
            }  
        }

        //or  
        case RESET:{
            return{
                count:0
            }
        }
            default:
            state;
    }
}

// store

const store = createStore(counterReducer)

// subscribe

store.subscribe (()=>{
    console.log(store.getState())
})

// dispatch 

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(resetCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(decrementCounter())

