// inititalize state
const initialState={
    counter :5,
}
// action creators
const incrementAction=()=>{
    return{
        type:"INCREMENT",
    }
}
const decrementAction=()=>{
    return{
        type:"DECREMENT",
    }
}
// reducer
function counterreducer(state=initialState, action){
    if(action.type=="INCREMENT"){
        return{
            counter : state.counter+1,
        }

    }
    if(action.type=="DECREMENT"){
        return{
            counter : state.counter-1,
        }
    }
    return state;
}

//store
function render(){
const store=Redux.createStore(counterreducer);
const state=store.getState();
console.log(state);

document.getElementsByClassName("counter")[0].innerHTML=state.counter;
}
render();
document.getElementById("increment").addEventListener("click",function(){
    store.dispatch(incrementAction());
    render();
})
document.getElementById("decrement").addEventListener("click",function(){
    store.dispatch(decrementAction());
    render();
})