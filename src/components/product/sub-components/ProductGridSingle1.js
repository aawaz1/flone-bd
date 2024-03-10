import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Rating from "./sub-components/ProductRating";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";

import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import './product.css'

const ProductGridSingle = ({
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
  const navigate = useNavigate()

   return (
    <Fragment>
      <div className={clsx("product-wrap", spaceBottomClass)}>
        <div className="product-img">
          <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
            <img
              className="default-img"
              src={process.env.PUBLIC_URL + product.image_list[0]}
              alt={'/public/assets/img/banner/banner-1.jpg'}
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
              <Rating ratingValue={product.rating} />
            </div>
          ) : (
            ""
          )}
          <div className="product-price">
           {product?.price}
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

ProductGridSingle.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridSingle;
