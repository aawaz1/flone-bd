import { Link, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card, Table } from 'react-bootstrap';


import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { useEffect, useState } from 'react';
import LayoutOne from '../../layouts/LayoutOne';
import './order.css'

const OrderScreen = () => {
    const cart = useSelector((state) => state.cart);



    const { variant, shippingAddress, saveAddress } = cart


    // const [deliverOrder , {isLoading : loadingDeliver} ] = useDeliverOrderMutation();
    // const {data : order,refetch, isLoading,error} = useGetOrderDetailsQuery(orderId);
    // console.log(order);
    const { userInfo } = useSelector((state) => state.auth);
  

    const [order, setProducts] = useState([]);

    const getAllOrders = async () => {
        try {
            const { data } = await axios.get(
                'https://restapi.ansoftt.com:4321/v1/order'
            );
            setProducts(data.data);

           
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllOrders()
    } ,[])
 

    return (
        <LayoutOne>
        <Col className='order' md={9}>
        <h2 style={{color :"goldenrod"}}>My Orders</h2>
        
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
               
                <th>Delivered</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {order.map((order)=> (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>
                    {order?.created_at.substring(0,10)}
                  </td>
                  <td>{order?.total_price}</td>
                 
                  <td>
                   hello 
                   {/* {order.isDelivered ? (order.deliveredAt.substring(0,10)) : ( <FaTimes style={{color : "red"}} />) } */}
                  </td>
                  <td>
                    <Link to={`/order/${order._id}`}>
                    <button className="btn btn-warning" 
                    variant='light'
                    >
                      Details

                      </button></Link>
                  </td>

                </tr>
              ))}
            </tbody>
          </Table>
        
       
       </Col>
       </LayoutOne>
        // <>

        //     <LayoutOne>

        //         <Row>
        //             <Col md={8}>
        //                 <ListGroup variant='flush'>
        //                     <ListGroup.Item>
        //                         <h2>shipping</h2>

        //                         <p>
        //                             <strong>
        //                                 Email :
        //                             </strong> {
        //                                 userInfo.data.auth.email
        //                             }
        //                         </p>
        //                         <p>
        //                             <strong>
        //                                 Address :
        //                             </strong>
        //                             {saveAddress.address_2}
        //                             {saveAddress.address_1}
        //                             {saveAddress.postal_code}
        //                         </p>
        //                         {/* {order.isDelivered ? (
        //                     <Message varaint='success'>Delivered at {order.deliveredAt} </Message>
        //                 ) : (<Message variant='danger'> Not Delivered</Message>)} */}
        //                     </ListGroup.Item>
        //                     <ListGroup.Item>
        //                         <h2>Payment Method</h2>
        //                         <p>
        //                             <strong>
        //                                 Method  :
        //                             </strong> Razorpay{
        //                                 order.paymentMethod
        //                             }



        //                         </p>
        //                     </ListGroup.Item>
        //                     <ListGroup.Item>
        //                         <h2>Order Items</h2>
        //                         {order?.map((item, index) => (
        //                             <ListGroup.Item key={index}>
        //                                 <Row>

        //                                     <Col md={1}
        //                                     ><Image src={item.ordered_items?.product?.image_list[0]} alt={item.ordered_items[0]?.product?.name}
        //                                         fluid
        //                                         rounded /></Col>

        //                                     <Col>
        //                                         <Link to={`/product/${item?.ordered_items[0]?.product._id}`}>{item.ordered_items[0]?.product?.name}
        //                                         </Link>
        //                                     </Col>
        //                                     <Col md={4}>
        //                                         {item?.ordered_items[0]?.qty} x KD{item.ordered_items[0]?.price} = KD{item.ordered_items[0]?.qty * item.ordered_items[0]?.price}
        //                                     </Col>
        //                                 </Row>


        //                             </ListGroup.Item>


        //                         ))}
        //                     </ListGroup.Item>

        //                 </ListGroup>
        //             </Col>
        //             <Col md={4}><Card>
        //                 <ListGroup>
        //                     {/* <ListGroup.Item>
        //             <h2>Order Summary</h2>
        //         </ListGroup.Item>
        //         <ListGroup.Item>
        //             <Row>
        //                 <Col>Items</Col>
        //                 <Col>{order?.total_qty}</Col>
        //             </Row>
                    
        //             <Row>
        //                 <Col>Total</Col>
        //                 <Col>{order?.total_price}</Col>
        //             </Row>
        //         </ListGroup.Item> */}
        //                     {/* PAY ORDER PALCEHOLDER */}

        //                     {/*                
        //         {
        //             userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
        //                 <ListGroup.Item>
        //                     <Button type='button' className='btn btn-block'
        //                     onClick={() => getAlls()}>
        //                         Mark as Delivered

        //                     </Button>
        //                 </ListGroup.Item>
        //             )
        //         } */}


        //                 </ListGroup>
        //             </Card></Col>
        //         </Row>
        //     </LayoutOne>
        // </>
        
    )
    

}

export default OrderScreen;