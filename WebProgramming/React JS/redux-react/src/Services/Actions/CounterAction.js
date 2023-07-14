import { DECREMENT, INCREMENT, RESET } from "../Constants/CounterConstants"

export const incrementcounter=()=>{
    return{
        type:INCREMENT,
    }
}

export const decrementcounter=()=>{
    return{
        type:DECREMENT,
    }
}

export const resetcounter=()=>{
    return{
        type:RESET,
    }
}