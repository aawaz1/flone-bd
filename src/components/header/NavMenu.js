import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Badge, NavDropdown } from 'react-bootstrap'
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../store/slices/usersApiSlice";
import { logout } from "../../store/slices/auth-slice";
import ShopSearch from "../product/ShopSearch";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.auth);


 
  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login-register");


    } catch (error) {
      console.log(error);

    }

  }
  const { t } = useTranslation();

  return (
    <div
      className={clsx(sidebarMenu
        ? "sidebar-menu"
        : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
          <li > <ShopSearch /></li>


          <li  >
            <Link style={{ color: "white" }} to={"/"}>Home

            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to={"/about"}> About Us

            </Link>
          </li>

          {/* <li>
            {userInfo ? (<NavDropdown
              title={userInfo?.data?.auth?.email || userInfo.email}
              id='username'>
             
                <NavDropdown.Item as={Link} to={`/profile/${userInfo?.data?.auth?._id.toString()}` }>
                  Profile

                </NavDropdown.Item>
           
              <NavDropdown.Item onClick={logoutHandler}>Logout


              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to={'/address'} >Address


</NavDropdown.Item>
            </NavDropdown>) : (
              <Link to='/login-register'>Login</Link>)}
                 



          </li> */}
          <li>
            {
              userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item as={Link} to='/admin-userlist'>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/userlist'>
                    Users
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/orderlist'>
                    Orders
                  </NavDropdown.Item>
                </NavDropdown>
              )
            }

          </li>




        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
