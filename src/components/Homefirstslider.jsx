import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HomeComponent.css";

const Homefirstslider = () => {
  return (
    <div>
      <Carousel variant="dark" className="mb-5 firstSlider">
        <Carousel.Item>
          <a href="https://www.dotandkey.com/products/cica-calming-niacinamide-sunscreen-spf-50-pa">
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Desktop_1.jpg?v=1655189395"
              alt="First slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.dotandkey.com/products/20-vitamin-c-freshly-made-face-serum">
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_desk_73e2615b-0026-447e-81af-fe6041105ce8.png?v=1653371967"
              alt="Second slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.dotandkey.com/collections/cica-niacinamide">
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_3.jpg?v=1651751278"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.dotandkey.com/products/vitamin-c-moisturizer-with-kakadu-plum-vitamin-e">
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Vit-C_5.jpg?v=1651751278"
              alt="Fourth slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#">
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-Product_banner_Desktop_4.jpg?v=1651751278"
              alt="Fourth slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

const HomeSecondSlider = () => {
  return (
    <div>
      <Carousel className="m-5 secondSlider" interval={null}>
        <Carousel.Item>
          <a href="https://www.dotandkey.com/collections/shop-all">
            <img
              style={{ width: "85%", height: "300px" }}
              className="d-block m-auto"
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_2_1.jpg?v=1655305233"
              alt="First slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.dotandkey.com/collections/shop-all">
            <img
              style={{ width: "85%", height: "300px" }}
              className="d-block m-auto m-3"
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_1_1.jpg?v=1655305234"
              alt="Second slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.dotandkey.com/collections/shop-all">
            <img
              style={{ width: "85%", height: "300px" }}
              className="d-block m-auto "
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_3.jpg?v=1655305234"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

const journalData = [
  "Face Wash: What Suits Your Skin's Needs The Best",
  "Is Vitamin C The Solution To Your Oily Skin Problems?",
  "Breeze Into The Summer With Easy To Follow Skin Care Tips",
  "Masking Up All Day: Know How You Can HEal Your Skin After?",
  "Skinflammaging & CICA: The Answer To Your Query!",
  "CICA: The Healing Herb For Acne-Prone Skin!",
  "Bedtime Skincare Routine You Must Follow",
  "5 Reasons For Must-Have Hyaluronic Acid In Summer SkinCare Regime",
  "skinncare tips for summer | enjoy your summer vacation to the fullest",
  "make way for L-Ascorbic acid: the new vitamin c game changer",
];

const JournalSlider = () => {
  return (
    <Carousel
      variant="dark"
      interval={null}
      className="journalSliderParent"
      indicators={false}
      carousel-control-color="black"
    >
      {journalData.map((item, i) => (
        <Carousel.Item key={i} className="JournalSlider">
          <p>{item}</p>
          <button>READ MORE</button>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export { Homefirstslider, HomeSecondSlider, JournalSlider };
