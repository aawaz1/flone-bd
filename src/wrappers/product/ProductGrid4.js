// import { Fragment, useEffect, useState } from "react";
// import PropTypes from "prop-types";

// // import { getProducts } from "../../helpers/product";
// import ProductGridListSingle from "../../components/product/ProductGridListSingle";
// import { useGetProductsQuery } from '../../store/slices/products-slice';
// import './class.css'
// import axios from "axios";


// const ProductGrid4 = ({
//   spaceBottomClass,
//   category,
//   type,
//   limit
// }) => {
//   const [brandss ,setBrands] = useState([]);
//   // const { products } = useSelector((state) => state.product);
// //  const {data} = useGetProductsQuery()
// //  setProducts(data);
// useEffect(() => {
//   getAllBrands();
// }, []); // Empty dependency array ensures the effect runs only once

// const getAllBrands = async () => {
//   try {
//     const { data } = await axios.get(
//       `https://restapi.ansoftt.com:4321/v1/product/topselling
//       `
//     );
//     setBrands(data.data);
//     console.log(data)
//     console.log(brandss)
//   } catch (error) {
//     console.log(error);
//   }
// };

 
//   return (
//     <Fragment>
//       {/* {products?.map((p) => p?.name)} */}

//      { brandss?.map(brand => (
//   <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" >
//     <ProductGridListSingle product={brand} />
//   </div>
// ))} 
//   {/* {typeof data === 'object' && !Array.isArray(data) && Object.keys(data).map(key => (
//         <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={key}>
//           <ProductGridSingle product={data[key]} />
//         </div>
//       ))} */}
//     </Fragment>

//   );
// };

// ProductGrid4.propTypes = {
//   spaceBottomClass: PropTypes.string,
//   category: PropTypes.string,
//   type: PropTypes.string,
//   limit: PropTypes.number
// };



// export default ProductGrid4;
import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductGridListSingle2 from "../../components/product/ProductGridListSingle2.js";
import axios from "axios";

const ProductGrid4 = ({
 
}) => {
  const [brandss, setBrands] = useState([]);

  useEffect(() => {
    getAllBrands();
  }, []); // No dependency array means this effect runs once on mount and every render

  const getAllBrands = async () => {
    try {
      const { data } = await axios.get(
        `https://restapi.ansoftt.com:4321/v1/product`
      );
      setBrands(data.data);
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Fragment>
      {brandss.map(product => {
        return  (
          <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" >
            <ProductGridListSingle2  product={product} />
            <ProductGridListSingle2 product={product} />
          </div>
        )
      })}
    {/* {brandss?.map((product) => {
      return (
       
      )
    })} */}
  </Fragment>
  );
};

ProductGrid4.propTypes = {
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number
};

export default ProductGrid4;
