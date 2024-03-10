import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";
import axios from "axios";

const ProductGridList = ({
  
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

  const [products ,setProducts] = useState([])
  const getAllProducts = async () => {
    try {
        const { data } = await axios.get(
            `https://restapi.ansoftt.com:4321/v1/product/`
        );
        setProducts(data.data);
        console.log(data)
        console.log(products)
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
  getAllProducts()
})
  
  return (
    <Fragment>
      {products
                    .filter(
                      (item) =>
                        selectedCategory === "all" ||
                        item.category.name === category // Compare with Redux state category
                    ).map(product => {
        return (
          <div className="col-xl-4 col-sm-6" key={product.id}>
            <ProductGridListSingle
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
      })}
    </Fragment>
  );
};

ProductGridList.propTypes = {
  products: PropTypes.array,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridList;
