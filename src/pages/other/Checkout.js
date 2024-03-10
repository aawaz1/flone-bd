// import { Fragment, useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { getDiscountPrice } from "../../helpers/product";
// import SEO from "../../components/seo";
// import LayoutOne from "../../layouts/LayoutOne";
// import { saveAddress, saveAddress1, saveShippingAddress, saveVariant } from "../../store/slices/cart-slice";
// import { useDispatch } from "react-redux";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import axios from "axios";


// const Checkout = () => {
 
//   const [addresses , setAddresses] = useState([]);
//   const [address , setAddress] = useState("")
//   const dispatch = useDispatch();
//   console.log(addresses)
//   const navigate = useNavigate();
//   // const [addresses, setAddresses] = useState(null);
//   const [selectedAddress, setSelectedAddress] = useState('');

//   const handleAddressChange = (event) => {
//     const selectedAddressId = event.target.value;
//     const selectedAddress = addresses.find(address =>address._id === selectedAddressId)
//     setSelectedAddress(selectedAddress);
//     dispatch(saveAddress1(selectedAddress));
//     // You can perform any actions here based on the selected address
//   };

// const getAllAddresses = async () => {
//     try {
//         const { data } = await axios.get(
//             `https://restapi.ansoftt.com:4321/v1/address/`
//         );
//         setAddresses(data?.data);
//         console.log(data?.data[0]._id);
        
//         console.log(data?.data);
        
       
//     } catch (error) {
//         console.log(error);
//     }
// };

// useEffect(() => {
//     getAllAddresses();
// }, []);

// // Log the addresses state whenever it changes

// //   const getAllAddresses = async () => {
// //     try {
// //         const { data } = await axios.get(
// //             `https://restapi.ansoftt.com:4321/v1/address/`
// //         );
       
// //        setAddresses(data.data[0].country)
// //         console.log(data.data[0].country)
       
// //     } catch (error) {
// //         console.log(error);
// //     }
// // };
// // useEffect(() => {
// //     getAllAddresses();
// //     console.log(addresses)
// // }, []);
 
 
  
//   let cartTotalPrice = 0;

//   let { pathname } = useLocation();
//   const cart = useSelector((state) => state.cart);


//   const {cartItems ,saveAddress , variant} = cart
//   // console.log(variant);
//   // console.log(variant)
 
//   const currency = useSelector((state) => state.currency);
  

//   // const [address, setAddress] = useState(shippingAddress ? shippingAddress.address : '');
//   // const [city, setCity] = useState(shippingAddress ? shippingAddress.city : '');
//   // const [postalCode, setPostalCode] = useState(shippingAddress ? shippingAddress.postalCode : '');
//   // const [country, setCountry] = useState(shippingAddress ? shippingAddress.country : '');
  




//   return (
//     <Fragment>
//       <SEO
//         titleTemplate="Checkout"
//         description="Checkout page of flone react minimalist eCommerce template."
//       />
//       <LayoutOne headerTop="visible">
//         {/* breadcrumb */}
//         <Breadcrumb 
//           pages={[
//             {label: "Home", path: process.env.PUBLIC_URL + "/" },
//             {label: "Checkout", path: process.env.PUBLIC_URL + pathname }
//           ]} 
//         />
//         <div className="checkout-area pt-95 pb-100">
//           <div className="container">
//             {cartItems && cartItems.length >= 1 ? (
//               <div className="row">
//                 <div className="col-lg-7">
//                   <div className="billing-info-wrap">
//                     <h3>Billing Details</h3>
                  
                    




                             



                    


// <select onChange={handleAddressChange}>
//   <option value="">Select an address</option>
//   {addresses.map((address) => (
//     <option key={address._id} value={address._id}>
//       {address.address_1}, {address.address_2}, {address.city}, {address.country} , {address.governates.value}
//     </option>
//   ))}
// </select>

                    

                   
                    
//                   </div>
//                 </div>
             
                

//                 <div className="col-lg-5">
//                   <div className="your-order-area">
                 
                    
//                     <h3>Your order</h3>
//                     <div className="your-order-wrap gray-bg-4">
//                       <div className="your-order-product-info">
//                         <div className="your-order-top">
//                           <ul>
//                             <li>Product</li>
//                             <li>Total</li>
//                           </ul>
//                         </div>
//                         <div className="your-order-middle">
//                           <ul>
//                             {cartItems.map((cartItem, key) => {
//                               const discountedPrice = getDiscountPrice(
//                                 cartItem.price,
//                                 cartItem.discount
//                               );
//                               const finalProductPrice = (
//                                 cartItem.price * currency.currencyRate
//                               ).toFixed(2);
//                               const finalDiscountedPrice = (
//                                 discountedPrice * currency.currencyRate
//                               ).toFixed(2);

//                               discountedPrice != null
//                                 ? (cartTotalPrice +=
//                                     finalDiscountedPrice * cartItem.quantity)
//                                 : (cartTotalPrice +=
//                                     finalProductPrice * cartItem.quantity);
//                               return (
//                                 <li key={key}>
//                                   <span className="order-middle-left">
//                                     {cartItem.name} X {cartItem.quantity}
//                                   </span>{" "}
//                                   <span className="order-price">
//                                     {discountedPrice !== null
//                                       ? currency.currencySymbol +
//                                         (
//                                           finalDiscountedPrice *
//                                           cartItem.quantity
//                                         ).toFixed(2)
//                                       : currency.currencySymbol +
//                                         (
//                                           finalProductPrice * cartItem.quantity
//                                         ).toFixed(2)}
//                                   </span>
//                                 </li>
//                               );
//                             })}
//                           </ul>
//                         </div>
//                         <div className="your-order-bottom">
//                           <ul>
//                             <li className="your-order-shipping">Shipping</li>
//                             <li>Free shipping</li>
//                           </ul>
//                         </div>
//                         <div className="your-order-total">
//                           <ul>
//                             <li className="order-total">Total</li>
//                             <li>{cart?.Price}
//                              KD {
//                                 cartTotalPrice.toFixed(2)}
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                       <div className="payment-method"></div>
//                     </div>
//                     <div style={{ border: "yellow",important : "true",height : "4vh"  , width :"6vw"}} className=" mt-25">
//                       {/* <Link to={'/payment'} onClick={handleSaveShippingAddress}>Checkout</Link> */}
//                       <button className="btn btn-warning" onClick={() => { navigate("/payment") }}><h4>Checkout</h4></button>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="item-empty-area text-center">
//                     <div className="item-empty-area__icon mb-30">
//                       <i className="pe-7s-cash"></i>
//                     </div>
//                     <div className="item-empty-area__text">
//                       No items found in cart to checkout <br />{" "}
//                       <Link to={process.env.PUBLIC_URL + "/home"}>
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

// export default Checkout;
import { Fragment, useState  ,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { saveAddress, saveAddress1, saveShippingAddress, saveVariant } from "../../store/slices/cart-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Checkout = () => {
  const [addresses , setAddresses] = useState([]);
    const [address , setAddress] = useState("")
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // const [addresses, setAddresses] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleAddressChange = (event) => {
    const selectedAddressId = event.target.value;
    const selectedAddress = addresses.find(address =>address._id === selectedAddressId)
    setSelectedAddress(selectedAddress);
    dispatch(saveAddress1(selectedAddress));
    // You can perform any actions here based on the selected address
  };

const getAllAddresses = async () => {
    try {
        const { data } = await axios.get(
            `https://restapi.ansoftt.com:4321/v1/address/`
        );
        setAddresses(data?.data);
        console.log(data?.data[0]._id);
        
        console.log(data?.data);
        
       
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getAllAddresses();
}, []);
  let cartTotalPrice = 0;

  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout"
        description="Checkout page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
       
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Billing Details</h3>
                    <select onChange={handleAddressChange}>
  <option value="">Select an address</option>
   {addresses.map((address) => (
    <option key={address._id} value={address._id}>
      {address.address_1}, {address.address_2}, {address.city}, {address.country} , {address.governates.value}
    </option>
  ))}
 </select>

                   
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Product</li>
                            <li>Total</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice = (
                                cartItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);

                              discountedPrice != null
                                ? (cartTotalPrice +=
                                    finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice +=
                                    finalProductPrice * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                  KD {
                                cartTotalPrice.toFixed(2)}
                                   
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Govenrates Charges</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              KD{
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                          
                        </div>
                       {/* <div className="your-order-total">
                       <ul>
                            <li className="order-total">Payment Method</li>
                            <li>
                              Razorpay
                            </li>
                          </ul>
                        </div> */}
                      </div>
                      <div className="payment-method"></div>
                    </div>
                    <div className="place-order mt-25">
                      <button className="btn-hover" onClick={() => { navigate("/placeorder") }}>Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
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

export default Checkout;