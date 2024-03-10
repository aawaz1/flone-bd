

import { Fragment, useEffect } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import ProductSliderThree from "../../wrappers/product/ProductSliderThree";
import TabBrand from "../../wrappers/brand/TabBrand";
// import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
// import Product from "./Product";

import Product from "./Product";
import { useSelector } from "react-redux";
import BannerTen from "../../wrappers/banner/BannerTen";
import BrandLogoSliderThree from "../../wrappers/brand-logo/BrandLogoSliderThree";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../components/section-title/SectionTitle";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import Brands from "../../wrappers/product/Brands";
import TabTopProducts from "../../wrappers/product/TabTopProducts.js";

import './home.css'
import ShopGridStandard from "../shop/ShopGridStandard";
// import Product from "./Product";

const HomeFashion = () => {







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
        <HeroSliderNine />

       
        {/* featured icon */}
        {/* <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" /> */}

        {/* tab product */}
        {/* <TabProduct spaceBottomClass="pb-60" category="fashion" /> */}
        <ShopGridStandard />
        {/* <Brands/> */}
       
        {/* <div className="container1">
        <Marquee style={{cursor : "pointer"}} pauseOnHover={true}>
          <div>
          <img style={{width :"10vw"}} src="https://www.bing.com/th?id=OIP.dEgEQ0JBlwn323Q_i0spsgAAAA&w=200&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
          <img style={{width :"10vw"}}src="https://www.bing.com/th?id=OIP.dEgEQ0JBlwn323Q_i0spsgAAAA&w=200&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
          <img style={{width :"10vw"}} src="https://www.bing.com/th?id=OIP.dEgEQ0JBlwn323Q_i0spsgAAAA&w=200&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
          <img style={{width :"10vw"}} src="https://www.bing.com/th?id=OIP.dEgEQ0JBlwn323Q_i0spsgAAAA&w=200&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
            <img style={{width :"10vw"}} src="https://www.bing.com/th?id=OIP.dEgEQ0JBlwn323Q_i0spsgAAAA&w=200&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
          </div>
        </Marquee>
        </div> */}

       

        <TabBrand spaceBottomClass="pb-60"/>
        <TabTopProducts spaceBottomClass="pb-60"/>
        {/* <TabTopProducts/> */}
        <SectionTitleTwo
          titleText="Our Brands"
          positionClass="text-center"
          spaceClass="mb-50"
          borderClass="no-border"
        /> 
        <Brands/>
        {/* <BrandLogoSliderThree spaceBottomClass="pb-95" spaceTopClass="pt-100" /> */}
        


      

        
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
