import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    token : localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null

}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setCredentials: (state, action) => {
        state.userInfo = action.payload;
        if (action.payload && action.payload.data && action.payload.data.auth && action.payload.data.auth.access_token) {
            const token = action.payload.data.auth.access_token;
            state.token = token;
            localStorage.setItem("token", JSON.stringify(token));
        }
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    
    
      logout: (state, action) => {
        state.userInfo = null;
        // NOTE: here we need to also remove the cart from storage so the next
        // logged in user doesn't inherit the previous users cart and shipping
        localStorage.clear();
      },
    },
  });



export const {setCredentials ,logout}  =authSlice.actions;
export default authSlice.reducer;