import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductGridListSingle4 from "../../components/product/ProductGridListSingle4";
import axios from "axios";
import ProductGridSingle from "../../components/product/ProductGridSingle";

const ProductGridList4 = ({

  
  spaceBottomClass
}) => {
 
  
  const currency = useSelector((state) => state.currency);

  const cart = useSelector(state => state.cart);
  const {category } = cart

  // const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const [products ,setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
        const { data } = await axios.get(
            `https://restapi.ansoftt.com:4321/v1/product/`
        );
        setProducts(data.data);
      
       
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
  getAllProducts()
} ,[])
  
  return (
    <Fragment>
      {category === "all" ? (
  products.map(product => (
    <div className="col-xl-4 col-sm-6" key={product.id}>
      <ProductGridListSingle4
        spaceBottomClass={spaceBottomClass}
        product={product}
        currency={currency}
        // cartItem={cartItems.find(cartItem => cartItem.id === product.id)}
        wishlistItem={wishlistItems.find(wishlistItem => wishlistItem.id === product.id)}
        compareItem={compareItems.find(compareItem => compareItem.id === product.id)}
      />
       <ProductGridListSingle4
        spaceBottomClass={spaceBottomClass}
        product={product}
        currency={currency}
        // cartItem={cartItems.find(cartItem => cartItem.id === product.id)}
        wishlistItem={wishlistItems.find(wishlistItem => wishlistItem.id === product.id)}
        compareItem={compareItems.find(compareItem => compareItem.id === product.id)}
      />
       <ProductGridListSingle4
        spaceBottomClass={spaceBottomClass}
        product={product}
        currency={currency}
        // cartItem={cartItems.find(cartItem => cartItem.id === product.id)}
        wishlistItem={wishlistItems.find(wishlistItem => wishlistItem.id === product.id)}
        compareItem={compareItems.find(compareItem => compareItem.id === product.id)}
      />
       <ProductGridListSingle4
        spaceBottomClass={spaceBottomClass}
        product={product}
        currency={currency}
        // cartItem={cartItems.find(cartItem => cartItem.id === product.id)}
        wishlistItem={wishlistItems.find(wishlistItem => wishlistItem.id === product.id)}
        compareItem={compareItems.find(compareItem => compareItem.id === product.id)}
      />
    </div>
  ))
) : (
  products.filter(item => item.category.name === category ).map(product => (
    <div className="col-xl-4 col-sm-6" key={product.id}>
      <ProductGridListSingle4
        spaceBottomClass={spaceBottomClass}
        product={product}
        currency={currency}
        
        wishlistItem={wishlistItems.find(wishlistItem => wishlistItem.id === product.id)}
        compareItem={compareItems.find(compareItem => compareItem.id === product.id)}
      />
    </div>
  ))
)} 

      {/* {products.filter(item => item.category.name === category).map(product => {
        return (
          <div className="col-xl-4 col-sm-6" key={product.id}>
            <ProductGridListSingle4
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
            />
          </div>
        );
      })} */}
    </Fragment>
  );
};

ProductGridList4.propTypes = {
  products: PropTypes.array,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridList4;
