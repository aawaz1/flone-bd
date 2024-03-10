import { Fragment, useEffect, useState } from "react";

import PropTypes from "prop-types";

// import { getProducts } from "../../helpers/product";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import { useGetProductsQuery } from '../../store/slices/products-slice';
import './class.css'
import axios from "axios";
import { BASE_URL } from "../../constants";



const ProductGrid = ({
  spaceBottomClass,
  category,
  type,
  limit
}) => {
  const baseUrl = BASE_URL

  console.log(baseUrl)
  const [products ,setProducts] = useState([]);

  // const { products } = useSelector((state) => state.product);
//  const {data} = useGetProductsQuery()
//  setProducts(data);
useEffect(() => {
  getAllProducts();
}, []); // Empty dependency array ensures the effect runs only once

const getAllProducts = async () => {
  try {
    const { data } = await axios.get(
      baseUrl + "product"
    );
    setProducts(data.data);
    console.log(data)
    console.log(products)
  } catch (error) {
    console.log(error);
  }
};

 
  return (
    <Fragment>
      {/* {products?.map((p) => p?.name)} */}

     { products?.map(product => (
  <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={product._id}>
    <ProductGridSingle product={product} />
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
