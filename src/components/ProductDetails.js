// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   selectedProduct,
//   removeSelectedProduct,
// } from "../redux/actions/productsActions";
// import { Card, Button } from "react-bootstrap"; 
// const ProductDetails = ({ match }) => {
//   const product = useSelector((state) => state.product);
//   const { productId } = useParams();
//   console.log(product);
//   const dispatch = useDispatch();
//   console.log(productId);

//   const fetchProductDetail = async () => {
//     const response = await axios
//       // .get(`https://makeup-api.herokuapp.com/api/v1/products.json/${productId}`)
//       // .get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline/${productId}` )
//       .get(`http://localhost:8080/products/${productId}`)
//       // .get(`https://fakestoreapi.com/products/${productId}`)
//       .catch((err) => {
//         console.log(err);
//       });
//     dispatch(selectedProduct(response.data));
//   };
//   useEffect(() => {
//     if (productId && productId !== "") fetchProductDetail(productId);
//     return () => {
//       dispatch(removeSelectedProduct());
//     };
//   }, []);
//   const {
//     img1,

//     rating,

//     brand,

//     name,
//     price,
//   } = product;
//   return (
//     <Card style={{ width: "18rem", margin: "10px", gap: "40px" }}>
//       {/* <Link to={`product/${id}`}> */}
//       <Card.Img variant="top" src={img1} />

//       <Card.Body>
//         {/* <Card.Title>{brand}</Card.Title> */}
//         <Card.Text style={{ color: "#d0538c" }}>
//           <b>Rs:{price}</b>
//         </Card.Text>
//         <Card.Text style={{ color: "black", textDecoration: "none" }}>
//           {name}
//         </Card.Text>
//         <Card.Text style={{ color: "#d0538c" }}>{brand}</Card.Text>
//         <Card.Text style={{ color: "yellow" }}> {rating}</Card.Text>
//         {/* <Card.Text>{description}</Card.Text> */}

//         <Button variant="primary" style={{ backgroundColor: "grey" }}>
//           ADD TO CART
//         </Button>
//       </Card.Body>
//       {/* </Link> */}
//     </Card>
//   );
// };

// export default ProductDetails;
