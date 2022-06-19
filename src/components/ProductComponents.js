import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Card, Button } from "react-bootstrap";
import { ProductsSlider } from "./ProductsSlider";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, img1, name, rating, price } = product;
    // <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-SPREAD-THE-LOVE-Desktop-Final_3.png?v=1638165803"></img>;
    return (
      <Card style={{ width: "18rem", margin: "10px", gap: "40px" }} key={id}>
        <Link to={`/product/${id}`}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            {/* <Card.Title>{brand}</Card.Title> */}
            <Card.Text style={{ color: "#d0538c" }}>
              <b>Rs:{price}</b>
            </Card.Text>
            <Card.Text style={{ color: "yellow" }}>{rating}</Card.Text>
            <Card.Text style={{ color: "black", textDecoration: "none" }}>
              {name}
            </Card.Text>

            <Button variant="primary" style={{ backgroundColor: "grey" }}>
              ADD TO CART
            </Button>
          </Card.Body>
        </Link>
      </Card>
    );
  });

  return (
    <>
      <ProductsSlider />
      {renderList}
    </>
  );
};

export default ProductComponent;
