import { v4 as uuidv4 } from 'uuid';
import cogoToast from 'cogo-toast';
import { updateCart } from '../../utils/cartUtils';
const { createSlice } = require('@reduxjs/toolkit');
// const initialState = {
//     cartItems: [],
//     shippingAddress: {
//         address: '',
//         city: '',
//         postalCode: '',
//         country: ''
//     }
// };


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems : [],
        saveAddress : [],
        
        shippingAddress: [],
        variant  : [],
        category : "",
        price : ""
       
      },
    reducers: {
        addToCart(state, action) {
            const { product, qty } = action.payload;
      
            // Generate a unique identifier for the new cart item
            const cartItemId = uuidv4();
      
            // Check if the product already exists in the cart
            const existingProductIndex = state.cartItems.findIndex(
              (item) => item._id === product._id
            );
      
            if (existingProductIndex !== -1) {
              // If the product already exists, update its quantity
              state.cartItems[existingProductIndex].quantity += qty;
            } else {
              // If the product doesn't exist, add it to the cart with quantity 1
              state.cartItems.push({
                cartItemId, // Add the unique identifier
                ...product,
                quantity: qty,
              });
            }
      
            cogoToast.success("Added To Cart", { position: "bottom-left" });
          },
        // addToCart(state, action) {
        //     const product = action.payload;
        //     const existingProductIndex = state.cartItems.findIndex(item => 
        //         item.id === product.id &&
        //         item.selectedProductColor === product.selectedProductColor &&
        //         item.selectedProductSize === product.selectedProductSize
        //     );

        //     if (existingProductIndex !== -1) {
        //                     // If the product already exists, update its quantity
        //                     state.cartItems[existingProductIndex].qty += 1;
        //                 } else {
        //                     // If the product doesn't exist, add it to the cart with quantity 1
        //                     state.cartItems.push({
        //                         ...product,
        //                         qty: 1,
        //                         cartItemId: uuidv4()
        //                     });
        //                 }
          
        //         // If the product doesn't exist, add it to the cart with quantity 1
        //         // state.cartItems.push({
        //         //     ...product,
        //         //     cartItemId: uuidv4()
                  
        //         // });
            
                          
        //     cogoToast.success("Added To Cart", { position: "bottom-left" });
        //     return updateCart(state);
        // },
        
        
        

        
        
        // addToCart(state, action) {
        //            const product = action.payload;
        //            const existingProductIndex = state.cartItems.findIndex(item => 
        //                item.id === product.id &&
        //                item.selectedProductColor === product.selectedProductColor &&
        //                item.selectedProductSize === product.selectedProductSize
        //            );
        //            if (existingProductIndex !== -1) {
        //             // If the product already exists, update its quantity
        //             state.cartItems[existingProductIndex].qty += 1;
        //         } else {
        //             // If the product doesn't exist, add it to the cart with quantity 1
        //             state.cartItems.push({
        //                 ...product,
        //                 qty: 1
        //             });
        //         }
                  
        //             //    state.cartItems.push({
        //             //        ...product,
        //             //        quantity: 1,
        //             //        cartItemId: uuidv4()
        //             //    });
                     
               
        //            cogoToast.success("Added To Cart", { position: "bottom-left" });
        //            return updateCart(state);
        //        },  
        
        
        // addToCart(state, action) {
        //     const product = action.payload;
        //     const existingItemIndex = state.cartItems.findIndex(item =>
        //         item.id === product.id &&
        //         item.selectedProductColor === product.selectedProductColor &&
        //         item.selectedProductSize === product.selectedProductSize
        //     );
        
        //     if (existingItemIndex !== -1) {
        //         // If the item already exists in the cart, update its quantity
        //         state.cartItems[existingItemIndex].quantity += 1;
        //     } else {
        //         // If the item is not in the cart, add it as a new item
        //         state.cartItems.push({
        //             ...product,
        //             quantity: 1,
        //             cartItemId: uuidv4()
        //         });
        //     }
        //     cogoToast.success("Added To Cart", { position: "bottom-left" });
        // },
        // addToCart: (state, action) => {
        //     const product = action.payload
        //            state.carttItems.push({
        //             ...product,
        //         quantity: 1,
        //              cartItemId: uuidv4()
        //         });
        //         const { id } = action.payload;
        //         state.carttItems = state.carttItems.find((x) => x.id === product);
        //         console.log(state.cart);
                
          
          
        //         if (state.cart) {
        //           state.cart.quantity += 1;
        //           console.log(state.cart);
        //         }
        //   },
        
        // addToCart(state, action) {
        //     const product = action.payload;
        //     const existingItemIndex = state.carttItems.findIndex(item => 
        //         item.id === product.id 
        //         // item.selectedProductColor === product.selectedProductColor &&
        //         // item.selectedProductSize === product.selectedProductSize
        //     );
        
           
        //         state.carttItems.push({
        //             ...product,
        //             // quantity: 1,
        //             cartItemId: uuidv4()
        //         });
               
        //         if(existingItemIndex > 1){
        //             state.carttItems += 1;
                   
        //         }
                

                
               
            
        
        //     cogoToast.success("Added To Cart", { position: "bottom-left" });
        // },
        
        // addToCart(state, action) {
        //     console.log("Payload:", action.payload);
        //     const product = action.payload;
            
        //     if(!product.variation){
        //         const cartItem = state.cartItems.find(item => item.id === product.id);
        //         if(!cartItem){
        //             state.cartItems.push({
        //                 ...product,
        //                 quantity: product.quantity ? product.quantity : 1,
        //                 cartItemId: uuidv4()
        //             });
        //         } else {
        //             state.cartItems = state.cartItems.map(item => {
        //                 if(item.cartItemId === cartItem.cartItemId){
        //                     return {
        //                         ...item,
        //                         quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1
        //                     }
        //                 }
        //                 return item;
        //             })
        //         }

        //     } else {
        //         const cartItem = state.cartItems.find(
        //             item =>
        //                 item.id === product.id &&
        //                 product.selectedProductColor &&
        //                 product.selectedProductColor === item.selectedProductColor &&
        //                 product.selectedProductSize &&
        //                 product.selectedProductSize === item.selectedProductSize &&
        //                 (product.cartItemId ? product.cartItemId === item.cartItemId : true)
        //         );
        //         if(!cartItem){
        //             state.cartItems.push({
        //                 ...product,
        //                 quantity: product.quantity ? product.quantity : 1,
        //                 cartItemId: uuidv4()
        //             });
        //         } else if (cartItem !== undefined && (cartItem.selectedProductColor !== product.selectedProductColor || cartItem.selectedProductSize !== product.selectedProductSize)) {
        //             state.cartItems = [
        //                 ...state.cartItems,
        //                 {
        //                     ...product,
        //                     quantity: product.quantity ? product.quantity : 1,
        //                     cartItemId: uuidv4()
        //                 }
        //             ]
        //         } else {
        //             state.cartItems = state.cartItems.map(item => {
        //                 if(item.cartItemId === cartItem.cartItemId){
        //                     return {
        //                         ...item,
        //                         quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1,
        //                         selectedProductColor: product.selectedProductColor,
        //                         selectedProductSize: product.selectedProductSize
        //                     }
        //                 }
        //                 return item;
        //             });
        //         }
        //     }

        //     cogoToast.success("Added To Cart", {position: "bottom-left"});
        // },
        deleteFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.cartItemId !== action.payload);
            cogoToast.error("Removed From Cart", {position: "bottom-left"});
        },
        
        
        decreaseQuantity(state, action){
            const product = action.payload;
            if (product.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.cartItemId !== product.cartItemId);
                cogoToast.error("Removed From Cart", {position: "bottom-left"});
            } else {
                state.cartItems = state.cartItems.map(item =>
                    item.cartItemId === product.cartItemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
                cogoToast.warn("Item Decremented From Cart", {position: "bottom-left"});
            }
            return updateCart(state);
        },
        deleteAllFromCart(state){
            state.cartItems = []
        },
        saveShippingAddress(state, action) {
            state.shippingAddress = action.payload;
        },
        saveAddress1(state,action){
          state.saveAddress = action.payload
        },
        saveVariant(state,action){
          state.variant = action.payload
        },
        saveCategory(state,action){
          state.category = action.payload
        },
        savePrice(state,action){
          state.price = action.payload
        }
    },
});

export const { addToCart, deleteFromCart,saveShippingAddress,saveCategory,savePrice ,saveVariant,saveAddress1,increaseOrder, decreaseQuantity, deleteAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;


