//state - count :0
//action - increment, decrement, reset
// reducer
//store
const {createStore}=require("redux");
const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";
const RESET="RESET";
const initialstate={
    count :0
}

const incrementaction=()=>{
    return{
        type:INCREMENT,
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

// creating reducer

const counterReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                count:state.count+1,
            }
        case DECREMENT:
            return{
                count:state.count-1,
            }
        case RESET:
            return{
                count:0,
            }
    }
}
const store=createStore(counterReducer);
    store.subscribe(()=>{
        console.log(store.getState());
    })
store.dispatch(incrementaction);
store.dispatch(decrementaction);
store.dispatch(resetaction);