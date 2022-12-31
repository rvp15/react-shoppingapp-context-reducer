
import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Badge,
} from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/"> Shopping App</Link>
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
           <Link to='/cart'><GiShoppingCart color="white" fontSize="30px" /></Link>
                <Badge>{5}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>No items in cart</span>
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
