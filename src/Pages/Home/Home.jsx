// home page
import React from "react";
import styles from "./Home.module.css";
import {
  Homefirstslider,
  HomeSecondSlider,
  JournalSlider,
} from "../../components/Homefirstslider.jsx";
import { Link } from "react-router-dom";
import {
  CenterSlider,
  SecondCenterSlider,
  CoustomerReviews,
} from "../../components/CenterSlider";
import {
  HomeImageSlider,
  HomeImageSecondSlider,
  HomeGifSlider,
} from "../../components/HomeImageSlider";

const Home = () => {
  return (
    <div>
      <div className={styles.productsCategories}>
        <div>
          <Link to="/product" className={styles.cosmaticsImage}>
            <img src="../.././homeAssets/cosmatics.jpg" alt="" />
            <p>COSMETICS</p>
          </Link>
        </div>
        <div>
          <img src="../.././homeAssets/haircare.webp" alt="" />
          <p>HAIRCARE</p>
        </div>
        <div>
          <img src="../.././homeAssets/nutrition.webp" alt="" />
          <p>NUTRITION</p>
        </div>
        <div>
          <img src="../.././homeAssets/serum.webp" alt="" />
          <p>SERUM</p>
        </div>
        <div>
          <img src="../.././homeAssets/moisturiser.webp" alt="" />
          <p>MOISTURIZER</p>
        </div>
      </div>
      <Homefirstslider />
      <div className={styles.lovedby}>
        <p>loved by</p>
        <h2>
          over <i>10 Lakh</i> customers
        </h2>
      </div>
      <HomeSecondSlider />
      <div className={styles.bestseller}>
        <p>OUR</p>
        <i>BESTSELLERS</i>
        <div className={styles.bestsellerCategory}>
          <Link to="">SKIN</Link>
          <Link to="/products">COSMETICS</Link>
          <Link to="">NUTRITION</Link>
          <Link to=""> HAIRCARE</Link>
        </div>
      </div>
      <CenterSlider />

      <div className={styles.bestseller}>
        <p>SHOP OUR</p>
        <i>NEW ARRIVALS</i>
      </div>
      <SecondCenterSlider />

      <div className={styles.bestseller}>
        <p>IN THE</p>
        <i>SPOTLIGHT</i>
      </div>
      <div className={styles.spotlightImages}>
        <div className={styles.spotlightBox1}>
          <img
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-SERUMS.jpg?v=1655304444"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/diy_serum_1.png?v=1655363018"
            alt=""
          />
        </div>
        <div className={styles.spotlightBox2}>
          <img
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/moringa_range_2.png?v=1655363016"
            alt=""
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Cica_4_Block-01.png?v=1655304444"
            alt=""
          />
        </div>
      </div>

      <div className={styles.bestseller}>
        <p>SHOP BY</p>
        <i>INGREDIENTS</i>
      </div>
      <HomeImageSlider />

      <div className={styles.bestseller}>
        <p>GUIDE TO</p>
        <i>SKINCARE</i>
      </div>
      <HomeImageSecondSlider />

      <div className={styles.singleImage}>
        <img
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Desktop_version.jpg?v=1655306385"
          alt=""
        />
      </div>

      <div className={styles.bestseller}>
        <p>LOVE IS GREATER</p>
        <i>WHEN SHARED</i>
      </div>

      <div className={styles.singleImage2}>
        <img
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_f077b04b-7e98-4c38-94e3-16da38fc85ab.jpg?v=1651149023"
          alt=""
        />
      </div>

      <div className={styles.quotes}>
        <h2>CLEAN BEAUTY</h2>
        <p>WITH UNCOMPROMISED EFFICACY</p>
        <p>
          At Dot & Key, we strive to find the missing <i>"dots"</i> in your
          skincare regime and are obsessed with providing solutions or{" "}
          <i>"keys"</i> to these.
        </p>
        <p>
          Our revolutionary products are crafted with utmost care and love for
          you. By blending <i>luxurious botanicals</i> with{" "}
          <i>high performance actives,</i>
          we bring to you clean formulations that are absolutely safe,
          delightfully gentle and unquestionably effective.
        </p>
      </div>

      <div className={styles.features}>
        <img
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3-ICONS.png?v=1645770027"
          alt=""
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1-ICONS_b6233563-9f3e-43f6-b158-5205886e2120.png?v=1645779546"
          alt=""
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4-ICONS.png?v=1645770027"
          alt=""
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-ICONS.png?v=1645770027"
          alt=""
        />
      </div>

      <HomeGifSlider />

      <div className={styles.asSeenIn}>
        <p>AS SEEN IN</p>
        <div className={styles.asSeenInQuotes}>
          <div>
            <p>
              "Latest and greatest natural products for safe, non-toxic
              skincare."
            </p>
            <img
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/elle-magazine-vector-logo-3_9501c881-18bc-4482-a41a-bae5979fd0b9_180x.png?v=1596894078"
              alt=""
            />
          </div>
          <div>
            <p>
              "Dot & Key are hoping to spotlight all the bodyparts you forget to
              look after."
            </p>
            <img
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Vogue-3-min_180x.png?v=1600165794"
              alt=""
            />
          </div>
          <div>
            <p>
              "Even a 10 step routine can have binl spots. Dot & Key fills those
              steps."
            </p>
            <img
              src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/elle-magazine-vector-logo-2_8a4b49eb-9d7c-4864-954a-fe48fb05a208_180x.png?v=1596894127"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={styles.bestseller}>
        <p>COUSTOMER</p>
        <i>REVIEWS</i>
      </div>
      <CoustomerReviews />

      <div className={styles.bestseller}>
        <p>OUR</p>
        <i>SKINCARE JOURNAL</i>
      </div>
      <div className={styles.journel}>
        <img
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/image_64_1_7f2ff662-3a45-45a1-9f0c-952252786d05.png?v=1634885869"
          alt=""
        />
        <div>
          <JournalSlider/>
        </div>
      </div>
    </div>
  );
};

export default Home;
