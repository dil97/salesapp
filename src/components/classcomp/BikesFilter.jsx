import { bikes} from "../../Services/bikes"
import { BikesItem } from "./BikesItem" 
import {Button } from "react-bootstrap"
import{ Row , Col, Form} from "react-bootstrap";


export const bikesFilter = () => {
    console.log(bikes)
    return (

        <div>
            <Row>
                <Col>
                <input type="text"  placeholder= "Seaarch"  style={{width:"700px"}}/>
                </Col>
                <Col Ig={2}>
                <button>Search</button></Col>
            </Row>
            <Row>        
            {bikes.map ((item,index) =>(
                <Col>
             <BikesItem item = {item} index={index} />
             
             </Col>                                      // map method to use iterative (Returns )
             ))}
             
             </Row>
            
        </div>
    );
};