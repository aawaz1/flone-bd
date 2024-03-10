import { ORDERS_URL } from '../../constants';
import { apiSlice } from './api-slice'

export const orderSLlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        createOrder : builder.mutation({
            query : (data) => ({
                url : ORDERS_URL,
                method : 'POST',
                body : data
            }),
            

        }),
       
            

        

    }),
})


export const {useCreateOrderMutation} = orderSLlice
