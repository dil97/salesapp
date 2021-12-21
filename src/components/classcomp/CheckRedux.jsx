import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const CheckRedux =()=>{
    const selectData = useSelector((state)=>state.productsReducer.products)
const dispatch=useDispatch();
const handleclick=()=>{
    dispatch({
        type:"ADD_PRODUCTS",
        data:["Watch","Bat","Cap"],
    })
       }
       
       return(
           <Button onClick={handleclick}>Dispatch me</Button>

       );
};