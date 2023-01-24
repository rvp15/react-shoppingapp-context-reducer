
import { useContext } from 'react'
import { NewContext } from '../context/NewContext'
import ListGroup from 'react-bootstrap/ListGroup';
import { Col,Row,Image,Button} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { QuantityPicker } from 'react-qty-picker';

const Cart = () => {
  const {cartItems, dispatchCart,cartTotal } = useContext(NewContext)
  
console.log(cartItems)
  return (
    <div className='cart-item'>
      <ListGroup>
        {
          cartItems.map((item)=>(

            <ListGroup.Item key={item.id}>
            
            <Row className='row'>
              <Col md={2} className='col'>
              <Image className='cart-img' src={item.image}fluid rounded/>
            </Col>
            <Col md={2} className='col'>
              <span>{item.title}</span>
            </Col>
            <Col md={2} className='col'>
              {/* <span>${item.qty > 1 ? item.price*(item.qty) : item.price}</span> */}
              <span>{item.totalPrice}</span>
            </Col>
            <Col md={2}>
            <QuantityPicker min={0} max={9} height='10px' value={item.qty} width='27px' onChange={(value)=>{dispatchCart({
                            type: "ITEMQTY",
                            payload:{id:item.id,qty:value},

                          })}}/>
            </Col>
            <Col md={2} className='col'>
              <Button type='button' variant='light' onClick={()=>{ dispatchCart({
                            type: "REMOVEFROMCART",
                            payload: item,
                          })}}>
       <AiFillDelete></AiFillDelete>
              </Button>
            </Col>
            </Row>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
      <div className='summary'>   
   <div style={{display:'flex',justifyContent: 'space-between',padding:10}}> 
   <span>Subtotal({cartItems.length} item )</span>
   <div>Total:${cartTotal}</div></div>
   <Button className='checkout'>Proceed to Checkout</Button>
      </div>
    </div>
  )
}

export default Cart