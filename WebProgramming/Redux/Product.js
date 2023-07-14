const { createStore, applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

// products conatants
const GET_PRODUCTS="GET_PRODUCTS";
const ADD_PRODUCTS="ADD_PRODUCTS";

// product state
const initiProductState={
    products:["sugar","salt"],
    numberofProducts:2
};
// product action
const getproducts=()=>{
    return{
        type:GET_PRODUCTS
    }
}
const addproducts=(product)=>{
    return{
        type:ADD_PRODUCTS,
        payload:product,
    }
}
// product reducer
const productreducer=(state=initiProductState,action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
            }
           case ADD_PRODUCTS:
            return{
                products:[...state.products,action.payload],
                numberofProducts:state.numberofProducts+1,
            }
            default:
                return{
                    ...state,
                }
    }
}

// store
const store=createStore(productreducer,applyMiddleware(logger));
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(getproducts());
store.dispatch(addproducts("pen"));
store.dispatch(getproducts());
store.dispatch(addproducts("Brade"));
