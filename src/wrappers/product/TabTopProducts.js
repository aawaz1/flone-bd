import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGrid4 from '../product/ProductGrid4';
import SectionTitleSeven from '../../components/section-title/SectionTitleSeven';
import SectionTitleFour from '../../components/section-title/SectionTitleFour';
import SectionTitleSix from '../../components/section-title/SectionTitleSix';
;



const TabTopProducts = (  {spaceTopClass,
  spaceBottomClass,
  bgColorClass,}) => {
    const [brands ,setBrands] = useState([]);

    useEffect(() => {
        
        const getAllBrands = async () => {
            try {
                const { data } = await axios.get(
                  `https://restapi.ansoftt.com:4321/v1/brand/`
                );
                setBrands(data.data);
                console.log(data)
                
              } catch (error) {
                console.log(error);
              }

        }
        getAllBrands();
    },[])
    return (
      <div
      className={clsx("product-area", spaceTopClass, spaceBottomClass, bgColorClass)}
    >
      <div  style={{border : "2px solid red"}} className="container">
        <Tab.Container defaultActiveKey="bestSeller">
          <Nav
            variant="pills"
            className="product-tab-list pt-30 pb-55 text-center"
          > 
          
            <Nav.Item>      

              <Nav.Link eventKey="newArrival">
                <SectionTitleSix/>
                {/* <h4>New Arrivals</h4> */}
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item> */}
          
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div   className="row">
                <ProductGrid4
               
                  type="new"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="row">
                <ProductGrid4
                  
                  type="bestSeller"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
    )
//   return (
//   <><h2 className='text-center mb-4'>Available Brands</h2>
//     <div className=' ml--10   border-red d-flex align-center container mb-4'>
       
//         {
//     brands?.map((b) => (
//         <>
// <div className={clsx("product-wrap" ,spaceBottomClass , spaceTopClass,bgColorClass)} style={{marginLeft : "2vw"}}>
//   <div className='container' >
//   <div className="product-img   " >
//     {/* <Link to={ "/product/" + product.id}>
//       <img
//         className="default-img"
//         src={product?.image}
//         alt=""
//       />
//       {/* {product.image.length > 1 ? (
//         <img
//           className="hover-img"
//           src={product.image}
//           alt=""
//         />
//       ) : (
//         ""
//       )} */}
//     {/* </Link> */}
//     <h6 >
//       <img  style={{width : "5vw" , borderRadius :"10%", height : "10vh"}} src={b?.image}/>
//     </h6>


//     <div className="">
//       <div className="">
//         {/* <button
//           className={wishlistItem !== undefined ? "active" : ""}
//           disabled={wishlistItem !== undefined}
//           title={
//             wishlistItem !== undefined
//               ? "Added to wishlist"
//               : "Add to wishlist"
//           }
//           onClick={() => dispatch(addToWishlist(product))}
//         >
//           <i className="" />
//         </button> */}
//       </div>
//       {/* <div className=""> */}
//         {/* {


//           product?.countInStock && product?.countInStock > 0 ? (
//             <button
//               onClick={() =>  dispatch(addToCart({
//                 ...product , qty
//               }))}
//               className={
//                 cartItem !== undefined && cartItem.quantity > 0
//                   ? "active"
//                   : ""
//               }
//               disabled={cartItem !== undefined && cartItem.quantity > 0}
//               title={
//                 cartItem !== undefined ? "Added to cart" : "Add to cart"
//               }
//             >
//               {" "}
//               <i className="pe-7s-cart"></i>{" "}
//               {cartItem !== undefined && cartItem?.quantity > 0
//                 ? "Added"
//                 : "Add to cart"}
//             </button>
//           ) : (
//             <button disabled className="active">
//               Out of Stock
//             </button>
//           )} */}
//       {/* </div> */}
//       {/* <div className=""> */}
//         {/* <button title="Quick View" onClick={() => setModalShow(true)}>
//           <i className="pe-7s-look" />
//         </button> */}
//       {/* </div> */}
//     </div>
//   </div>
//   </div>
//   <div className="">

//     <h3>
//       <Link style={{color : "black" ,important : "true"}} to={``}>
//         {b?.name}
//       </Link>
//     </h3>
    
//     {/* <div className="product-price"> */}
//       {/* {discountedPrice !== null ? (
//         <Fragment>
//           <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
//           <span className="old">
//             {currency.currencySymbol + finalProductPrice}
//           </span>
//         </Fragment>
//       ) : ( */}
//       {/* // <span>{currency.currencySymbol + finalProductPrice} </span>// */}

//     {/* </div> */}
//   </div>
// </div>
// {/* product modal */}
// {/* <ProductModal
//   show={modalShow}
//   onHide={() => setModalShow(false)}
//   product={product}
//   currency={currency}
//   // discountedPrice={discountedPrice}
//   // finalProductPrice={finalProductPrice}
//   // finalDiscountedPrice={finalDiscountedPrice}
//   wishlistItem={wishlistItem}
//   compareItem={compareItem}
// /> */}
// </>

//     ))
// }

//            </div>

//   </>)
}

export default TabTopProducts
