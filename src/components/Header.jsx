import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Badge,
  Button,
} from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { NewContext } from "../context/NewContext";
import { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const { cartItems, dispatchCart, cartTotal, dispatchTotal } =
    useContext(NewContext);

  useEffect(() => {
 
    dispatchTotal({ type: "CARTTOTAL", payload:cartItems });
  }, [cartItems]);

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/"> Online Shopping</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            className="m-auto"
            style={{ width: 500 }}
            placeholder="Search a product"
          />
        </Navbar.Text>

        <Dropdown>
          <Dropdown.Toggle variant="success">
            <Link to="/cart">
              <GiShoppingCart color="white" fontSize="30px" />
            </Link>
            <Badge>{cartItems.length}</Badge>
            <Badge>{}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: "200px" }}>
            <div>Subtotal ({cartItems.length}) items</div>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => {
                  return (
                    <li key={item.id}>
                      <img
                        src={item.image}
                        className="cart-imgg"
                        alt={item.title}
                      />
                      <span> : ${item.totalPrice}</span>
                      <span
                        fontSize="20px"
                        style={{ cursor: "pointer", padding: "20px" }}
                        onClick={() =>
                          dispatchCart({
                            type: "REMOVEFROMCART",
                            payload: item,
                          })
                        }
                      >
                        <AiFillDelete></AiFillDelete>
                      </span>
                    </li>
                  );
                })}
                <hr />
                <span style={{ padding: 10 }}>Total: ${cartTotal}</span>
                <div>
                  {" "}
                  <Link to="/cart">
                    <Button>Go to Cartpage</Button>
                  </Link>
                </div>
              </>
            ) : (
              <div>No Items</div>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;

//formcontrol -> add search bar
// Dropdown-> main Component
// Dropdown toggle-> add drop down button
// react icon  ,badge-> adds dynamic number next to cart icon
//Dropdown.Menu => actual drop down items
