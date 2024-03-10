import { useState ,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import LayoutOne from "../../layouts/LayoutOne";


const PaymentScreen = () => {
    // const [paymentMethod,setPaymentMethod] = useState("RazorPay");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const {shippingAddress}= cart;

    useEffect(() => {
        if(!shippingAddress){
            navigate("/shipping");
        }

    },[shippingAddress, navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(savePaymentAddress(paymentMethod));
        navigate("/placeorder");

    };

  return (
    // <FormContainer>
        // <CheckoutSteps step1 step2 step3 step4/>
        <LayoutOne>
        <div style={{marginBottom : "40vh" , marginTop : "2vh"}} className="container">
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as='legend' >Select Method</Form.Label>
                <Col>
                <Form.Check
                type='radio'
                className="my-2"
                label='Razorpay'
                id="Razorpay"
                name="paymentmethod"
                value='Razorpay'
                checked
                // onChange={(e) => setPaymentMethod(e.target.value)}
                >
                    </Form.Check></Col>

            </Form.Group>
            <Button type="submit"
            variant="primary">
                Continue
            </Button>
        </Form>
        </div >
        </LayoutOne>
  
  )
}

export default PaymentScreen