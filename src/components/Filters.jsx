import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Rating } from "./Rating";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Filters = () => {
  const [rate, setRate] = useState();

  const [form, setForm] = useState({
    department: "",
    price: "",
  });
  const { department, price } = form;
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {};
  return (
    <div className="filters">
      <span className="fil-title">Filter Products:</span>
      <form onSubmit={handleSubmit}>
        <label className="label">Select Department</label>
        <select
          name="department"
          id="department"
          value={department}
          placeholder="Select Department"
          onChange={handleChange}
        >
          <option> </option>
          <option>jewelery</option>
          <option value="">electronics</option>
          <option value="">men's clothing</option>
          <option value="">women's clothin</option>
        </select>
        <br />
        <label className="label">Sort by Price</label> <br />
        <select
          name="price"
          id="price"
          value={price}
          placeholder="Sort by Price"
          onChange={handleChange}
        >
          <option> </option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <div style={{paddingLeft:10}}>
          <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}

          />
        </div>
        <div style={{paddingLeft:10}}>
          <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
          />
        </div>
        <div>
          <label style={{paddingLeft:10, padding: 10 }}>
            Rating :
            <Rating
              rating={rate}
              setRating={(i) => setRate(i)}
              style={{ cursor: "pointer" }}
            />
          </label>
        </div>
        <Button variant="light"> Clear Filters</Button> <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Filters;
