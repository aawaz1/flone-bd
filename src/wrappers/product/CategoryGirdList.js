import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";import axios from "axios";
import CategoryGridListSingle from "./CategoryGridListSingle";

const CategoryGridList = ({
    product,
  
  spaceBottomClass
}) => {
  const currency = useSelector((state) => state.currency);
const selectedCategory = useState("all")
  const cart = useSelector(state => state.cart);
  const {category} = cart
  console.log(category)
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);


  
  return (
    <Fragment>
     
  
          <div  className="col-xl-4 col-sm-6" key={product.id}>
            <CategoryGridListSingle product={product}/>
            {/* <ProductGridListSingle
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              cartItem={
                cartItems.find(cartItem => cartItem.id === product.id)
              }
              wishlistItem={
                wishlistItems.find(
                  wishlistItem => wishlistItem.id === product.id
                )
              }
              compareItem={
                compareItems.find(
                  compareItem => compareItem.id === product.id
                )
              }
            /> */}
          </div>
        
    
    </Fragment>
  );
};

CategoryGridList.propTypes = {
  products: PropTypes.array,
  spaceBottomClass: PropTypes.string,
};

export default CategoryGridList;
