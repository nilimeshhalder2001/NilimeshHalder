import { DECREMENT, INCREMENT, RESET } from "../Constants/CounterConstants";

const initialcounter={
    count :0,
}


const counterreducer=(state=initialcounter,action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count:state.count+1,
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
        default:
            return state;
    }
}
export default counterreducer;