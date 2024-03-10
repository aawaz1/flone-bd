import { USERS_URL } from '../../constants';
import { apiSlice } from './api-slice'


export const usersApiSLlice = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        login : builder.mutation({
            query : (data) => ({
                url : `${USERS_URL}/signin`,
                method : 'POST',
                body : data
            }),
            

        }),
        register : builder.mutation({
            query : (data) => ({
                url : `${USERS_URL}/signup/user`,
                method : 'POST',
                body : data,
         
            }),
        }),
        logout : builder.mutation({
            query : (data) => ({
                url : `${USERS_URL}/logout`,
                method : 'POST',
         
            }),
            

        }),
        profile : builder.mutation({
            query : (idString , data ) => ({
              url :  `${USERS_URL}/${idString}`,
              method : 'PATCH',
              body : data,

            })

          }),
        // getUsers : builder.query({
        //     query : () => ({
        //         url : USERS_URL,

        //     }),
        //     providesTags : ['Users'],
        //     keepUnusedDataFor : 5
        // }),
        // getUsers: builder.query({
        //     query: () => ({
        //       url: USERS_URL,
        //     }),
        //     providesTags: ['Users'],
        //     keepUnusedDataFor: 5,
        //   }),

        //   deleteUsers: builder.mutation({
        //     query: (userId) => ({
        //       url: `${USERS_URL}/${userId}`,
        //       method : "DELETE",

        //     }),
        //     providesTags: ['Users'],
        //     keepUnusedDataFor: 5,
        //   }),
        //   profile : builder.mutation({
        //     query : (data) => ({
        //       url :  `${USERS_URL}/profile`,
        //       method : 'PUT',
        //       body : data,

        //     })

        //   }),
        //   getUsersDetails : builder.query({
        //     query: (userId) => ({
        //         url: `${USERS_URL}/${userId}`,
                
  
        //       }),
        
        //       keepUnusedDataFor: 5,

        //   }),

        //   updateUser : builder.mutation({
        //     query : (data) => ({
        //         url: `${USERS_URL}/${data.userId}`,
        //         method : "PUT",
        //         body : data,

        //     }),
        //     invalidatesTags : ['Users']
            
            
        //   }),
        //   createUser : builder.mutation({
        //     query : () => ({
        //      url : `${USERS_URL}/createuser`,
        //     method : 'POST',
        //     }),
        //   })
        
 })
})

 export const { useCreateUserMutation,useProfileMutation,useGetUsersQuery,useGetUsersDetailsQuery, useUpdateUserMutation,useDeleteUsersMutation,useRegisterMutation,useLoginMutation,useLogoutMutation} = usersApiSLlice