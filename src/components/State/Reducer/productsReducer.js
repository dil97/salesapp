export const productsReducer=(state={product:[] },action)=>{
    if(action.type==="ADD_PRODUCTS"){
        return {
            ...state,
            products:[...action.data],
        };
       
    }
    return state;
};