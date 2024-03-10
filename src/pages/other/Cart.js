// import { Fragment, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import SEO from "../../components/seo";
// import './cart.css'
// import { getDiscountPrice } from "../../helpers/product";
// import LayoutOne from "../../layouts/LayoutOne";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import { addToCart, decreaseQuantity, deleteFromCart, deleteAllFromCart, removeFromCart, clearCartItems } from "../../store/slices/cart-slice";
// import { cartItemStock } from "../../helpers/product";

// const Cart = () => {
//   const token = localStorage.getItem("access_token");
//   console.log(token)

//   const [quantityCount] = useState(1);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   let { pathname } = useLocation();

//   const currency = useSelector((state) => state.currency);
//   const cart = useSelector((state) => state.cart);
//   console.log(cart);

//   const { cartItems } = cart;
//   console.log(cart)
// console.log(cartItems)


//   return (
//     <Fragment>
//       <SEO
//         titleTemplate="Cart"
//         description="Cart page of flone react minimalist eCommerce template."
//       />

//       <LayoutOne headerTop="visible">
//         {/* breadcrumb */}
//         <Breadcrumb 
//           pages={[
//             {label: "Home", path: process.env.PUBLIC_URL + "/" },
//             {label: "Cart", path: process.env.PUBLIC_URL + pathname }
//           ]} 
//         />
//         <div className="cart-main-area pt-90 pb-100">
//           <div className="container">
//             {
//             cartItems && cartItems.length >= 1 ? (
//               <Fragment>
//                 <h3 className="cart-page-title">Your cart items</h3>
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="table-content table-responsive cart-table-content">
//                       <table>
//                         <thead>
//                           <tr>
//                             <th>Image</th>
//                             <th>Product Name</th>
//                             <th>Unit Price</th>
//                             <th>Qty</th>
//                             <th>Subtotal</th>
//                             <th>action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//   {cartItems.map((cartItem) => 
//   (
//     <tr key={cartItem.cartItemId}>
//       <td><img style={{width: "80px"}} src={cartItem?.data?.image_list[0]} alt={cartItem?.name} /></td>
//       <td>{cartItem?.name}</td>
//       <td>KD{cartItem?.price.toFixed(2)}</td>

//       <td>{cartItem?.quantity}</td>
//       <td>KD{(cartItem?.price * cartItem?.quantity).toFixed(2)}</td>
//       <td>
//         <button onClick={() => dispatch(deleteFromCart(cartItem?.cartItemId))}>
//           Remove
//         </button>
//       </td>
//     </tr>
//   ))}
// </tbody>

//                         {/* <tbody>
//                           {cartItems.map((cartItem) => {
//                             return (<>
//                               <td>{cartItem.image}</td>
//                               <td>{cartItem.name}</td>
//                               <td>{cartItem.price}</td>
//                               <td>{cartItem.quantity}</td>
//                               <td>{<span>
//             &#8377;
//             {cartItems
//               .reduce((acc, item) => acc + cartItem.quantity * cartItem.price, 0)
//               .toFixed(2)}
//             </span>}</td>
//                               </>

//                             )
//                           }  )}


//                         </tbody> */}
//                         {/* <tbody>
//                           {cartItems.map((cartItem ,key) => {







//                             return (
//                               <tr key={key}>
//                                 <td className="product-thumbnail">
//                                   <Link
//                                     to={
//                                       process.env.PUBLIC_URL +
//                                       "/product/" +
//                                       cartItem.id
//                                     }
//                                   >
//                                     <img
//                                       className="img-fluid"
//                                       src={
//                                         process.env.PUBLIC_URL +
//                                         cartItem.image[0]
//                                       }
//                                       alt=""
//                                     />
//                                   </Link>
//                                 </td>

//                                 <td className="product-name">
//                                   <Link
//                                     to={
//                                       process.env.PUBLIC_URL +
//                                       "/product/" +
//                                       cartItem.id
//                                     }
//                                   >
//                                     {cartItem.name}
//                                   </Link>
//                                   {cartItem.selectedProductColor &&
//                                   cartItem.selectedProductSize ? (
//                                     <div className="cart-item-variation">
//                                       <span>
//                                         Color: {cartItem.selectedProductColor}
//                                       </span>
//                                       <span>
//                                         Size: {cartItem.selectedProductSize}
//                                       </span>
//                                     </div>
//                                   ) : (
//                                     ""
//                                   )}
//                                 </td>

//                                 <td className="product-price-cart">

//                                 </td>

//                                 <td className="product-quantity">
//                                   <div className="cart-plus-minus">
//                                     <button
//                                       className="dec qtybutton"
//                                       onClick={() =>
//                                         dispatch(decreaseQuantity(cartItem))
//                                       }
//                                     >
//                                       -
//                                     </button>
//                                     <input
//                                       className="cart-plus-minus-box"
//                                       type="text"
//                                       value={cartItem.quantity}
//                                       readOnly
//                                     />
//                                     <button
//                                       className="inc qtybutton"
//                                       onClick={() =>
//                                         dispatch(addToCart({
//                                           ...cartItem,
//                                           quantity: quantityCount
//                                         }))
//                                       }
//                                       disabled={
//                                         cartItem !== undefined &&
//                                         cartItem.quantity &&
//                                         cartItem.quantity >=
//                                           cartItemStock(
//                                             cartItem,
//                                             cartItem.selectedProductColor,
//                                             cartItem.selectedProductSize
//                                           )
//                                       }
//                                     >
//                                       +
//                                     </button>
//                                   </div>
//                                 </td>
//                                 <td className="product-subtotal">

//                                 </td>

//                                 <td className="product-remove">
//                                   <button
//                                     onClick={() =>
//                                       dispatch(deleteFromCart(cartItem.cartItemId))
//                                     }
//                                   >
//                                     <i className="fa fa-times"></i>
//                                   </button>
//                                 </td>
//                               </tr>
//                             );
//                           })}
//                         </tbody> */}
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div className="row">
//                   <div className="col-lg-12">
//                     <div className="cart-shiping-update-wrapper">
//                        <div className="cartlear">
//                         <button onClick={() => dispatch(deleteAllFromCart())}>
//                           Clear Shopping Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}

//                 <div>
//                 <button className="cart" onClick={() => dispatch(deleteAllFromCart())}>Clear Shopping Cart</button>

//                 </div>

//                  <div>
//                  <div className="row">




//                   <div className="col-lg-4 col-md-12">
//                     <div className="grand-totall">
//                       <div className="title-wrap">
//                         <h4 className="cart-bottom-title section-bg-gary-cart">
//                           Cart Total
//                         </h4>
//                       </div>
//                       <h5>
//                         Total products{" "}
//                         <span>
//                         {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
//                         </span>
//                       </h5>

//                       <h4 className="grand-totall-title">
//                         Grand Total{" "}
//                         <span>
//                           KD {cartItems.reduce(
//   (acc, item) => acc + item?.price * item?.quantity,
//   0
// ).toFixed(2)}
//                         </span>
//                       </h4>
//                       <Link to={process.env.PUBLIC_URL + "/checkout"}>
//                         Proceed to Checkout
//                       </Link>
//                     </div>
//                   </div>
//                 </div>

//                   {/* <div className="col-lg-4 mt-4 col-md-12">
//                     <div className="grand-totall">
//                       <div className="title-wrap">
//                         <h4 className="cart-bottom-title section-bg-gary-cart">
//                           {cartItems?.data?.name}
//                         </h4>
//                       </div>
//                       <h5>
//                         Total products{" "}
//                         <span>
//                         <span>
//       {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
//     </span>
//                         </span>
//                       </h5>

//                       <h4 className="">
//                         Grand Total{" "}
//                         <span>
//                         KD
// {cartItems.reduce(
//   (acc, item) => acc + item?.price * item?.quantity,
//   0
// ).toFixed(2)}
//     </span>
//                       </h4>
//                     <button className="cart" onClick={() => navigate("/checkout")}>CLICK FOR PAYMENT</button>
//                     </div>
//                   </div> */}
//                 </div>
//               </Fragment>
//             ) 
//             : (
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="item-empty-area text-center">
//                     <div className="item-empty-area__icon mb-30">
//                       <i className="pe-7s-cart"></i>
//                     </div>
//                     <div className="item-empty-area__text">
//                       No items found in cart <br />{" "}
//                       <Link to={"/home"}>
//                         Shop Now
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </LayoutOne>
//     </Fragment>
//   );
// };

// export default Cart;
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { addToCart, decreaseQuantity, deleteFromCart, deleteAllFromCart } from "../../store/slices/cart-slice";
import { cartItemStock } from "../../helpers/product";
import { useToast } from "react-toastify";
import { IMAGE_URL } from "../../constants";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

 
 // Function to handle incrementing quantity
//  const handleIncrement = (cartItem) => {
 
//     dispatch(addToCart({ ...cartItems, quantity: cartItems.quantity + 1 }));
  
// };

// Function to handle decrementing quantity
const handleDecrement = (cartItem) => {
 
    dispatch(decreaseQuantity(cartItem));
  
};
  let cartTotalPrice = 0;


  const dispatch = useDispatch();




  const handleIncrement = (cartItem) => {
    dispatch(addToCart({ product : cartItem, qty:1 }));
  };


  return (
    <Fragment>
      <SEO
        titleTemplate="Cart"
        description="Cart page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
       
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Your cart items</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((cartItem) =>
                          (
                            <tr key={cartItem.cartItemId}>
                              <td><img style={{ width: "80px" }} src={ IMAGE_URL + cartItem?.image_list[0]} alt={cartItem?.name} /></td>
                              <td>{cartItem?.name}</td>
                              <td>KD{cartItem?.price.toFixed(3)}</td>

                              <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    <button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        dispatch(decreaseQuantity(cartItem))
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      className="cart-plus-minus-box"
                                      type="text"
                                      value={cartItem.quantity}
                                      readOnly
                                    />
                                    <button
                                      className="inc qtybutton"
                                      onClick={() => handleIncrement(cartItem)} 
                                     
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                              <td>KD{(cartItem?.price * cartItem?.quantity).toFixed(3)}</td>
                              <td>
                                <button onClick={() => dispatch(deleteFromCart(cartItem?.cartItemId))}>
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>

                        {/* <tbody>
                          {cartItems.map((cartItem) => {
                            return (<>
                              <td>{cartItem.image}</td>
                              <td>{cartItem.name}</td>
                              <td>{cartItem.price}</td>
                              <td>{cartItem.quantity}</td>
                              <td>{<span>
            &#8377;
            {cartItems
              .reduce((acc, item) => acc + cartItem.quantity * cartItem.price, 0)
              .toFixed(2)}
            </span>}</td>
                              </>

                            )
                          }  )}
                          

                        </tbody> */}
                        {/* <tbody>
                          {cartItems.map((cartItem ,key) => {
                            
                          
                              
                            
                          

                           
                            return (
                              <tr key={key}>
                                <td className="product-thumbnail">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      cartItem.id
                                    }
                                  >
                                    <img
                                      className="img-fluid"
                                      src={
                                        process.env.PUBLIC_URL +
                                        cartItem.image[0]
                                      }
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product/" +
                                      cartItem.id
                                    }
                                  >
                                    {cartItem.name}
                                  </Link>
                                  {cartItem.selectedProductColor &&
                                  cartItem.selectedProductSize ? (
                                    <div className="cart-item-variation">
                                      <span>
                                        Color: {cartItem.selectedProductColor}
                                      </span>
                                      <span>
                                        Size: {cartItem.selectedProductSize}
                                      </span>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </td>

                                <td className="product-price-cart">
                                 
                                </td>

                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    <button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        dispatch(decreaseQuantity(cartItem))
                                      }
                                    >
                                      -
                                    </button>
                                    <input
                                      className="cart-plus-minus-box"
                                      type="text"
                                      value={cartItem.quantity}
                                      readOnly
                                    />
                                    <button
                                      className="inc qtybutton"
                                      onClick={() =>
                                        dispatch(addToCart({
                                          ...cartItem,
                                          quantity: quantityCount
                                        }))
                                      }
                                      disabled={
                                        cartItem !== undefined &&
                                        cartItem.quantity &&
                                        cartItem.quantity >=
                                          cartItemStock(
                                            cartItem,
                                            cartItem.selectedProductColor,
                                            cartItem.selectedProductSize
                                          )
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td className="product-subtotal">
                                
                                </td>

                                <td className="product-remove">
                                  <button
                                    onClick={() =>
                                      dispatch(deleteFromCart(cartItem.cartItemId))
                                    }
                                  >
                                    <i className="fa fa-times"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody> */}
                      </table>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">

                      <div className="cart-clear">
                        <button onClick={() => dispatch(deleteAllFromCart())}>
                          Clear Shopping Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">




                    <div className="col-lg-4 col-md-12">
                    <div className="grand-totall">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">
                          Cart Total
                        </h4>
                      </div>
                      <h5>
                        Total products{" "}
                        <span>
                        {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                        </span>
                      </h5>

                      <h4 className="grand-totall-title">
                        Grand Total{" "}
                        <span>
                          KD {cartItems.reduce(
  (acc, item) => acc + item?.price * item?.quantity,
  0
).toFixed(3)}
                        </span>
                      </h4>
                      <Link to={process.env.PUBLIC_URL + "/checkout"}>
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cart"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart <br />{" "}
                      <Link to={"/"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Cart;