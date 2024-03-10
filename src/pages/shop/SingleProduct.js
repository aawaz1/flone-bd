import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { Fragment } from 'react'


const SingleProduct = ({product}) => {
    console.log(product)
  return (
//     <Fragment style={{border : "2px solid gray "}} >
//     <div  className={clsx("product-wrap")}>
//       <div className="product-img">
//         <Link to={ ""}>
//           <img
//             className="default-img"
//             src={product.image_list[0]}
//             alt=""
//           />
//           {product.image_list.length > 1 ? (
//             <img
//               className=""
//               src={product?.image_list[0]}
//               alt=""
//             />
//           ) : (
//             ""
//           )}
//         </Link>
       

//         <div className="product-action">
//           <div className="">
          
//           </div>
//           <div className="">
            
             
           
//           </div>
          
//         </div>
//       </div>
     
//     </div>
//     <div className="shop-list-wrap mb-30">
//       <div className="row">
//         <div className="col-xl-4 col-md-5 col-sm-6">
//           <div className="product-list-image-wrap">
//             <div className="product-img">
//               <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
//                 <img
//                   className="default-img img-fluid"
//                   src={process.env.PUBLIC_URL + product.image_list[0]}
//                   alt=""
//                 />
                
//               </Link>
             
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-8 col-md-7 col-sm-6">
//           <div className="shop-list-content">
//             <h3>
//               <Link to={ "/product/" + product.id}>
//                 {product?.name}
//               </Link>
//             </h3>
//             <div className="product-list-price">
//               {/* {discountedPrice !== null ? (
//                 <Fragment>
//                   <span>
//                     {currency.currencySymbol + finalDiscountedPrice}
//                   </span>{" "}
//                   <span className="old">
//                     {currency.currencySymbol + finalProductPrice}
//                   </span>
//                 </Fragment>
//               ) : (
//                 <span>{currency.currencySymbol + finalProductPrice} </span>
//               )} */}
//             </div>
           


//             <div className="shop-list-actions d-flex align-items-center">
//               <div className="shop-list-btn btn-hover">
              
                 

            
                
            
          
              
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   {/* product modal */}

// </Fragment>
<Fragment>
<div className={clsx("product-wrap")}>
  <div className="product-img">
    <Link to={""}>
      <img
        className="default-img"
        src={product.image}
        alt=""
      />
     
    </Link>
    {/* {product.discount || product.new ? (
      <div className="product-img-badges">
        {product.discount ? (
          <span className="pink">-{product.discount}%</span>
        ) : (
          ""
        )}
        {product.new ? <span className="purple">New</span> : ""}
      </div>
    ) : (
      ""
    )} */}

    <div className="">
      <div className="">
       
      </div>
     
     
    </div>
  </div>
  <div className="product-content text-center">
    <h3>
      <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
        {product?.name}
      </Link>
    </h3>
  
    <div className="product-price">
      {/* {discountedPrice !== null ? (
        <Fragment>
          <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
          <span className="old">
            {currency.currencySymbol + finalProductPrice}
          </span>
        </Fragment>
      ) : (
        <span>{currency.currencySymbol + finalProductPrice} </span>
      )} */}
    </div>
  </div>
</div>
<div className="shop-list-wrap mb-30">
  <div className="row">
    <div className="col-xl-4 col-md-5 col-sm-6">
      <div className="product-list-image-wrap">
        <div className="product-img">
         
          
        </div>
      </div>
    </div>
    <div className="col-xl-8 col-md-7 col-sm-6">
      <div className="shop-list-content">
       
        <div className="product-list-price">
          {/* {discountedPrice !== null ? (
            <Fragment>
              <span>
                {currency.currencySymbol + finalDiscountedPrice}
              </span>{" "}
              <span className="old">
                {currency.currencySymbol + finalProductPrice}
              </span>
            </Fragment>
          ) : (
            <span>{currency.currencySymbol + finalProductPrice} </span>
          )} */}
        </div>
      

        <div className="shop-list-actions d-flex align-items-center">
         

          <div className="shop-list-compare ml-10">
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* product modal */}
{/* <ProductModal
show={modalShow}
onHide={() => setModalShow(false)}
product={product}
currency={currency}
// discountedPrice={discountedPrice}
finalProductPrice={finalProductPrice}
// finalDiscountedPrice={finalDiscountedPrice}
wishlistItem={wishlistItem}

/> */}
</Fragment>
  )
}

export default SingleProduct
