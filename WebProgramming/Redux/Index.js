const {createStore}=require("redux")
const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";
const RESET="RESET";
const ADD_USER="ADD_USER";
//creating state
const initialcounterstate={
    count :0,
    name:"Nilimesh",
}
//creation actions
const incrementaction=(digit)=>{
    return{
        type:INCREMENT,
        payload:digit,
        
    }
}
const decrementaction=()=>{
    return{
        type:DECREMENT,
    }
}

const resetaction=()=>{
    return{
        type:RESET,
    }
}
const addnewuser=(name)=>{
    return{
        type:ADD_USER,
        payload:name,
    }
}
// reducer

const counterreducer=(state=initialcounterstate,action)=>{
    switch (action.type) {
        case INCREMENT:
        return{
            ...state,
            
            count:state.count+action.payload,
            
        }
       case DECREMENT:
        return{
            ...state,
            count:state.count-1,
        }
        case RESET:
            return{
                ...state,
                count:0,

            }
        case ADD_USER:
            return{
                ...state,
                name:state.name+action.payload,
            }
    }
}
    const store=createStore(counterreducer);
    store.subscribe(()=>{
        console.log(store.getState());
    })
store.dispatch(incrementaction(10));
store.dispatch(addnewuser("Soumili"));



