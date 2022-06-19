import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/exports";
import ProductComponent from "./ProductComponents";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      // .get("https://makeup-api.herokuapp.com/api/v1/products.json")
      // .get("https://fakestoreapi.com/products")
      // .get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .get("http://localhost:8080/products")
      .catch((err) => {
        // console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
