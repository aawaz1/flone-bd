
import { CARTS_URL} from '../../constants';
import { apiSlice } from './api-slice'

export const orderSLlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        createCart : builder.mutation({
            query : (data) => ({
                url : `${CARTS_URL}`,
                method : 'POST',
                body : data,
         
            }),
        }),
       
            

        

    }),
})


export const {useCreateCartMutation} = orderSLlice
