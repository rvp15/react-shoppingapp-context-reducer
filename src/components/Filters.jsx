import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Rating } from "./Rating";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useContext } from "react";
import { NewContext } from "../context/NewContext";

const Filters = () => {
  const {dispatchForm } = useContext(NewContext);
  const [rate, setRate] = useState();

  const [form, setForm] = useState({
    department: "",

  });
  const { department } = form;
  const handleChange = (e) => {
    console.log(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatchForm({type:'UPDATEFILTER', payload:form})
  };
  return (
    <div className="filters">
      <span className="fil-title">Filter Products:</span>
      <form>
        <label className="label">Select Department</label>
        <select
          name="department"
          id="department"
          value={department}
          placeholder="Select Department"
          onChange={handleChange}
        >
          <option> </option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
        </select>

        <br />
        <label className="label">Sort by Price</label> <br />
        <select
          name="price"
          id="price"
         
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
        <Button variant="light"> Clear Filters</Button> <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};

export default Filters;
