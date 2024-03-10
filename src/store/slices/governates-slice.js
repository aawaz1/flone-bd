import { ADDRESS_URL, GOVERNATES_URL } from '../../constants';
import { apiSlice } from './api-slice'


export const addressApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        create : builder.mutation({
            query : (data) => ({
                url : `${GOVERNATES_URL}`,
                method : 'POST',
                body : data
            }),
            

        }),
        getGovernates : builder.query({
            query : () => ({
                url : GOVERNATES_URL,


            }),
              providesTags :['Product'],
             keepUnusedDataFor : 5,

        }),



    })

})



export const {useCreateMutation ,useGetGovernatesQuery} = addressApiSlice