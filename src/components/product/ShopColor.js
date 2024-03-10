import PropTypes from "prop-types";

import { setActiveSort } from "../../helpers/product";
import { useDispatch } from "react-redux";
import { saveCategory, savePrice } from "../../store/slices/cart-slice";

const ShopColor = ({ colors, getSortParams }) => {
  const dispatch = useDispatch(saveCategory);
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Price </h4>
      <div className="sidebar-widget-list mt-20">
        {colors ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("color", "low-to-high");
                    setActiveSort(e);
                    dispatch(savePrice("low-to-high"))
                  }}
                >
                  <span className="checkmark" /> low-to-high{" "}
                </button>
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("color", "high-to-low");
                    setActiveSort(e);
                    dispatch(savePrice("high-to-low"))
                  }}
                >
                  <span className="checkmark" /> high-to-low{" "}
                </button>
              </div>
            </li>
            {colors.map((color, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={e => {
                        getSortParams("color", color);
                        setActiveSort(e);
                      }}
                    >
                      <span className="checkmark" /> {color}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No colors found"
        )}
      </div>
    </div>
  );
};

ShopColor.propTypes = {
  colors: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopColor;
