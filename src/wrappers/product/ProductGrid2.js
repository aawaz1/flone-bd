import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";

// import { getProducts } from "../../helpers/product";
import ProductGridSingle2 from "../../components/product/ProductGridSingle2";
import { useGetProductsQuery } from '../../store/slices/products-slice';
import './class.css'
import axios from "axios";


const ProductGrid2 = ({
    product,
  spaceBottomClass,
  category,
  type,
  limit
}) => {
  

 
  return (
    <Fragment>
      {/* {products?.map((p) => p?.name)} */}

    
  <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
    <ProductGridSingle2 product={product} />
  </div>

  {/* {typeof data === 'object' && !Array.isArray(data) && Object.keys(data).map(key => (
        <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={key}>
          <ProductGridSingle product={data[key]} />
        </div>
      ))} */}
    </Fragment>

  );
};

ProductGrid2.propTypes = {
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number
};



export default ProductGrid2;