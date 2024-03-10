import PropTypes from "prop-types";
import { Link, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import MenuCart from "./sub-components/MenuCart";
import { useLogoutMutation } from "../../store/slices/usersApiSlice";
import { logout } from "../../store/slices/auth-slice";
import { useState } from "react";

const IconGroup = ({ iconWhiteClass }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [logoutApiCall] = useLogoutMutation();
  // const logoutHandler = async () => {
  //   try {

  //     dispatch(logout())
  //     navigate("/login-register");
      
    


  //   } catch (error) {
  //     console.log(error);

  //   }

  // }
  // const history = u();

  const logoutHandler = async () => {
    try {
     
      dispatch(logout());

    
      // navigate('/login-register');
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };
  const [keyword ,setKeyword] = useState("");
 
  const  submitHandler = (e) => {
    e.preventDefault();
    if(keyword.trim()){
      setKeyword('');
        navigate(`/search/${keyword}`)
    }else{
        navigate("/");
    }
    
}

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };
  const { compareItems } = useSelector((state) => state.compare);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);
  const {userInfo}  = useSelector ((state) => state.auth)

  return (
    <div className={clsx("header-right-wrap", iconWhiteClass)} >
       <div className="same-style header-search d-none d-lg-block">
        {/* <button className="search-active" onClick={e => handleClick(e)}>
          <i style={{color : "white"}} className="pe-7s-search" />
        </button> */}
        <div className="search-content">
          <form onSubmit={submitHandler}   >
            <input type="text" placeholder="Search"  onChange={(e) => setKeyword(e.target.value)} value={keyword} />
            <button   style={{background : "#D17B06"}} type="submit" className="button-search">
              <i  className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>
      {/* <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={e => handleClick(e)}>
          <i className="pe-7s-search" />
        </button> 
         <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div> */}
       <div className="same-style account-setting d-none d-lg-block"> 
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
          <i style={{color : "white"}} className="pe-7s-user-female" />
        </button> 
        <div className="account-dropdown">
          <ul>
            <li>
             {!userInfo &&  <Link to={ "/login-register"}>Login/Register</Link>}
            </li>
           
            <li style={{color : "goldenrod"}}>
            {userInfo &&  <> <Link  style={{color : "goldenrod"}}  to={`/profile/${userInfo?.data?.auth?._id}`}>
                my account
              </Link>
              <Link  style={{color : "goldenrod"}}    to="/address">
                Address
              </Link>
              <Link     style={{color : "goldenrod"}}   to="/order">
                Orders
              </Link>
                <Link   style={{color : "goldenrod"}} onClick={logoutHandler}      to="/login-register">
                Logout
              </Link>
             
              </>
               }
            </li>
          </ul>
        </div> 
       </div> 
    
      <div className="same-style header-wishlist">
        <Link to={ "/wishlist"}>
          <i style={{color : "white"}} className="pe-7s-like" />
          <span className="count-style">
            {wishlistItems && wishlistItems.length ? wishlistItems.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={() => navigate("/cart")}>
          <i style={{color : "white"}} className="pe-7s-shopbag" />
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems?.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={ "/cart"}>
          <i  style={{color : "white"}}className="pe-7s-shopbag" />
          <span className="count-style">
            {cartItems && cartItems?.data?.length ? cartItems?.data?.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};



export default IconGroup;
// import PropTypes from "prop-types";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import clsx from "clsx";
// import MenuCart from "./sub-components/MenuCart";
// import { useState } from "react";

// const IconGroup = ({ iconWhiteClass }) => {
//   const [keyword ,setKeyword] = useState("");
//   const navigate = useNavigate();
//   const  submitHandler = (e) => {
//     e.preventDefault();
//     if(keyword.trim()){
//       setKeyword('');
//         navigate(`/search/${keyword}`)
//     }else{
//         navigate("/");
//     }
    
// }
//   const handleClick = e => {
//     e.currentTarget.nextSibling.classList.toggle("active");
   
    
//   };

//   const triggerMobileMenu = () => {
//     const offcanvasMobileMenu = document.querySelector(
//       "#offcanvas-mobile-menu"
//     );
//     offcanvasMobileMenu.classList.add("active");
//   };
//   const { compareItems } = useSelector((state) => state.compare);
//   const { wishlistItems } = useSelector((state) => state.wishlist);
//   const { cartItems } = useSelector((state) => state.cart);

//   return (
//     <div className={clsx("header-right-wrap", iconWhiteClass)} >
//       <div className="same-style header-search d-none d-lg-block">
//         <button className="search-active" onClick={e => handleClick(e)}>
//           <i className="pe-7s-search" />
//         </button>
//         <div className="search-content">
//           <form onSubmit={submitHandler}   >
//             <input type="text" placeholder="Search"  onChange={(e) => setKeyword(e.target.value)} value={keyword} />
//             <button type="submit" className="button-search">
//               <i className="pe-7s-search" />
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="same-style account-setting d-none d-lg-block">
//         <button
//           className="account-setting-active"
//           onClick={e => handleClick(e)}
//         >
//           <i className="pe-7s-user-female" />
//         </button>
//         <div className="account-dropdown">
//           <ul>
//             <li>
//               <Link to={process.env.PUBLIC_URL + "/login-register"}>Login</Link>
//             </li>
//             <li>
//               <Link to={process.env.PUBLIC_URL + "/login-register"}>
//                 Register
//               </Link>
//             </li>
//             <li>
//               <Link to={process.env.PUBLIC_URL + "/my-account"}>
//                 my account
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
    
//       <div className="same-style header-wishlist">
//         <Link to={process.env.PUBLIC_URL + "/wishlist"}>
//           <i className="pe-7s-like" />
//           <span className="count-style">
//             {wishlistItems && wishlistItems.length ? wishlistItems.length : 0}
//           </span>
//         </Link>
//       </div>
//       <div className="same-style cart-wrap d-none d-lg-block">
//         <button className="icon-cart" onClick={() => navigate("/cart")}>
//           <i className="pe-7s-shopbag" />
//           <span className="count-style">
//             {cartItems && cartItems.length ? cartItems?.length : 0}
//           </span>
//         </button>
//         {/* menu cart */}
//         <MenuCart />
//       </div>
//       <div className="same-style cart-wrap d-block d-lg-none">
//         <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
//           <i className="pe-7s-shopbag" />
//           <span className="count-style">
//             {cartItems && cartItems?.data?.length ? cartItems?.data?.length : 0}
//           </span>
//         </Link>
//       </div>
//       <div className="same-style mobile-off-canvas d-block d-lg-none">
//         <button
//           className="mobile-aside-button"
//           onClick={() => triggerMobileMenu()}
//         >
//           <i className="pe-7s-menu" />
//         </button>
//       </div>
//     </div>
//   );
// };

// IconGroup.propTypes = {
//   iconWhiteClass: PropTypes.string,
// };



// export default IconGroup;