import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";

// import { getProducts } from "../../helpers/product";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";

import './class.css'
import axios from "axios";


const ProductGrid = ({
  spaceBottomClass,
  category,
  type,
  limit
}) => {
  const [brands ,setBrands] = useState([]);
  // const { products } = useSelector((state) => state.product);
//  const {data} = useGetProductsQuery()
//  setProducts(data);
useEffect(() => {
  getAllBrands();
}, []); // Empty dependency array ensures the effect runs only once

const getAllBrands = async () => {
  try {
    const { data } = await axios.get(
      `https://restapi.ansoftt.com:4321/v1/product?coming_soon=false`
    );
    setBrands(data.data);
   
  } catch (error) {
    console.log(error);
  }
};

 
  return (
    <Fragment>
      {/* {products?.map((p) => p?.name)} */}

     { brands?.map(brand => (
  <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={brand._id}>
    <ProductGridListSingle product={brand} />
  </div>
))} 
  {/* {typeof data === 'object' && !Array.isArray(data) && Object.keys(data).map(key => (
        <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={key}>
          <ProductGridSingle product={data[key]} />
        </div>
      ))} */}
    </Fragment>

  );
};

ProductGrid.propTypes = {
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number
};



export default ProductGrid;