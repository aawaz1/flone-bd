// import PropTypes from "prop-types";

// import { setActiveSort } from "../../helpers/product";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { saveCategory } from "../../store/slices/cart-slice";

// const ShopCategories = ({  getSortParams }) => {
//   const dispatch = useDispatch(saveCategory)
//   const cart  = useSelector(state => state.cart);
//   const {category} = cart;
//   console.log(category)
//   const [categories , setCategories] = useState([])
//   const getAllCategories = async () => {
//     try {
//         const { data } = await axios.get(`https://restapi.ansoftt.com:4321/v1/category/`)
//         setCategories(data.data);
//         console.log(data)
//         console.log(categories);

//     } catch (error) {

//     }
// }

// useEffect(() => {
  
//     getAllCategories()
// }, [])
//   return (
//     <div className="sidebar-widget">
//       <h4 className="pro-sidebar-title">Categories </h4>
//       <div className="sidebar-widget-list mt-30">
//         {categories ? (
//           <ul>
//             <li>
//               <div className="sidebar-widget-list-left">
//                 <button
//                   onClick={e => {
//                     getSortParams("category", "all");
//                     setActiveSort(e);
//                     dispatch(saveCategory('all'));
                    
//                   }}
//                 >
//                   <span className="checkmark" /> All Categories
//                 </button>
//               </div>
//             </li>
//             {categories.map((category, key) => {
//               return (
//                 <li key={category._id}>
//                   <div className="sidebar-widget-list-left">
//                     <button
//                       onClick={e => {
//                         getSortParams("category", category.name);
//                         setActiveSort(e);
//                         dispatch(saveCategory(category.name))
//                       }}
//                     >
//                       {" "}
//                       <span className="checkmark" /> {category.name}{" "}
//                     </button>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         ) : (
//           "No categories found"
//         )}
//       </div>
//     </div>
//   );
// };

// ShopCategories.propTypes = {
//   categories: PropTypes.array,
//   getSortParams: PropTypes.func
// };

// export default ShopCategories;
import PropTypes from "prop-types";
import { setActiveSort } from "../../helpers/product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCategory } from "../../store/slices/cart-slice";

const ShopCategories = ({ getSortParams }) => {
  const dispatch = useDispatch(saveCategory);
  const cart = useSelector((state) => state.cart);
  const { category } = cart;
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `https://restapi.ansoftt.com:4321/v1/category/`
      );
      setCategories(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  className={category === "all" ? "active" : ""}
                  onClick={(e) => {
                    getSortParams("category", "all");
                    setActiveSort(e);
                    dispatch(saveCategory("all"));
                  }}
                >
                  <span className="checkmark" /> All Categories
                </button>
              </div>
            </li>
            {categories.map((cat, key) => (
              <li key={cat._id}>
                <div className="sidebar-widget-list-left">
                  <button
                    className={category === cat.name ? "active" : ""}
                    onClick={(e) => {
                      getSortParams("category", cat.name);
                      setActiveSort(e);
                      dispatch(saveCategory(cat.name));
                    }}
                  >
                    <span className="checkmark" /> {cat.name}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>
    </div>
  );
};

ShopCategories.propTypes = {
  getSortParams: PropTypes.func.isRequired,
};

export default ShopCategories;
