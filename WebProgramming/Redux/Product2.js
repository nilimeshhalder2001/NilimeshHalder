const { createStore, combineReducers } = require("redux");

// products conatants
const GET_PRODUCTS="GET_PRODUCTS";
const ADD_PRODUCTS="ADD_PRODUCTS";

// product state
const initialproduct={
    products:["sugar","salt"],
    numberofproducts:2
}
//product action
const getproducts=()=>{
    return{
        type:GET_PRODUCTS,
    }
}
const addproducts=(addproduct)=>{
    return{
        type:ADD_PRODUCTS,
        payload:addproduct
    }
}
// product reducer
const productreducer=(state=initialproduct,action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
            }
        case ADD_PRODUCTS:
            return{
                products:[...state.products,action.payload],
                numberofproducts:state.numberofproducts+1,
                
            }
            default:
            return{
                ...state,
            }
    }
}
const GET_CART_PRODUCTS="GET_CART_PRODUCTS";
const ADD_CART_PRODUCTS="ADD_CART_PRODUCTS";
// cart state
const initialcartproduct={
    products:["sugar"],
    numberofproducts:1
}
//product action
const getcartproducts=()=>{
    return{
        type:GET_CART_PRODUCTS,
    }
}
const addcartproducts=(addproduct)=>{
    return{
        type:ADD_CART_PRODUCTS,
        payload:addproduct
    }
}
// cart reducer
const cartreducer=(state=initialcartproduct,action)=>{
    switch (action.type) {
        case GET_CART_PRODUCTS:
            return{
                ...state,
            }
        case ADD_CART_PRODUCTS:
            return{
                products:[...state.products,action.payload],
                numberofproducts:state.numberofproducts+1,
                
            }
            default:
            return{
                ...state,
            }
    }
}

const addreducer=combineReducers({
    productReducer:productreducer,
    cartReducer:cartreducer
})
const store=createStore(addreducer);
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(getcartproducts());
store.dispatch(addproducts("Vegatable"));
store.dispatch(addcartproducts("Meat"));
store.dispatch(addcartproducts("Fish"));