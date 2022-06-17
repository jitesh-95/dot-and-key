import React, { useState } from "react";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import "./HomeComponent.css";

const slideData = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS.jpg?v=1655302709",
    heading: "72 HOUR PROBIATIOC GEL MOISTURIZER FOR FACE",
    rating: "4.7/5",
    ratingSpan: "(224)",
    strikedOff: 745.0,
    price: 596.0,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICANIGHTGEL_3.jpg?v=1655379818",
    heading:
      "CICA NIACINAMIDE NIGHT GEL WITH GREEN TEA, TEA TREE OIL & HYALURONIC OIL",
    rating: "4.8/5",
    ratingSpan: "(115)",
    strikedOff: 595.0,
    price: 506.0,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-GreenClayListing_1.jpg?v=1649655908",
    heading: "SALICYLIC & FRENCS GREEN CLAY FACE MASK WITH MATCH TEA",
    rating: "4.7/5",
    ratingSpan: "(226)",
    strikedOff: 595.0,
    price: 487.0,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_e423c2c9-3a60-4a5e-9bc0-b0526b7f3c01.jpg?v=1655302612",
    heading: "RETINOL & CERAMIDE AGE DEFENCE NIGHT CREAM FOR FACE",
    rating: "4.7/5",
    ratingSpan: "(212)",
    strikedOff: 945.0,
    price: 662.0,
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASK.jpg?v=1655311025",
    heading:
      "VITAMIN C LIP MASK WITH VITAMIN E, SHEA BUTTER, HYALURONIC & ALMOND OIL",
    rating: "4.7/5",
    ratingSpan: "(226)",
    strikedOff: 445.0,
    price: 356.0,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCMOIST.jpg?v=1655302755",
    heading:
      " VITAMIN C MOISTURIZER WITH KAKADU PLAUM & VITAMIN E | FADES PIGMENTATION",
    rating: "4.8/5",
    ratingSpan: "(214)",
    strikedOff: 595.0,
    price: 499.0,
  },
];

const newArrival = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN.jpg?v=1655303963",
    heading:
      "CICA + NIACINAMIDE FACE SUNSCREEN SPF 50+++| BROAD SPECTRUM UV PROTECTOR",
    rating: "5.0/5",
    ratingSpan: "(5)",
    strikedOff: 595.0,
    price: 494.0,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20_VITC.jpg?v=1655379925",
    heading: "20% VITAMIN C SERUM WITH BLOOD ORANGE | FOR SKIN GLOW",
    rating: "4.9/5",
    ratingSpan: "(30)",
    strikedOff: 665.0,
    price: 532.0,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERTONER.jpg?v=1655304005",
    heading: "WATERMELON WITH SKIN GLOW FACE TONER WITH GLYCOLIC + LACTIC",
    rating: "5.0/5",
    ratingSpan: "(12)",
    strikedOff: 395.0,
    price: 316.0,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/ACNEBUSTING.jpg?v=1655370921",
    heading:
      "2% SALISYLIC FACR SERUM WITH TEA TREE OIL & ZINC | TREATS ACNE & BLEMISHES",
    rating: "4.6/5",
    ratingSpan: "(251)",
    strikedOff: 665.0,
    price: 499.0,
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/prbox.jpg?v=1655304058",
    heading: "BIG BIRTHDAY SPECIAL SKINCARE KIT",
    rating: "5.0/5",
    ratingSpan: "(2)",
    strikedOff: 2699.0,
    price: 1999.0,
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <MdArrowBackIos />
    </div>
  );
};

const CenterSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="firstCenterSlider">
      <Slider {...settings}>
        {slideData.map((item, i) => (
          <div
            key={i}
            className={
              i === imageIndex ? "centerSlider myactiveSlider" : "centerSlider"
            }
          >
            <img src={item.image} alt="" />
            <div className="ratings">
              <p>
                <AiTwotoneStar /> {item.rating} <span>{item.ratingSpan}</span>
              </p>
              <BsSuitHeart />
            </div>
            <h6 className="sliderheading">{item.heading}</h6>
            <div className="sliderPrice">
              <p>Rs.{item.strikedOff}.00</p>
              <p>Rs. {item.price}.00</p>
            </div>
            <button className="sliderAddToCart">ADD TO CART</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SecondCenterSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="firstCenterSlider">
      <Slider {...settings}>
        {newArrival.map((item, i) => (
          <div
            key={i}
            className={
              i === imageIndex ? "centerSlider myactiveSlider" : "centerSlider"
            }
          >
            <img src={item.image} alt="" />
            <div className="ratings">
              <p>
                <AiTwotoneStar /> {item.rating} <span>{item.ratingSpan}</span>
              </p>
              <BsSuitHeart />
            </div>
            <h6 className="sliderheading">{item.heading}</h6>
            <div className="sliderPrice">
              <p>Rs.{item.strikedOff}.00</p>
              <p>Rs. {item.price}.00</p>
            </div>
            <button className="sliderAddToCart">ADD TO CART</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const customerReviewsData = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_2.png?v=1634903414",
    review:
      "My acne prone & oily skin issues are finally sorted. Thanks Dot & Key for this amazing launch.",
    name: "Ankita pugaliya",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Artboard1_2.jpg?v=1635157945",
    review:
      "I love this moisturizer. It keeps my skin so soft and supple and it's not oily or stiky at all.",
    name: "Charu Gupta",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/a.jpg?v=1634903074",
    review:
      "Plumping lip mask is just amazing makes lips smooth and naturally pink.",
    name: "Dipshi Thapa",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/nightresetretinolcream_f7f3a49c-5a22-4173-81a7-6aad8d00fe8d.jpg?v=1634903102",
    review:
      "I wass searching for good night gel and was even serching for retinol for beginners. This cream was a solution.",
    name: "Divya Sai Nemmani",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/image-2.png?v=1635158596",
    review:
      "I ordered 72 hour hydrating gel + probiotics, i found it very relaxing and soothing on my skin. I love it so much.",
    name: "Anuradha Iyer",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/AHASleepMask1.jpg?v=1635159675",
    review:
      "This is my second purchase & i love how it makes me glow in the morning after a long & tiring day at work.",
    name: "Rashmi Shrivastav",
  },
];

const CoustomerReviews = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="customerReviewsParentBox">
      <Slider {...settings}>
        {customerReviewsData.map((item, i) => (
          <div
            key={i}
            className={
              i === imageIndex
                ? "CustomerReview activeCustomerReview"
                : "CustomerReview"
            }
          >
            <div className="ReviewProduct">
              <img src={item.image} alt="" />
            </div>
            <div className="ReviewQuote">
              <div className="ReviewHearts">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </div>
              <p className="ActualReview">{item.review}</p>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { CenterSlider, SecondCenterSlider, CoustomerReviews };
