import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import SectionTitle1 from "../../components/section-title/SectionTitle1";
import ProductGridSingle from "../../components/product/ProductGridSingle";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import { useGetProductDetailsQuery } from "../../store/slices/products-slice";
import axios from "axios";

const settings = {
  loop: false,
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
};


const RelatedProductSlider = ({ spaceBottomClass }) => {
  const baseUrl = BASE_URL;
  const [products , setProducts] = useState([])
  const {id : productId} = useParams()
  console.log(productId)
  useEffect(() => {
    getAllProducts();
  }, []); 
  
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        baseUrl + "/product"
      );
      setProducts(data.data);
      console.log(data)
      console.log(products)
    } catch (error) {
      console.log(error);
    }
  };
  const { data } = useGetProductDetailsQuery(productId);
  console.log(products)
  const category = data?.data?.category?.name;
  console.log(category)
  // const { products } = useSelector((state) => state.product);
  const currency = useSelector((state) => state.currency);
  // const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  // const prods = getProducts(products, category, null, 6);
  
  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
      <div className="container">
        <SectionTitle1
          titleText="Related Products"
          positionClass="text-center"
          spaceClass="mb-50"
        />
        {products.length ? (
          <Swiper options={settings}>
              {products.filter(item => item.category.name ===  category  && item._id !== productId ).map(product => (
                <SwiperSlide key={product.id}>
                  <ProductGridSingle
                    product={product}
                    currency={currency}
                  
                    wishlistItem={
                      wishlistItems.find(
                        (wishlistItem) => wishlistItem.id === product.id
                      )
                    }
                    compareItem={
                      compareItems.find(
                        (compareItem) => compareItem.id === product.id
                      )
                    }
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

RelatedProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default RelatedProductSlider;
