import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Filters from "../components/Filters";
import LandingPage from "../components/LandingPage";
import { SingleProduct } from "../components/SingleProduct";
import { NewContext } from "../context/NewContext";

const Home = () => {
  const { products, dispatchProducts,form,} = useContext(NewContext);
  console.log(form)
  const [loading, setLoading] = useState(true);

  const getproducts = async () => {
    try {
      if(!form?.department){
       
        setLoading(false);
       
        return;
      }
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${form.department}`
      );
      const data = await response.json();
      // console.log(data)
      dispatchProducts({ type: "ALLPRODUCT", payload: data });
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getproducts();
 
  }, [form]);

  return loading ? (
    <Spinner />
  ) : (
    <div className="home">
      <Filters />
      {form.department ?(<div className="product-Container">
        {products.map((product) => {
          return (
            <li className="list" key={product.id}>
              <SingleProduct product={product} />
            </li>
          );
        })}
      </div>):<LandingPage/>}

   
    </div>
  );
};

export default Home;
