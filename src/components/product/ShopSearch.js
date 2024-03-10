// import axios from "axios";
// import { useEffect, useState } from "react";


// const ShopSearch = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get(
//         `https://restapi.ansoftt.com:4321/v1/product/?search=${searchQuery}`
//       );
//       setProducts(data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getAllProducts()
//     // Filter products based on the search query
//     const filtered = products.filter(product =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery, products]);

//   const handleInputChange = event => {
//     setSearchQuery(event.target.value);
//   };
//   return (
//     <div className="sidebar-widget">
    
//       <div className="pro-sidebar-search mb-50 mt-25">
//         <form className="pro-sidebar-search-form" action="#">
//         <input
//         type="text"
//         placeholder="Search products"
//         value={searchQuery}
//         onChange={handleInputChange}
//       />
//           <button>
//             <i className="pe-7s-search" />
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ShopSearch;
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom"


const SearchBox = () => {
   
    const navigate = useNavigate();
    const {keyword : urlKeyword} = useParams();
    const [keyword,setKeyword] = useState(urlKeyword || '');
   const  submitHandler = (e) => {
        e.preventDefault();
        if(keyword.trim()){
          setKeyword('');
            navigate(`/search/${keyword}`)
        }else{
            navigate("/");
        }
        
    }
  return (
    <Form  style={{marginTop : "2vh"}} onSubmit={submitHandler} className="d-flex">
        <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search Products"
        className="mr-sm-2 ml-sm-5"
        >

        </Form.Control>
        <Button type="submit" variant="outline-black" className="p-2 mx-2" style={{color : "white"}}>Search</Button>
    </Form>
  )
}

export default SearchBox
