// import PropTypes from "prop-types";
// import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getProductCartQuantity } from "../../helpers/product";
// import Rating from "./sub-components/ProductRating";
// import { addToCart } from "../../store/slices/cart-slice";
// import { addToWishlist } from "../../store/slices/wishlist-slice";
// import { addToCompare } from "../../store/slices/compare-slice";

// const ProductDescriptionInfo = ({
//   product,
//   discountedPrice,
//   currency,

//   finalProductPrice,
//   cartItems,
//   wishlistItem,
//   compareItem,
// }) => {
//   console.log(product?.variants)
//   const [qty ,setQty] = useState(1);
//     const handleIncrement = () => {
//     if (qty < product?.on_stock) {
//       setQty(qty + 1);
//     }
//   };

//   const handleDecrement = () => {
//     if (qty > 1) {
//       setQty(qty - 1);
//     }
//   };

//   const dispatch = useDispatch();
//   const [selectedColor, setSelectedColor] = useState(null);

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   // Get the price for the selected color
//   const getPriceForColor = () => {
//     const selectedVariant = product?.variants?.find(variant => variant.name === selectedColor);
//     return selectedVariant ? selectedVariant.price : null;
//   };
//   // const [selectedProductColor, setSelectedProductColor] = useState(
//   //   product.variation ? product.variation[0].color : ""
//   // );
//   // const [selectedProductSize, setSelectedProductSize] = useState(
//   //   product.variation ? product.variation[0].size[0].name : ""
//   // );
//   // const [productStock, setProductStock] = useState(
//   //   product.variation ? product.variation[0].size[0].stock : product.stock
//   // );
//   // const [quantityCount, setQuantityCount] = useState(1);

//   // const productCartQty = getProductCartQuantity(
//   //   cartItems,
//   //   product,
//   //   // selectedProductColor,
//   //   // selectedProductSize
//   // );

//   return (
//     <div className="product-details-content ml-70">
//       <h2>{product?.name}</h2>
//       <div className="product-details-price">
//         {discountedPrice !== null ? (
//           <Fragment>
//             <span>KD{"     "}{product?.variants ? product.variants[0]?.price : product?.price}</span>
// {" "}

//           </Fragment>
//         ) : (
//           <span>{currency.currencySymbol} </span>
//         )}
//       </div>
//       {/* {product.rating && product.rating > 0 ? (
//         <div className="pro-details-rating-wrap">
//           <div className="pro-details-rating">
//             <Rating ratingValue={product.rating} />
//           </div>
//         </div>
//       ) : (
//         ""
//       )} */}
//       <div className="pro-details-list">
//         <p>{product?.about}</p>
//       </div>

//       {
//        (
//         <>

//         <div disabled className="pro-details-quality">
//          {product?.on_stock > 1 && ( <div className="cart-plus-minus">
//             <button
//               onClick={() =>
//                 handleDecrement()
//               }
//               className="dec qtybutton"
//             >
//               -
//             </button>
//             <input
//               className="cart-plus-minus-box"
//               type="text"
//               value={qty}
//               readOnly
//             />
//             <button
//               onClick={() =>
//                 handleIncrement()
//               }
//               className="inc qtybutton"
//             >

//               +
//             </button>
//           </div>)}
//           <div className="pro-details-cart btn-hover">
//             {product?.on_stock && product?.on_stock > 0 ? (
//               <button
//                onClick={() => dispatch(addToCart({ product, qty }))}
//  >
//                 {" "}
//                 Add To Cart{" "}
//               </button>
//             ) :
//              (
//               <button disabled>Out of Stock</button>
//             )
//             }

//           </div>
//           <div className="pro-details-wishlist">
//             <button
//               className={wishlistItem !== undefined ? "active" : ""}
//               disabled={wishlistItem !== undefined}
//               title={
//                 wishlistItem !== undefined
//                   ? "Added to wishlist"
//                   : "Add to wishlist"
//               }
//               onClick={() => dispatch(addToWishlist(product))}
//             >
//               <i className="pe-7s-like" />
//             </button>
//           </div>
//           <div>

//           </div>
//           <div className="pro-details-compare">

//           </div>
//         </div>

//         <div>
//       <h3>Select variant</h3>
//       <div className="color-options">
//         {product?.variants.map((variant, index) => (
//           <div
//             key={index}
//             className={`color-option ${selectedColor === variant.name ? 'selected' : ''}`}

//             onClick={() => handleColorSelect(variant.name)}
//           >
//             {variant.name}
//           </div>
//         ))}
//       </div>
//       {/* <h3>Price: {getPriceForColor() ?? 'N/A'}</h3> */}
//     </div>

//         </>
//       )}
//       {product?.category?.name ? (
//         <div className="pro-details-meta">
//           <span>Categories :</span>
//           <ul>
//             {product?.category?.name}
//           </ul>
//         </div>
//       ) : (
//         ""
//       )}

// {/*
//       <div className="pro-details-social">
//         <ul>
//           <li>
//             <a href="//facebook.com">
//               <i className="fa fa-facebook" />
//             </a>
//           </li>
//           <li>
//             <a href="//dribbble.com">
//               <i className="fa fa-dribbble" />
//             </a>
//           </li>
//           <li>
//             <a href="//pinterest.com">
//               <i className="fa fa-pinterest-p" />
//             </a>
//           </li>
//           <li>
//             <a href="//twitter.com">
//               <i className="fa fa-twitter" />
//             </a>
//           </li>
//           <li>
//             <a href="//linkedin.com">
//               <i className="fa fa-linkedin" />
//             </a>
//           </li>
//         </ul>
//       </div> */}
//     </div>
//   );
// };

// ProductDescriptionInfo.propTypes = {
//   cartItems: PropTypes.array,
//   compareItem: PropTypes.shape({}),
//   currency: PropTypes.shape({}),
//   discountedPrice: PropTypes.number,
//   finalDiscountedPrice: PropTypes.number,
//   finalProductPrice: PropTypes.number,
//   product: PropTypes.shape({}),
//   wishlistItem: PropTypes.shape({})
// };

// export default ProductDescriptionInfo;
// import PropTypes from "prop-types";
// import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getProductCartQuantity } from "../../helpers/product";
// import Rating from "./sub-components/ProductRating";
// import { addToCart } from "../../store/slices/cart-slice";
// import { addToWishlist } from "../../store/slices/wishlist-slice";
// import { addToCompare } from "../../store/slices/compare-slice";

// const ProductDescriptionInfo = ({
//   product,
//   discountedPrice,
//   currency,
//   finalProductPrice,
//   cartItems,
//   wishlistItem,
//   compareItem,
// }) => {
//   const [qty, setQty] = useState(1);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const dispatch = useDispatch();

//   const handleIncrement = () => {
//     if (qty < product?.on_stock) {
//       setQty(qty + 1);
//     }
//   };

//   const handleDecrement = () => {
//     if (qty > 1) {
//       setQty(qty - 1);
//     }
//   };

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   const getPriceForColor = () => {
//     const selectedVariant = product?.variants?.find(variant => variant.name === selectedColor);
//     return selectedVariant ? selectedVariant.price : product?.price;
//   };

//   return (
//     <div className="product-details-content ml-70">
//       <h2>{product?.name}</h2>
//       <div className="product-details-price">
//         {discountedPrice !== null ? (
//           <Fragment>
//             <span>KD{"     "}{getPriceForColor()?.toFixed(3)}</span>
//           </Fragment>
//         ) : (
//           <span>{currency.currencySymbol} </span>
//         )}
//       </div>

//       <div className="pro-details-list">
//         <p>{product?.about}</p>
//       </div>

//       <div disabled className="pro-details-quality">
//         {product?.variants?.stock && product?.variants?.stock?.length > 0 ? (
//           <div className="cart-plus-minus">
//             <button onClick={handleDecrement} className="dec qtybutton">-</button>
//             <input className="cart-plus-minus-box" type="text" value={qty} readOnly />
//             <button onClick={handleIncrement} className="inc qtybutton">+</button>
//           </div>
//         ) :   <div disabled className="pro-details-quality">
//         {product?.on_stock > 1 && ( <div className="cart-plus-minus">
//            <button
//              onClick={() =>
//                handleDecrement()
//              }
//              className="dec qtybutton"
//            >
//              -
//            </button>
//            <input
//              className="cart-plus-minus-box"
//              type="text"
//              value={qty}
//              readOnly
//            />
//            <button
//              onClick={() =>
//                handleIncrement()
//              }
//              className="inc qtybutton"
//            >

//              +
//            </button>
//          </div>)}

//          <div>

//          </div>
//          <div className="pro-details-compare">

//          </div>
//        </div>}

//        <div className="pro-details-cart btn-hover">
//   {product?.variants && product?.variants.length > 0 && product?.variants.some(variant => variant.stock > 0) ? (
//     <button onClick={() => dispatch(addToCart({ product, qty }))}>Add To Cart</button>
//   ) : (
//     <>
//       {product?.on_stock > 1 && (
//         <button onClick={() => dispatch(addToCart({ product, qty }))}>Add To Cart</button>
//       )}
//       {product?.on_stock <= 0 && (
//         <button disabled>Out of Stock</button>
//       )}
//     </>
//   )}
// </div>

//         <div className="pro-details-wishlist">
//           <button
//             className={wishlistItem !== undefined ? "active" : ""}
//             disabled={wishlistItem !== undefined}
//             title={wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist"}
//             onClick={() => dispatch(addToWishlist(product))}
//           >
//             <i className="pe-7s-like" />
//           </button>
//         </div>
//         <div style={{marginLeft : "2vw" , marginBottom : "2vw"}}>
//          {product?.variants?.length > 0 && ( <div>
//             <h3>Select variant</h3>
//             <div className="color-options">
//               {product?.variants.map((variant, index) => (
//                 <div
//                   key={index}
//                   className={`color-option ${selectedColor === variant.name ? 'selected' : ''}`}
//                   onClick={() => handleColorSelect(variant.name)}
//                 >
//                   <button style={{width : "4vw" , color : "goldenrod" , background :"white"}}>{variant?.name}</button>
//                 </div>
//               ))}
//             </div>
//           </div>)}
//         </div>
//        </div>

//       {product?.category?.name && (
//         <div className="pro-details-meta">
//           <span>Categories :</span>
//           <ul>{product?.category?.name}</ul>
//         </div>
//       )}
//     </div>
//   );
// };

// ProductDescriptionInfo.propTypes = {
//   cartItems: PropTypes.array,
//   compareItem: PropTypes.shape({}),
//   currency: PropTypes.shape({}),
//   discountedPrice: PropTypes.number,
//   finalDiscountedPrice: PropTypes.number,
//   finalProductPrice: PropTypes.number,
//   product: PropTypes.shape({}),
//   wishlistItem: PropTypes.shape({})
// };

// export default ProductDescriptionInfo;
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import Rating from "../../wrappers/product/Rating";

const ProductDescriptionInfo = ({
  product,
  discountedPrice,
  currency,
  finalProductPrice,
  cartItems,
  wishlistItem,
  compareItem,
}) => {
  useEffect(() => {
    if (!product?.on_stock && product?.variants?.length > 0) {
      setSelectedColor(product.variants[0].name);
      setAvailability(product.variants[0].stock); // Initialize availability with the first variant's stock
    }
  }, [product]);
  const handleColorSelect = (color, stock) => {
    setSelectedColor(color);
    setAvailability(stock); // Update availability when a different variant is selected
  };
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [availability, setAvailability] = useState(null); // State to track availability
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (qty < product?.on_stock) {
      setQty(qty + 1);
    } else if (qty < availability) {
      setQty(qty + 1);
    }
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const getPriceForColor = () => {
    const selectedVariant = product?.variants?.find(
      (variant) => variant.name === selectedColor
    );
    return selectedVariant ? selectedVariant.price : product?.price;
  };

  return (
    <div className="product-details-content ml-70">
      <h2>{product?.name}</h2>
      <div className="product-details-price">
        {discountedPrice !== null ? (
          <Fragment>
            <span>
              KD{"     "}
              {getPriceForColor()?.toFixed(3)}
            </span>
          </Fragment>
        ) : (
          <span>{currency.currencySymbol} </span>
        )}
      </div>
      <div>
        <Rating value={product?.rating} />
      </div>

      <div className="pro-details-list">
        <p>{product?.about}</p>
      </div>

      <div className="pro-details-quality">
        {availability !== null && availability > 0 ? (
          <div className="cart-plus-minus">
            <button onClick={handleDecrement} className="dec qtybutton">
              -
            </button>
            <input
              className="cart-plus-minus-box"
              type="text"
              value={qty}
              readOnly
            />
            <button onClick={handleIncrement} className="inc qtybutton">
              +
            </button>
          </div>
        ) : (
          <div className="pro-details-quality">
            {product?.on_stock > 1 ? (
              <div className="cart-plus-minus">
                <button onClick={handleDecrement} className="dec qtybutton">
                  -
                </button>
                <input
                  className="cart-plus-minus-box"
                  type="text"
                  value={qty}
                  readOnly
                />
                <button onClick={handleIncrement} className="inc qtybutton">
                  +
                </button>
              </div>
            ) : null}
            <div className="pro-details-compare"></div>
          </div>
        )}

        {/* {availability !== null && availability > 0 ? (
          <div className="cart-plus-minus">
            <button onClick={handleDecrement} className="dec qtybutton">-</button>
            <input className="cart-plus-minus-box" type="text" value={qty} readOnly />
            <button onClick={handleIncrement} className="inc qtybutton">+</button>
          </div>
        ) :   <div className="pro-details-quality">
        {product?.on_stock > 1  ( <div className="cart-plus-minus">
           <button
             onClick={() =>
               handleDecrement()
             }
             className="dec qtybutton"
           >
             -
           </button>
           <input
             className="cart-plus-minus-box"
             type="text"
             value={qty}
             readOnly
           />
           <button
             onClick={() =>
               handleIncrement()
             }
             className="inc qtybutton"
           >
             +
           </button>
         </div>)}
         
         <div className="pro-details-compare">
         
         </div>
       </div>} */}

        <div className="pro-details-cart btn-hover">
          {availability !== null && availability > 0 ? (
            <button onClick={() => dispatch(addToCart({ product, qty }))}>
              Add To Cart
            </button>
          ) : (
            <>
              {product?.on_stock > 1 && (
                <button onClick={() => dispatch(addToCart({ product, qty }))}>
                  Add To Cart
                </button>
              )}
              {product?.on_stock <= 0 && <button disabled>Out of Stock</button>}
            </>
          )}
        </div>

        <div className="pro-details-wishlist">
          <button
            className={wishlistItem !== undefined ? "active" : ""}
            disabled={wishlistItem !== undefined}
            title={
              wishlistItem !== undefined
                ? "Added to wishlist"
                : "Add to wishlist"
            }
            onClick={() => dispatch(addToWishlist(product))}
          >
            <i className="pe-7s-like" />
          </button>
        </div>
        <div
          className="color-options"
          style={{ }}
        >
          {product?.variants?.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1vw"
              }}
            >
              <h3 style={{  }}>Select variant</h3>
              <div
                className="color-options"
                style={{ alignItems: "center", display: "flex" }}
              >
                {product?.variants.map((variant, index) => (
                  <div
                    style={{ width: "fit-content" }}
                    key={index}
                    className={`color-option ${
                      selectedColor === variant.name ? "selected" : ""
                    }`}
                    onClick={() =>
                      handleColorSelect(variant.name, variant.stock)
                    } // Pass stock as argument
                  >
                    <div>
                      <input
                        style={{width: "25px"}}
                        type="radio"
                        name="color"
                        id={`color-${index}`}
                        value={variant.name}
                        checked={selectedColor === variant.name}
                        onChange={() =>
                          handleColorSelect(variant.name, variant.stock)
                        } // Pass stock as argument
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`color-${index}`}
                        style={{
                          color: "goldenrod",
                          background: "white",
                        }}
                      >
                        {variant?.name}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {product?.category?.name && (
        <div className="pro-details-meta">
          <span>Categories :</span>
          <ul>{product?.category?.name}</ul>
        </div>
      )}
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  cartItems: PropTypes.array,
  compareItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
};

export default ProductDescriptionInfo;
