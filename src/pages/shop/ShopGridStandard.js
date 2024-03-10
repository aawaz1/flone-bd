import { Fragment, useState, useEffect } from 'react';
import Paginator from 'react-hooks-paginator';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import { getSortedProducts } from '../../helpers/product';
import SEO from "../../components/seo";
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopSidebar from '../../wrappers/product/ShopSidebar';
import ShopTopbar from '../../wrappers/product/ShopTopbar';
import ShopProducts from '../../wrappers/product/ShopProducts';
import { setActiveSort } from "../../helpers/product";
import axios from 'axios';

import SingleProduct from './SingleProduct';
import SectionTitle from '../../components/section-title/SectionTitle';

const ShopGridStandard = () => {
  const [layout, setLayout] = useState('grid three-column');
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortType, setSortType] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [filterSortType, setFilterSortType] = useState('');
  const [filterSortValue, setFilterSortValue] = useState('');
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  // const { products } = useSelector((state) => state.product);

  const pageLimit = 15;
  let { pathname } = useLocation();

  const getLayout = (layout) => {
    setLayout(layout)
  }

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  }

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  }

  useEffect(() => {
    let sortedProducts = getSortedProducts(sortType, sortValue);

    const filterSortedProducts = getSortedProducts(sortedProducts, filterSortType, filterSortValue);
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, sortType, sortValue, filterSortType, filterSortValue]);
  const [categories, setCategories] = useState([])
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(`https://restapi.ansoftt.com:4321/v1/category/`)
      setCategories(data.data);
   
    

    } catch (error) {

    }
  }

  const [products, setProducts] = useState([])
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `https://restapi.ansoftt.com:4321/v1/product/`
      );
      setProducts(data.data);
    
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {

    getAllCategories()
    getAllProducts()
  }, [])

  return (
    <Fragment>
      <SEO
        titleTemplate="Home Page"
        description="Home Page of flone react minimalist eCommerce template."
      />


      {/* breadcrumb */}


      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <SectionTitle titleText="DAILY DEALS!" positionClass="text-center" />
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <div className="sidebar-widget">
                {/* <h4 className="pro-sidebar-title">Categories </h4> */}
                {/* <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("category", "");
                    setActiveSort(e);
                    setSelectedCategory("all")
                    
                  }}
                >
                  <span className="checkmark" /> All Categories
                </button>
              </div>
            </li>
            {categories.map((category, key) => {
              return (
                <li key={category._id}>
                  <div className="sidebar-widget-list-left">
                    <button
                    
                      onClick={e => {
                        getSortParams("category", category.name);
                        setActiveSort(e);
                        setSelectedCategory(category.name)
                        // dispatch(saveCategory(category.name))
                      }}
                    >
                      {" "}
                      <span className="checkmark" /> {category.name}{" "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div> */}
              </div>
              {/* shop sidebar */}
              <ShopSidebar getSortParams={getSortParams} sideSpaceClass="mr-30" />
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              {/* shop topbar default */}
              {/* <ShopTopbar getLayout={getLayout} getFilterSortParams={getFilterSortParams}  sortedProductCount={currentData.length} /> */}

              {/* Home Page content default */}
              <ShopProducts />
              <div>

                {/* {products
                    .filter((item) => selectedCategory === "all" || item.category.name === selectedCategory)
                    .map((product) => (
                        // <SingleProduct product={product}/>
                             <ShopProducts /> 
                    ))} */}

              </div>

              {/* shop product pagination */}
              <div className="pro-pagination-style text-center mt-30">
                {/* <Paginator
                                        totalRecords={sortedProducts.length}
                                        pageLimit={pageLimit}
                                        pageNeighbours={2}
                                        setOffset={setOffset}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                        pageContainerClass="mb-0 mt-0"
                                        pagePrevText="«"
                                        pageNextText="»"
                                    /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}


export default ShopGridStandard;