// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import productReducer from './slices/product-slice';
// import currencyReducer from "./slices/currency-slice";
// import cartReducer from "./slices/cart-slice";
// import compareReducer from "./slices/compare-slice";
// import wishlistReducer from "./slices/wishlist-slice";
// import { apiSlice } from './slices/api-slice';

// const persistConfig = {
//     key: "flone",
//     version: 1.1,
//     storage,
//     blacklist: ["product"]
// }

// export const rootReducer = combineReducers({
//     product: productReducer,
//     currency: currencyReducer,
//     cart: cartReducer,
//     compare: compareReducer,
//     wishlist: wishlistReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer : {
//         [apiSlice.reducerPath] : apiSlice.reducer,
       
       

//     },
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
    
    
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [
//                     FLUSH,
//                     REHYDRATE,
//                     PAUSE,
//                     PERSIST,
//                     PURGE,
//                     REGISTER,
//                 ],
//             },
//         }),
// });

// export const persistor = persistStore(store);

// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import productReducer from './slices/product-slice';
// import currencyReducer from "./slices/currency-slice";
// import cartReducer from "./slices/cart-slice";
// import compareReducer from "./slices/compare-slice";
// import wishlistReducer from "./slices/wishlist-slice";
// import { apiSlice } from './slices/api-slice';

// const persistConfig = {
//     key: "flone",
//     version: 1.1,
//     storage,
//     blacklist: ["product"]
// }

// const rootReducer = combineReducers({
//     product: productReducer,
//     currency: currencyReducer,
//     cart: cartReducer,
//     compare: compareReducer,
//     wishlist: wishlistReducer,
//     [apiSlice.reducerPath]: apiSlice.reducer, // Add RTK-Query reducer here
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [
//                     FLUSH,
//                     REHYDRATE,
//                     PAUSE,
//                     PERSIST,
//                     PURGE,
//                     REGISTER,
//                 ],
//             },
//         }),
// });

// export const persistor = persistStore(store);
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { apiSlice } from './slices/api-slice';

// // Import other reducers
// import productReducer from './slices/product-slice';
// import currencyReducer from './slices/currency-slice';
// import cartReducer from './slices/cart-slice';
// import compareReducer from './slices/compare-slice';
// import wishlistReducer from './slices/wishlist-slice';

// // Redux Persist configuration
// const persistConfig = {
//   key: 'flone',
//   version: 1.1,
//   storage,
//   blacklist: ['product']
// };

// // Combine reducers
// const rootReducer = combineReducers({
//   product: productReducer,
//   currency: currencyReducer,
//   cart: cartReducer,
//   compare: compareReducer,
//   wishlist: wishlistReducer,
//   [apiSlice.reducerPath]: apiSlice.reducer // Add RTK-Query reducer here
// });

// // Create persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create store with persisted reducer and middleware
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware) // Add RTK-Query middleware here
// });

// // Create persistor
// export const persistor = persistStore(store);

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './slices/api-slice';

// Import other reducers

import currencyReducer from './slices/currency-slice';
import cartReducer from './slices/cart-slice';
import compareReducer from './slices/compare-slice';
import wishlistReducer from './slices/wishlist-slice';
import authSliceReducer from './slices/auth-slice';

// Redux Persist configuration
const persistConfig = {
  key: 'flone',
  version: 1.1,
  storage,
  blacklist: ['product']
};

// Combine reducers
const rootReducer = combineReducers({

  currency: currencyReducer,
  auth : authSliceReducer,
  cart: cartReducer,
  compare: compareReducer,
  wishlist: wishlistReducer,
  [apiSlice.reducerPath]: apiSlice.reducer // Add RTK-Query reducer here
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer and middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [apiSlice.middleware]
      }
    }).concat(apiSlice.middleware) // Add RTK-Query middleware here
});

// Create persistor
export const persistor = persistStore(store);
