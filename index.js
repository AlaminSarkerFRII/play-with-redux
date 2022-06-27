const redux = require('redux');
const createStore = redux.createStore


// create objects

const ORDERED_CAKE = "ORDERED_CAKE";

const CAKE_RESTOCK = "CAKE_RESTOCK"

function orderCake() {
  return {
    type: "ORDERED_CAKE",
    payload: 1,
  };
}


function restockCake(qty=1){
  return{
    type:"CAKE_RESTOCK",
    payload:qty ,
  }
}


// create reducer

const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDERED_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
      case CAKE_RESTOCK:
        return{
          ...state,
          numberOfCakes:state.numberOfCakes + action.payload,
        }

    default:
      return state;
  }
};

const store = createStore(reducer)
console.log("initial state", store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log("update store",store.getState())
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))

unsubscribe()



// step of create redux 
/**
 * 1. create reducer
 * 2. create  store the help of create Store .
 * 3. Now we can subscribe 
 * 4. dispatch (action)
 */