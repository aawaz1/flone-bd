import { Fragment, useEffect, useState } from "react"; 
import { Navigate, useLocation, useParams } from "react-router-dom"; 
import Accordion from "react-bootstrap/Accordion";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useProfileMutation } from "../../store/slices/usersApiSlice";
import { setCredentials } from "../../store/slices/auth-slice";
import axios from 'axios'


const MyAccount = () => {
  const {id} = useParams();
  const idString = id.toString();
  let { pathname } = useLocation();
  const [user_name,setName] = useState("");
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
 const dispatch = useDispatch();
 const {userInfo} = useSelector((state) => state.auth );

 const updatedData = {
  user_name: user_name,
  email: email,
  password: password,
  phone: phone
};
 useEffect(() => {

  if(userInfo){
      setName(userInfo.name);
      setEmail(userInfo.email);
     

  }else{

  }
},[userInfo.name , userInfo.email]);





const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.patch(
      `https://restapi.ansoftt.com:4321/v1/auth/${idString}` , updatedData
    );
    console.log(data);
    dispatch(setCredentials({...updatedData, }));
    // Handle data or set state as needed
  } catch (error) {
    console.log(error);
  }
};
console.log(setCredentials({...updatedData}))

  
 
 
  
  

  return (
  userInfo ? (
    <Fragment>
    <SEO
      titleTemplate="My Account"
      description="My Account page of flone react minimalist eCommerce template."
    />
    <LayoutOne headerTop="visible">
      {/* breadcrumb */}
     
      
      <div className="myaccount-area pb-80 pt-100">
        <div className="container">
          <div className="row">
            <div className="ms-auto me-auto col-lg-9">
              <div className="myaccount-wrapper">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="single-my-account mb-20">
                    <Accordion.Header className="panel-heading">
                      <span></span> Edit  Profile{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4> Account Information</h4>
                            <h5> Personal Details</h5>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>User Name</label>
                                <input type="text" value={user_name} onChange={(e) => setName(e.target.value)} />
                              </div>
                            </div>
                           
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Email Address</label>
                                <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Phone</label>
                                <input type="email" value={phone}  onChange={(e) => setPhone(e.target.value)}/>
                              </div>
                            </div>

                            <div >
                           
                              <div className="">
                               
                                   <button className="btn btn-warning" onClick={submitHandler}type="submit">Continue</button>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                            <div className="myaccount-info-wrapper">
                         
                          
                          
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                              
                            </div>
                          </div>
                        </div>
                          
                            </div>
                           
                          </div>
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                             
                            </div>
                          </div>
                        </div>
                        <div className="myaccount-info-wrapper">
                      
                          <div className="">
                            <div >
                            
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                              
                            </div>
                          </div>
                      
                    </Accordion.Body>
                  </Accordion.Item>


            
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutOne>
  </Fragment>

  ) : (<>
  <h4>
    please login to view this page</h4> <button onClick={Navigate("/login-register")}>login</button> </>)
  );
};

export default MyAccount;
