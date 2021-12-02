import React from "react";
import {Card , Button ,Row ,Col} from "react-bootstrap"
import "./Prodcutitem.css";
export const Prodct$atom = (props) =>{
    const {title , cat,url ,desc , price} = props
    return (
        <Row className="item">
        <Col> <img src= {url} width="150px" height="220px" alt="" /></Col> 
        <Col lg={10}> 
        
        
        <Card className="text-center">  
        <Card.Header>{desc}</Card.Header>


        <Card.Body>
          <Card.Title> {cat} </Card.Title>
   
          <Card.Text>
            <h1> {title} </h1>
          </Card.Text>
          <Button variant="danger">{price}</Button>
      
        </Card.Body>.
         <Card.Footer className="text-muted"> 7:20 hr ago</Card.Footer>
      </Card>

  
          
          </Col>
      </Row>
            

      
      



    );


};