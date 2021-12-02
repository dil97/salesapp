// import { bikes} from "../../Services/bikes"
// import { BikesItem } from "./BikesItem" 
// import {Button } from "react-bootstrap"
// import{ Row , Col, Form} from "react-bootstrap";


export const Bikeslist = () => {
    console.log(bikes)
    return (

        <div>
            {bikes.map ((item,index) =>(
             <BikesItem item = {item} index={index} />              // map method to use iterative (Returns )
             ))}
{/* 
                 <div style={{display:"flex"}}>
    <Button
    disabled={!(counter>0)}
     onClick={()=> setCounter(counter-1)}>-</Button>
    
    <h1>{counter}</h1>

    <Button
     disabled={!(counter<10)} 
onClick={()=> setCounter(counter+1)}>+</Button> </div> */}


            
            
        </div>
    );
};