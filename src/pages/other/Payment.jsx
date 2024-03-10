

import { Fragment, useState  ,useEffect} from "react";
import { Button, Row,Col,ListGroup,Image,Card } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { deleteAllFromCart, saveAddress, saveAddress1, saveShippingAddress, saveVariant } from "../../store/slices/cart-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCreateOrderMutation } from "../../store/slices/order-slice";
import { IMAGE_URL } from "../../constants";

const Checkout = () => {
    const {userInfo} = useSelector(state => state.auth);
    console.log(userInfo.data.auth._id);
    const [createOrder] = useCreateOrderMutation()
      

  
      const calculateSum = () => {
    const sum = governateValue + totalCartPrice
    return sum;
  };
 

  const cart = useSelector((state) => state.cart);
      
     
  const {variant , shippingAddress ,saveAddress} = cart
  const governateValue = parseFloat(saveAddress?.governates?.value || 0);
   // Calculate the total price of items in the cart
   const totalCartPrice = cart?.cartItems?.reduce(
    (acc, item) => acc + item?.price * item?.quantity,
    0
  );
  console.log(saveAddress)
  const addressId = saveAddress._id;
  console.log(addressId)
  const [addresses , setAddresses] = useState([]);
    const [address , setAddress] = useState("")
  const dispatch = useDispatch();
  console.log(addresses)
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
  const { cartItems } = useSelector((state) => state.cart);


  const total_qty = parseInt(cartItems[0]?.quantity);
  const governate_charges = parseInt(saveAddress?.governates?.value);
 

  


  const placeOrderHandler = async() => {
    console.log(cart);
    
    try {
        const res = await createOrder({
           
            address : cart.saveAddress,
            
            user_id : userInfo.data.auth._id,
            price : 10,
            quantity :cartItems[0].quantity,
           total_qty : total_qty,
           points_used : "2",
           ordered_items:[

           ],
            total_products_cost : "4",
            total_price : calculateSum(),
         
         
            governate_charges : governate_charges ,
            
         
           
            // totalPrice : ,

        }).unwrap();
      
        navigate(`/order`);
        dispatch(deleteAllFromCart(cartItems))
        
       
       
       
        
    } catch (error) {
      console.log(error)
      
        
    }

}
  let cartTotalPrice = 0;

  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  

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
           
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    
                    <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>shipping</h3>
                        <p>
                            <strong>Address Line 1  : </strong>
                            {saveAddress.address_1}
                            {/* {cart.shippingAddress.address}, {cart.shippingAddress.city}{''}
                            {cart.shippingAddress.postalCode},{''}
                            {cart.shippingAddress.country} */}
                        </p>
                        <p>
                            <strong>Address Line 2  : </strong>
                            {saveAddress.address_2}
                            {/* {cart.shippingAddress.address}, {cart.shippingAddress.city}{''}
                            {cart.shippingAddress.postalCode},{''}
                            {cart.shippingAddress.country} */}
                        </p>
                        <p>
                            <strong>Postal Code  : </strong>
                            {saveAddress.postal_code}
                      
                        </p>

                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>Payment Method</h3>
                        <strong>Method :</strong>
                        {cart.paymentMethod}
                        Razorpay

                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        
                        {cart.cartItems.length === 0 ? (<h6>Your Cart is Empty</h6>) : (<ListGroup variant='flush'>{
                            cart.cartItems.map((item,index) =>(
                                <ListGroup.Item key={index}>
                                    <Row>
                                       <Col md={1}>
                                        <Image 
                                        src={ IMAGE_URL + item?.image_list[0]}
                                        alt={item.name}
                                        fluid
                                        rounded/></Col> 
                                       
                                        <Col><h4>{item.name}</h4></Col>
                                        <Col md={4}>
                                         
                                            {item.quantity} x {item?.price} = {cart.cartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
).toFixed(2)}
                                       </Col> 
                                    </Row>

                                </ListGroup.Item>
                            ))
                        }</ListGroup>)}

                    </ListGroup.Item>
                </ListGroup>

                   
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Items :
                            </li>
                            <li>{cart.cartItems[0]?.quantity}</li>
                          </ul>
                        </div>
                        <div className="your-order-top">
                          <ul>
                            <li> Items Price :
                            </li>
                            <li>KD {cart.cartItems.reduce(
  (acc, item) => acc   + item.price* item.quantity,
  0
).toFixed(1)}</li>
                          </ul>
                        </div>
                        <div className="your-order-top">
                          <ul>
                            <li>Shipping Cost :
                            </li>
                            <li> KD {saveAddress?.governates?.value}.000</li>
                          </ul>
                        </div>
                        <div className="your-order-top">
                          <ul>
                            <li>Total Price :
                            </li>
                            <li> KD {calculateSum().toFixed(3)}</li>
                          </ul>
                        </div>
                        
                       
                        {/* <div className="your-order-middle">
                          <ul>
                          
                            <li className="your-order-shipping">Items Price </li>
                            <li>KD {cart.cartItems.reduce(
  (acc, item) => acc   + item.data.price* item.quantity,
  0
).toFixed(2)}</li>
                          
                         
                            
                                 
                                 
                                
                              
                          </ul>
                        </div> */}
                        
                        {/* <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Items Price </li>
                            <li>KD {cart.cartItems.reduce(
  (acc, item) => acc   + item.data.price* item.quantity,
  0
).toFixed(2)}</li>
                          </ul>
                        </div> */}
                        {/* <div className="your-order-total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              {currency.currencySymbol +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                        </div> */}
                      </div>
                      <div className="payment-method"></div>
                    </div>
                    <div className="place-order mt-25">
                      <button className="btn-hover" onClick={placeOrderHandler}>Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Checkout;