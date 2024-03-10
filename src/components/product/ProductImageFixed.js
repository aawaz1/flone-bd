import PropTypes from "prop-types";
import { IMAGE_URL } from "../../constants";


const ProductImageFixed = ({ product }) => {
  console.log(product)
  return (
    <div className="product-large-image-wrapper">
      {/* {product.discount || product.new ? (
        <div className="product-img-badges">
          {product.discount ? (
            <span className="pink">-{product.discount}%</span>
          ) : (
            ""
          )}
          {product.new ? <span className="purple">New</span> : ""}
        </div>
      ) : (
        ""
      )} */}

      <div className="product-fixed-image">
        {product?.image_list ? (
          <img style={{objectFit : "contain" ,   height :"18vw"}}
            src={IMAGE_URL + product.image_list[0]}
            alt="hhh"
            className="img-fluid"
          />
        ) : (
          ""
        )}
      </div>
      <div className="product-fixed-image">
        {product?.image_list ? (
          <img style={{objectFit : "contain" ,   height :"8vw"}}
            src={IMAGE_URL + product.image_list[0]}
            alt="hhh"
            className="img-fluid"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

ProductImageFixed.propTypes = {
  product: PropTypes.shape({})
};

export default ProductImageFixed;
