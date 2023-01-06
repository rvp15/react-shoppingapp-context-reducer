import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Rating } from "./Rating";
import { useContext } from "react";
import { NewContext } from "../context/NewContext";

export const SingleProduct = ({ product }) => {
  const { cartItems, dispatchCart } = useContext(NewContext);
  return (
    <div className="product-list">
      <Card className="card">
        <Card.Img className="card-img" variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <Rating rating={product.rating.rate} />{" "}
            <span>{product.rating.rate}</span>
            <p className="card-price"> ${product.price}</p>
          </Card.Text>
          {cartItems.some((pro) => pro.id === product.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatchCart({ type: "REMOVEFROMCART", payload: product })
              }
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatchCart({ type: "ADDTOCART", payload: product })
              }
            >
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
