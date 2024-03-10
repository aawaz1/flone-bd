import { Link, useNavigate, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card, Table } from 'react-bootstrap';


import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL, IMAGE_URL } from '../../constants';
import { useEffect, useState } from 'react';
import LayoutOne from '../../layouts/LayoutOne';
import './order.css'


const SingleOrderScreen = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);
    const { id } = useParams()



    const { variant, shippingAddress, saveAddress } = cart
    const [order, setOrders] = useState([]);

    const getOrder = async () => {
        try {
            const { data } = await axios.get(
                `https://restapi.ansoftt.com:4321/v1/order/${id}`
            );
            setOrders(data?.data);

            console.log(data?.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOrder()
    }, [])
    return (
        <>

            <LayoutOne>

                <Row style={{ overflow : "hidden",marginLeft: "12vw", marginTop: "4vh", marginBottom: "15vh", marginRight: "4vw" }}>
                    <Col md={8}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2 style={{ color: "goldenrod" }}>Shipping Address</h2>

                                <p>
                                    <strong>
                                        Email :
                                    </strong> {
                                        userInfo.data.auth.email
                                    }
                                </p>
                                <p>
                                    <strong>
                                        Address :
                                    </strong>
                                    {saveAddress.address_2},
                                    {saveAddress.address_1},
                                    {saveAddress.postal_code},
                                    {saveAddress.phone}
                                </p>
                                {/* {order.isDelivered ? (
                            <Message varaint='success'>Delivered at {order.deliveredAt} </Message>
                        ) : (<Message variant='danger'> Not Delivered</Message>)} */}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h2 style={{color : "goldenrod"}}>Payment Method</h2>
                                <p>
                                    <strong>
                                      Razorpay
                                    </strong> 



                                </p>
                            </ListGroup.Item>
                            <ListGroup.Item >
                                <h2>Order Items</h2>
                                {
                                    order?.ordered_items?.map(item => {
                                        return (
                                            <ListGroup.Item style={{color :"goldenrod"}} >
                                            <Row>
        
                                                <Col md={1}
                                                ><Image src={ IMAGE_URL + item.product?.image_list[0]} alt={item?.product?.name}
                                                    fluid
                                                    rounded /></Col>
        
                                                <Col>
                                                    <Link to={`/product/${item?.product?._id}`}>{item?.product?.price}
                                                    </Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item?.qty} x KD{item?.price} = KD{item?.qty * item?.price}
                                                </Col>
                                            </Row>
        
        
                                        </ListGroup.Item>
        

                                        )
                                    })
                                }

                              


                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                    <Col md={4}><Card>
                        <ListGroup>
                            <ListGroup.Item>
                                <h2 style={{ color: "goldenrod" }}>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col><strong>Total Items</strong></Col>
                                    <Col style={{marginLeft : "4vw"}}><strong>{order?.total_qty}</strong></Col>
                                </Row>

                                <Row>
                                    <Col><strong>Total Price</strong></Col>
                                    <Col><strong><span style={{color : "goldenrod"}}>KD</span>{order?.total_price?.toFixed(3)}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            {/* PAY ORDER PALCEHOLDER */}


                            {/* {
                    userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                        <ListGroup.Item>
                            <Button type='button' className='btn btn-block'
                            onClick={() => getAlls()}>
                                Mark as Delivered

                            </Button>
                        </ListGroup.Item>
                    )
                } */}


                        </ListGroup>
                    </Card></Col>
                </Row>
            </LayoutOne>
        </>
    )
}



export default SingleOrderScreen;