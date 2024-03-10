import PropTypes from "prop-types";
import clsx from "clsx";
import CategoryGridList4 from "./CategoryGirdList4";


const ShopProducts = ({ layout }) => {
  return (
    <div className="shop-bottom-area mt-35">
      <div className={clsx("row", layout)}>
        {/* <ProductgridList products={products} spaceBottomClass="mb-25" /> */}
        <CategoryGridList4 spaceBottomClass="mb-25" />
      </div>
    </div>
  );
};

ShopProducts.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array
};

export default ShopProducts;
