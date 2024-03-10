import React, { Fragment, useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { useGetProductDetailsQuery } from "../../store/slices/products-slice";

const Product = () => {
  
  const { id: productId } = useParams();
  
  console.log(productId)
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const { data : data, isLoading, error } = useGetProductDetailsQuery(productId);
  useEffect(() => {
    console.log("productId:", productId);
  }, [productId]);
  console.log(data?.data)

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
       

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={data?.data}
        />
          <RelatedProductSlider
        // category={data.data.category.name}
          spaceBottomClass="pb-95"
          // category={product.category[0]}
        />

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={data?.data?.about}
        />

        {/* related product slider */}
       
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import {useDispatch, useSelector} from 'react-redux'
// import { useNavigate } from "react-router-dom";

// import "./product.css";


// import { useState } from "react";
// import {Row, Form, Col, ListGroup } from "react-bootstrap";
// import { useGetProductDetailsQuery } from "../../store/slices/products-slice";
// import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
// import LayoutOne from "../../layouts/LayoutOne";
// import { addToCart, increaseOrder } from "../../store/slices/cart-slice";

 
// const Product = () => {
 
//   const dispatch = useDispatch();
//   const { id: productId } = useParams();
//   const [qty, setQty] = useState(1);
//   const cart = useSelector(state => state.cart)
  
//   const navigate = useNavigate();
//   const {data : data,isLoading, error} = useGetProductDetailsQuery(productId);
//   // const addToCartHandler = () => {
//   //   dispatch(addToCart({
//   //     ...product , qty
//   //   }));
//   //   navigate("/cart");

//   // }
  


//   // const addToCartHandler = () => {
//   //   dispatch(addToCart({...data , qty}))
//   // }
//   const addToCartHandler = () => {
//     // Calculate the total quantity including the current quantity in the cart
//     const totalQuantityInCart = cart.reduce((total, item) => total + item.quantity, 0);
  
//     // Calculate the available stock quantity
//     const availableStock = data?.data?.on_stock || 0;
  
//     // Calculate the maximum quantity that can be added to the cart without exceeding the stock
//     const maxQuantityToAdd = Math.min(availableStock - totalQuantityInCart, qty);
  
//     if (maxQuantityToAdd <= 0) {
//       // If the maximum quantity to add is 0 or negative, show a message or handle the situation as needed
//       alert("Sorry, you can't add more items. The stock quantity is insufficient.");
//     } else {
//       // Otherwise, dispatch addToCart action with the maximum quantity that can be added
//       dispatch(addToCart({data, qty: maxQuantityToAdd }));
//     }
//   };
 
  
//   const handleIncrement = () => {
//     if (qty < data?.data?.on_stock) {
//       setQty(qty + 1);
//     }
//   };

//   const handleDecrement = () => {
//     if (qty > 1) {
//       setQty(qty - 1);
//     }
//   };




  
  
  
  

//   return (
//     <>
//     <LayoutOne headerTop="visible">
//     <div className="productScreen-wrapper">
//       {/* btn-wrapper */}
//       <div className="btn-wrapper">
//         <button onClick={() => navigate("/")}>Go Back</button>
//       </div>
//       {
//         isLoading ? (<h4>..loading</h4>) : error  ? (<h4>error</h4>) : ( 
//         <div className="productScreen-content">
//           {/* product image */}
//           <div className="productScreen-img">
//             <img style={{height :"6vh"}} src={data?.data?.image_list[0]} alt="bye" />
//            <div>
//            <img  src={data?.data?.image_list[1]} alt="hey" />
//             <img src={data?.data?.image_list[2]} alt="hey" />
//            </div>
//           </div>
  
//           {/* product details */}
//           <div className="productScreen-details">
//             {/* seller name */}
//             <div className="seller-details">
//               <span>Brand:</span> Flora
//             </div>
  
//             {/* product title */}
//             <div className="productScreen-title">
//               <h2>{data?.data?.name}</h2>
//             </div>
  
//             {/* star rating */}
//             <div className="productScreen-star">
//               {/* <Rating
//                 value={product.rating}
//                 text={`${product.numReviews} Reviews`}
//               /> */}
//             </div>
  
//             {/* product price */}
//             <div className="productScreen-price">&#8377;{data?.data?.price}</div>
  
//             {/* product status */}
//             <div className="productScreen-status">
//               <span>
//                 {data.data?.on_stock > 0 ? "In Stock" : "Out Of Stock"}
//               </span>
//             </div>

//             {
//               data?.data?.on_stock > 0 && (
//                 <ListGroup.Item>
//                   <Row>
//                   <div className="quant">
//   <button style={{border :"gold" , background : "yellow"}} onClick={handleIncrement}>+</button>
//   <span style={{background :  "lightyellow"}}>{qty}</span>
//   <button style={{border :"gold" , background : "yellow"}}  onClick={handleDecrement}>-</button>
// </div>

//                   </Row>
//                 </ListGroup.Item>
//               )
//             }
  
//             {/* product description */}
//             <div className="productScreen-desc">{data?.data?.description}</div>

          
  
//             {/* add to cart button */}
//             <div className="addCart-btn">
//              <Link to={'/cart'}>
//               <button onClick={() => dispatch(addToCart({ data, qty }))} 
             
 
//                 style={{
//                   background: `${data?.data?.on_stock === 0 ? "red" : ""}`,color: `${data?.data?.on_Stock === 0 ? "white" : ""}`
//                 }}
//                 disabled={data?.data.on_stock === 0}
               
//               >
//                 {data?.data?.on_stock === 0 ? "Out of stock" : "Add To Cart"}
//               </button></Link>
//             </div>
//           </div>
//           </div> )
//       }

      
       
//     </div>
//     {/* <RelatedProductSlider
//            spaceBottomClass="pb-95"
//           // category={product.category[0]}
//         /> */}
//         </LayoutOne>
//     </>
//   );
// };

// export default Product;