
import { useContext } from 'react'
import { NewContext } from '../context/NewContext'
import ListGroup from 'react-bootstrap/ListGroup';
import { Col,Row,Image,Button} from 'react-bootstrap';

const Cart = () => {
  const {cartItems, dispatchCart,cartTotal } = useContext(NewContext)

  return (
    <div className='cart-item'>
      <ListGroup>
        {
          cartItems.map((item)=>(
            <Row className='row'>
              <Col md={2} className='col'>
              <Image className='cart-img' src={item.image}fluid rounded/>
            </Col>
            <Col md={2} className='col'>
              <span>{item.title}</span>
            </Col>
            <Col md={2} className='col'>
              <span>${item.price}</span>
            </Col>
            </Row>
          ))
        }
      </ListGroup>
      <div className='summary'>   <Button>Proceed to Checkout</Button>
   <div style={{display:'flex',justifyContent: 'space-between',padding:10}}> <span>Subtotal({cartItems.length} item )</span><span>${cartTotal}</span></div>
   
      </div>
    </div>
  )
}

export default Cart