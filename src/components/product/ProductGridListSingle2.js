// import PropTypes from "prop-types";
// import { Fragment, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import clsx from "clsx";
// import Marquee from "react-fast-marquee";

// // import { getDiscountPrice } from "../../helpers/product";
// import Rating from "./sub-components/ProductRating";
// import ProductModal from "./ProductModal";
// import { addToCart } from "../../store/slices/cart-slice";
// import { addToWishlist } from "../../store/slices/wishlist-slice";
// import { addToCompare } from "../../store/slices/compare-slice";

// const ProductGridListSingle = ({
//   brand,
//   currency,
//   cartItem,
//   wishlistItem,
//   compareItem,
//   spaceBottomClass
// }) => {
//   const [modalShow, setModalShow] = useState(false);
//   // const discountedPrice = getDiscountPrice(product.price, product.discount);
//   // const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
//   // const finalDiscountedPrice = +(
//   //   discountedPrice * currency.currencyRate
//   // ).toFixed(2);
//   const dispatch = useDispatch();
//   console.log(brand);

//   return (
//     <Fragment>
//         <div className={clsx("product-wrap", spaceBottomClass)}>

//           <div className="product-img">
//             <Link to={""}>
//               <img
//                 className="default-img"
//                 src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFme-35MqLqa_de_1F5p26VFtFZVTn69bPanVMemgiAw&s"}
//                 alt="r3f34"
//               />

//             </Link>
//             {/* {product.discount || product.new ? (
//               <div className="product-img-badges">
//                 {product.discount ? (
//                   <span className="pink">-{product.discount}%</span>
//                 ) : (
//                   ""
//                 )}
//                 {product.new ? <span className="purple">New</span> : ""}
//               </div>
//             ) : (
//               ""
//             )} */}


//           </div>

//           <div className="product-content text-center">
//             <h3>
//               <Link to={process.env.PUBLIC_URL + "/product/" + brand.id}>



//               </Link>
//             </h3>

//             <div className="product-price">
//               {/* {discountedPrice !== null ? (
//                 <Fragment>
//                   <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
//                   <span className="old">
//                     {currency.currencySymbol + finalProductPrice}
//                   </span>
//                 </Fragment>
//               ) : (
//                 <span>{currency.currencySymbol + finalProductPrice} </span>
//               )} */}
//             </div>
//           </div>
//         </div>
//         <div className="shop-list-wrap mb-30">
//           <div className="row">
//             <div className="col-xl-4 col-md-5 col-sm-6">
//               <div className="product-list-image-wrap">
//                 <div className="product-img">


//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-8 col-md-7 col-sm-6">
//               <div className="shop-list-content">

//                 <div className="product-list-price">
//                   {/* {discountedPrice !== null ? (
//                     <Fragment>
//                       <span>
//                         {currency.currencySymbol + finalDiscountedPrice}
//                       </span>{" "}
//                       <span className="old">
//                         {currency.currencySymbol + finalProductPrice}
//                       </span>
//                     </Fragment>
//                   ) : (
//                     <span>{currency.currencySymbol + finalProductPrice} </span>
//                   )} */}
//                 </div>


//                 <div className="shop-list-actions d-flex align-items-center">


//                   <div className="shop-list-compare ml-10">

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       {/* product modal */}
//       {/* <ProductModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         product={product}
//         currency={currency}
//         // discountedPrice={discountedPrice}
//         finalProductPrice={finalProductPrice}
//         // finalDiscountedPrice={finalDiscountedPrice}
//         wishlistItem={wishlistItem}

//       /> */}
//     </Fragment>
//   );
// };

// ProductGridListSingle.propTypes = {
//   cartItem: PropTypes.shape({}),
//   compareItem: PropTypes.shape({}),
//   currency: PropTypes.shape({}),
//   product: PropTypes.shape({}),
//   spaceBottomClass: PropTypes.string,
//   wishlistItem: PropTypes.shape({})
// };

// export default ProductGridListSingle;
import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Rating from "../../wrappers/product/Rating";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";

import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import './product.css'
import { IMAGE_URL } from "../../constants";

const ProductGridListSingle2 = ({
  product,
  currency,
  cartItem,
  wishlistItem,
  compareItem,
  spaceBottomClass
}) => {



  // const [modalShow, setModalShow] = useState(false);
  // const discountedPrice = getDiscountPrice(product.price, product.discount);
  // const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  // const finalDiscountedPrice = +(
  //   discountedPrice * currency.currencyRate
  // ).toFixed(2);
  const dispatch = useDispatch();
  const [qty] = useState(1)
  const navigate = useNavigate()

  return (
    <Fragment>
      <div className={clsx("product-wrap", spaceBottomClass)}>
        <div className="product-img">
          <Link to={`/product/${product?._id}`}>
            <img style={{ objectFit: "contain", height: "16vh" }}
              className="default-img"
              // src="https://www.ikea.com/in/en/images/products/brogrund-touch-top-bin-stainless-steel__0733267_pe738907_s5.jpg?f=s"
              src={IMAGE_URL + product.image_list[0]}
              alt='https://m.media-amazon.com/images/I/61GC8-eS95L._SY879_.jpg'
            />
            {product.image_list.length > 1 ? (
              <img
                className="hover-img"
                src={process.env.PUBLIC_URL + product.image_list[1]}
                alt=""
              />
            ) : (
              ""
            )}
          </Link>
          <div className="product-action">
            <div className="pro-same-action pro-wishlist">
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
            <div className="pro-same-action pro-cart">
              {

                product.on_stock && product.on_stock > 0 ? (
                  <button
                    onClick={() => dispatch(addToCart({ product, qty }))}
                    className={
                      cartItem !== undefined && cartItem.quantity > 0
                        ? "active"
                        : ""
                    }
                    disabled={cartItem !== undefined && cartItem.quantity > 0}
                    title={
                      cartItem !== undefined ? "Added to cart" : "Add to cart"
                    }
                  >
                    {" "}
                    <i className="pe-7s-cart"></i>{" "}
                    {cartItem !== undefined && cartItem.quantity > 0
                      ? "Added"
                      : "Add to cart"}
                  </button>
                ) : (
                  <button disabled className="active">
                    Out of Stock
                  </button>
                )}
            </div>
            <div className="pro-same-action pro-quickview">

            </div>
          </div>


          <div className="">
            <div className="">
              

            </div>

            <div className="">

            </div>
          </div>
        </div>
        <div className="product-content text-center">
          <h3>
            <Link to={`/product/${product?._id}`}>
              {product.name}
            </Link>
          </h3>
          {product.rating && product.rating > 0 ? (
            <div className="product-rating">
              <Rating   value ={product?.rating} />
            </div>
          ) : (
            ""
          )}
          <div className="product-price">
            <span style={{ color: "red" }}>KD</span> {product?.price.toFixed(3)}
          </div>
        </div>
      </div>
      {/* product modal */}

    </Fragment>

    // <Fragment>
    //   <div className={clsx("product-wrap", spaceBottomClass ,)}>
    //     <div className="product-img ">
    //       <Link to={ "/product/" + product.id}>
    //         <img
    //           className="default-img"
    //           src={product?.image}
    //           alt=""
    //         />
    //         {product.image_list.length > 1 ? (
    //           <img
    //             className="hover-img"
    //             src={product.image}
    //             alt=""
    //           />
    //         ) : (
    //           ""
    //         )}
    //       </Link>
    //       <h6 onClick={() => navigate(`/product/${product?._id}`)}>
    //         <img  style={{width : "10vw" , height : "10vh"}} src={product?.image}/>
    //       </h6>


    //       <div className="">
    //         <div className="">
    //           <button
    //             className={wishlistItem !== undefined ? "active" : ""}
    //             disabled={wishlistItem !== undefined}
    //             title={
    //               wishlistItem !== undefined
    //                 ? "Added to wishlist"
    //                 : "Add to wishlist"
    //             }
    //             onClick={() => dispatch(addToWishlist(product))}
    //           >
    //             <i className="" />
    //           </button>
    //         </div>
    //         <div className="">
    //           {


    //             product?.countInStock && product?.countInStock > 0 ? (
    //               <button
    //                 onClick={() =>  dispatch(addToCart({
    //                   ...product , qty
    //                 }))}
    //                 className={
    //                   cartItem !== undefined && cartItem.quantity > 0
    //                     ? "active"
    //                     : ""
    //                 }
    //                 disabled={cartItem !== undefined && cartItem.quantity > 0}
    //                 title={
    //                   cartItem !== undefined ? "Added to cart" : "Add to cart"
    //                 }
    //               >
    //                 {" "}
    //                 <i className="pe-7s-cart"></i>{" "}
    //                 {cartItem !== undefined && cartItem?.quantity > 0
    //                   ? "Added"
    //                   : "Add to cart"}
    //               </button>
    //             ) : (
    //               <button disabled className="active">
    //                 Out of Stock
    //               </button>
    //             )}
    //         </div>

    //       </div>
    //     </div>
    //     <div className="">

    //       <h3>
    //         <Link style={{color : "black" ,important : "true"}}to={`/product/${product?._id}`}>
    //           {product?.name}
    //         </Link>
    //       </h3>

    //       {/* <div className="product-price"> */}
    //         {/* {discountedPrice !== null ? (
    //           <Fragment>
    //             <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
    //             <span className="old">
    //               {currency.currencySymbol + finalProductPrice}
    //             </span>
    //           </Fragment>
    //         ) : ( */}
    //         {/* // <span>{currency.currencySymbol + finalProductPrice} </span>// */}

    //       {/* </div> */}
    //     </div>
    //   </div>
    //   {/* product modal */}
    //   {/* <ProductModal
    //     show={modalShow}
    //     onHide={() => setModalShow(false)}
    //     product={product}
    //     currency={currency}
    //     // discountedPrice={discountedPrice}
    //     // finalProductPrice={finalProductPrice}
    //     // finalDiscountedPrice={finalDiscountedPrice}
    //     wishlistItem={wishlistItem}
    //     compareItem={compareItem}
    //   /> */}
    // </Fragment>
  )
};

ProductGridListSingle2.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridListSingle2;