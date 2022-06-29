// async -api call
// api-url - https://jsonplaceholder.typicode.com/todos
// middleware - redux -thunk 
// axios. for data fetching 

const { default: axios } = require("axios")
const {createStore, applyMiddleware } = require("redux")
const thunk= require("redux-thunk").default


// constant 

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"

const url = "https://jsonplaceholder.typicode.com/todos"

//<step-01=====State declare====>

const initialTodosState = {
    todos:[],
    isLoading:false,
    error:null,
}

//<step-02=====actions declare==>

const getTodosRequest = ()=>{
    return {
        type: GET_TODOS_REQUEST,
    }
}
const getTodosSuccess = (todos)=>{
    return {
        type: GET_TODOS_SUCCESS,
        payload:todos,
    }
}
const getTodosFailed = (error)=>{
    return {
        type: GET_TODOS_FAILED,
        payload:error,
    }
}

//<step-03=====reducer declare====>

const todosReducer = (state=initialTodosState, action)=>{
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading : true,
            }
        case GET_TODOS_SUCCESS:
            return{
                ...state,
                isLoading : false,
                todos:action.payload,
            }
        case GET_TODOS_FAILED:
            return{
                ...state,
                isLoading : false,
                todos:action.payload,
            }    
        default:
            return state;
    }
}


// async function for get objects data  (using fetch)

const fetchData =()=>{
    return((dispatch)=>{
        dispatch(getTodosRequest);
        axios.get(url)
        .then(res=>{
            const todos = res.data
            const titles = todos.map(todo=>todo.title)
            dispatch(getTodosSuccess(titles))
            console.log(titles)
        })
        .catch((error)=>{
            const errorMgs= error.message
            dispatch(getTodosFailed(errorMgs))
            console.log(errorMgs)
        })
    })
}

//<step-04====store declare=======>

const store = createStore(todosReducer,applyMiddleware(thunk))

// subscribe 

store.subscribe(()=>{
    console.log(store.getState())
})

// dispatch 
store.dispatch(fetchData())