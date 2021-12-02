import React ,{useState} from "react";
import{Button} from "react-bootstrap";


export const Counter = () => {
    const [counter , setCounter] = useState(0);


    return (
        <div style={{display:"flex"}}>
    <Button
    disabled={!(counter>0)}
     onClick={()=> setCounter(counter-1)}>-</Button>
    
    <h1>{counter}</h1>

    <Button
     disabled={!(counter<10)} 
    onClick={()=> setCounter(counter+1)}>+</Button>

    </div>
    )
};