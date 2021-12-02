import React from "react";
import "./Card.css"
import { Carousel , Button } from "react-bootstrap";
export const Cards = () => {
//inside write a javascript
        return (

            <div>
              <div className="testing">
              <>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
</>



                <p>lorem10px
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus dignissimos, sunt omnis quibusdam earum voluptate ullam corrupti, aspernatur assumenda reiciendis libero odit ab quis tempore, adipisci recusandae deserunt voluptatem.
                </p>


              </div>


        
                <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block 100%"
      src="images/6.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block 10px"
      src="images/2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block 10px"
      src="images/3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


            </div>
            






        );


}