import { Carousel } from "react-bootstrap";
import React from "react";
// import ProductComponent from "./ProductComponents";

export const ProductsSlider = () => {
  return (
    <div>
      <Carousel className="carousels">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Desktop_1.jpg?v=1655189395"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/bodycare_desktop.png?v=1639668460"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_home_4.png?v=1645176921"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>

      <div className="name" >
        <h1>Just In</h1>
        <h1>
          <b>BODYCARE</b>
        </h1>
      </div>

      <div className="template">
        <img
          className="tem-img"
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/ROSE_2.png?v=1636617537"
        ></img>
        <img
          className="tem-img"
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/0_1.png?v=1636623319"
        ></img>
        <img
          className="tem-img"
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1.3_d0fb05cd-1610-4b66-ad0d-391d4aad2676.png?v=1636537323"
        ></img>
      </div>

      <img
        className="wipped"
        style={{width:"105%",marginTop:"80px"}}
        src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-Model-Image-Desktop_2_1ac15045-7c83-4680-9bd8-6d5a5878a0c4.png?v=1636955347"
      ></img>
      {/* <ProductComponent/> */}

      <div className="name">
        <h1>BODY</h1>
        <h1>
          <b>SCRUB</b>
        </h1>
      
      </div>
    </div>
  );
};
