import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { setCredentials } from "../../store/slices/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation, useRegisterMutation } from "../../store/slices/usersApiSlice";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import cogoToast from "cogo-toast";

const LoginRegister = () => {
  const {userInfo} = useSelector((state) => state.auth);
  console.log(userInfo)
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  let { pathname } = useLocation();
  const [activeKey, setActiveKey] = useState('login');
  const [user_name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("us");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [register, {isLoading}] = useRegisterMutation();
  const [login , {isLoad}] = useLoginMutation();


  const {search} = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/'


  // Function to handle click and toggle between login and register
  const handleTabClick = (key) => {
    if (key === 'register') {
      setActiveKey('login');
    } else {
      setActiveKey(key);
    }
  };
  useEffect(() => {
    if(userInfo){
        navigate(redirect);
    }

}, []);
 const submitHandler = async (e) => {
e.preventDefault();
if(password !== confirmpassword){
    cogoToast.error("Password doesnot match")
}
try {
    const res = await register({user_name,email,password, phone}).unwrap();
    dispatch(setCredentials({...res, }));
    navigate(redirect);
} catch (err) {
  cogoToast.error("Please Fill All The  Inputs", {position: "bottom-left"});
   
    
    
}

}

const loginHandler = async(e) => {
  e.preventDefault();
  try {
    const res = await login({email , password}).unwrap();
    dispatch(setCredentials({...res, }));
    navigate(redirect);
    
  } catch (err) {
    cogoToast.error("Incorrect Email or Password", {position: "bottom-left"});
    
  }

}


  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
      
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  {/* <input type="checkbox" /> */}
                                  {/* <label className="ml-10">Remember me</label> */}
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="submit" onClick={loginHandler}>
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={user_name}
                                onChange={(e) => setUsername(e.target.value)}
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                               <input
                                type="password"
                                name="user-password"
                                placeholder="Confirm Password"
                                value={confirmpassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                

                              />
                                <div className="mb-4">
                                <PhoneInput
      country={country}
      placeholder="Phone"
      
      onChange={(value) => {setPhone(value)}}
      countryCodeEditable={false}
    />
                                </div>
                              <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <div className="button-box">
                                <button type="submit"  onClick={submitHandler}>
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;
