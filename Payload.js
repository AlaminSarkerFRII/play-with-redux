const {createStore} =  require ("redux")


const ADD_USER = "ADD_USER"

const initialState = {
    user : ["Alamin"],
    count:1
}

const addUser = (user)=>{
    return {
        type : "ADD_USER",
        payload : user
    }
}

// reducer 

const userReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_USER:
          return{
            users: [...state.user,action.payload],
            count:state.count + 1
          }
        
        default:
            state;
    }
}

// store

const store = createStore(userReducer)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addUser("sarker"))
store.dispatch(addUser("Kajol"))