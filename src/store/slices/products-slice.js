import { PRODUCT_URL } from "../../constants";
import { apiSlice } from "../slices/api-slice";


 export const productApiSLlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getProducts : builder.query({
            query : () => ({
                url : PRODUCT_URL,


            }),
              providesTags :['Product'],
             keepUnusedDataFor : 5,

        }),
        // getProducts : builder.query({
        //     query : () => ({
        //         url : PRODUCTS_URL
        //     }),
        //     // providesTags :['Product'],
        //     // keepUnusedDataFor : 5,

        // }),
        getProductDetails :  builder.query({
            query : (productId) => ({
                url : `${PRODUCT_URL}/${productId}`
            }),
            keepUnusedDataFor : 5,

        }),
       
       
       
        
      


    })

        
 })

 export const {useGetProductsQuery,useGetProductDetailsQuery} = productApiSLlice;