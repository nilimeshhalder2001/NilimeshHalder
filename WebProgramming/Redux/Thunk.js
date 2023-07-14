const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

//constants
const GET_TODOS_REQUEST="GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS="GET_TODOS_SUCCESS";
const GET_TODOS_FAILED="GET_TODOS_FAILED";
const API_URL="https://jsonplaceholder.typicode.com/todos";

// state
const initialTodos={
    todos:[],
    isLoading:false,
    error:null,
}

// action
const gettodosrequest=()=>{
    return{
        type:GET_TODOS_REQUEST,
    }
}
const gettodosfailed=(error)=>{
    return{
        type:GET_TODOS_FAILED,
        payload:error,
    }
}
const gettodossuccess=(todos)=>{
    return{
        type:GET_TODOS_SUCCESS,
        payload:todos,
    }
}

// reducer
const todoReducer=(state=initialTodos,action)=>{
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading:true,
            }
            case GET_TODOS_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    todos:action.payload,
                }
            case GET_TODOS_FAILED:
                return{
                    ...state,
                    isLoading:false,
                    error:action.payload,
                    }
        default:
            return state;
    }
}

const fetchdata=()=>{
    return(dispatch)=>{
        dispatch(gettodosrequest());
        axios.get(API_URL)
        .then(res=>{
            dispatch(gettodossuccess(data));
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
}




// store
const store=createStore(todoReducer, applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(fetchdata());