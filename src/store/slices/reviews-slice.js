import { REVIEW_URL } from '../../constants';
import { apiSlice } from './api-slice'

export const orderSLlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        createReviews : builder.mutation({
            query : (data) => ({
                url : `${REVIEW_URL}`,
                method : 'POST',
                body : data,
         
            }),
        }),
       
            

        

    }),
})


export const {useCreateReviewsMutation} = orderSLlice
