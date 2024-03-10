import { ADDRESS_URL } from '../../constants';
import { apiSlice } from './api-slice'


export const addressApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        create : builder.mutation({
            query : (data) => ({
                url : `${ADDRESS_URL}`,
                method : 'POST',
                body : data
            }),
            

        }),



    })

})



export const {useCreateMutation} = addressApiSlice