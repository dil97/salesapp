import "./Bikeitem.css"
import {Card , Button} from "react-bootstrap"
export const BikesItem = ({item}) => {

    return (
      <div >
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.url}/>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.model}  </Card.Text>
          <Button variant="primary">{item.price}</Button>
        </Card.Body>
      </Card>

      </div>
    </div>

        
    )
}