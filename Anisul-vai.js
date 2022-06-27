const {createStore} = require('redux');

/**Steps
 * 
 * 1. Declare state
 * 2. dispatch action 
 * 3. reducer
 * 4. store - getState(),dispatch(), subscriber()
 * 
 * */


// varibale declare kore nibo for spelling mistake .

const INCREMENT = "INCREMENT" ;
const DECREMENT = "DECREMENT" ;

// declare state ..
const initialStateCount = {
    count : 0,
} 


// action -object-type,payload

const incrementCounter=()=>{
    return {
        type:INCREMENT,
    }
}
const decrementCounter=()=>{
    return {
        type:DECREMENT,
    }
}

// create reducer 

const counterReducer = (state=initialStateCount,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state, // multiple state thake
                count:state.count +1,
            }
        case DECREMENT:
            return{
                ...state,
                count:state.count-1,
            }
        default:
            return state;
    }
}


// create store 

const store = createStore(counterReducer)

// store print korar jonno 

store.subscribe(()=>{
    console.log(store.getState())
}) 

// dispatch action

store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())

