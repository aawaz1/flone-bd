import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/errorboundary/errorboundary";
import PrivateRoute from "./components/routes/privateRoutes";
import { useSelector } from "react-redux";
import PaymentScreen from "./pages/other/PaymentScreen";
import SingleOrderScreen from "./pages/other/SingleOrderScreen";
// import { useSelector } from "react-redux";
// import AdminRoute from "./components/routes/Adminroutes";
// import HomeFashion from "./pages/home/Home";
// import Product from "./pages/shop-product/Product";
// // import About1 from './components/About1'
// // import Cart from "./pages/other/Cart";
// // import NotFound from "./pages/other/NotFound";
// // import MyAccount from "./pages/other/MyAccount";
// import LoginRegister from "./pages/other/LoginRegister";
// // import Wishlist from "./pages/other/Wishlist";
// // import Checkout from "./pages/other/Checkout";
// import About from "./pages/other/About";
// // import Contact from './pages/other/Contact'



// home pages
const HomeFashion = lazy(() => import("./pages/home/Home"));
const HomeFashion2 = lazy(() => import('./pages/home/Home2'));
const AdminRoute = lazy(() => import('./components/routes/Adminroutes'));







// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));








// other pages
const About = lazy(() => import("./pages/other/About"));
const Payment = lazy(() => import("./pages/other/Payment"))
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Address = lazy(() => import("./pages/other/Address"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));

const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));
const OrderScreen = lazy(() => import("./pages/other/OrderScreen"))


const App = () => {
  

  return (

    <Router>
      <ScrollToTop>

        <Suspense fallback={
          <div className="flone-preloader-wrapper">
            <div className="flone-preloader">
              <span></span>
              <span></span>
            </div>
          </div>
        }>
          <Routes>


            {/* <AdminRoute path="/">
            <Route path="/admin-userlist" element={<MyAccount/>} />

            </AdminRoute> */}
            <Route path={"profile/:id"} element={<MyAccount />} />
            {/* <Route
              path={ "shop-grid-standard"}
              element={<ShopGridStandard />}
            /> */}



            ``

            {/* Homepages */}
            <Route
              path={"/"}
              element={<HomeFashion />}
            />
            <Route
              path={ "/search/:keyword"}
              element={<HomeFashion2 />}
            />


            {/* Shop product pages */}
            <Route
              path={"/product/:id"}
              element={<Product />}
            />
            <Route
              path={ "/order"}
              element={<PrivateRoute element={<OrderScreen />} />}/>
            <Route
              path={"/address"}
              element={<Address />} />

            {/* Other pages */}
            <Route
              path={ "/about"}
              element={<About />}
            />
            <Route
              path={ "/contact"}
              element={<Contact />}
            />
            <Route
              path={ "/payment"}
              element={<PrivateRoute element={<PaymentScreen />} />}
            />
            <Route
              path={ "/placeorder"}
              element={<PrivateRoute element={<Payment />} />}
            />
            <Route
              path={ "/order/:id"}
              element={<PrivateRoute element={<SingleOrderScreen />} />}
            />



            <Route
              path={"/my-account"}
              element={<PrivateRoute element={<MyAccount />} />}
            />
            <Route
              path={ "/login-register"}
              element={<LoginRegister />}
            />

            <Route
              path={ "/cart"}
              element={<Cart />}
            />
            <Route
              path={"/wishlist"}
              element={<Wishlist />}
            />

            <Route
              path={ "/checkout"}
              element={<PrivateRoute element={<Checkout />} />}
            />

            <Route path="*" element={<NotFound />} />


          </Routes>
        </Suspense>

      </ScrollToTop>
    </Router>
  );
};

export default App;

