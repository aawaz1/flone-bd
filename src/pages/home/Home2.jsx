
import { Fragment, useEffect, useState } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct1 from "../../wrappers/product/TabProduct1";
import TabBrand from "../../wrappers/brand/TabBrand";
// import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
// import Product from "./Product";

import Product from "./Product";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Product from "./Product";

const Home2 = () => {
  const { keyword} = useParams();
  const [products ,setProducts] = useState([])

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`https://restapi.ansoftt.com:4321/v1/product?name=${keyword}`);
        setProducts(data.data);
        console.log(data)
        console.log(products);

    } catch (error) {

    }
}


useEffect(() => {
  getAllProducts();
} ,[window.location.href] )




  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home"
        description="Fashion home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        {/* <HeroSliderOne /> */}
        <div>
       {   products.length === 0 ? (<><h2 style={{textAlign : 'center' , marginRight : "4vw" }}>Product not Found</h2>
       <h4 style={{textAlign : "center" ,marginBottom :"39vh"}}> Your Search Keyword <span style={{color : "gold"}}>'{keyword}'</span> did not matched any results</h4></>) :
           ( products.map((product) => (
              <TabProduct1
                key={product.id}
                product={product}
                spaceBottomClass="pb-60"
                category="fashion"
              />
            ))
          )}
        </div>

       
        {/* featured icon */}
        {/* <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" /> */}

        {/* tab product */}
        {/* <TabProduct spaceBottomClass="pb-60" category="fashion" /> */}

        {/* <TabBrand spaceBottomClass="pb-60"/> */}
        


      

        
      </LayoutOne>
    </Fragment>
  );
};

export default Home2;