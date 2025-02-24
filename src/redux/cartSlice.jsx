import { createSlice } from "@reduxjs/toolkit";

const loadState = () =>{
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : {products:[],totalQuantity:0,totalPrice:0}
}

const saveState = (state)=>{
    localStorage.setItem('cart',JSON.stringify(state))
}

const initialState = loadState()



const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const newItem = action.payload
            const itemIndex = state.products.find((item)=>item.id === newItem.id)
            
            if (itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price
                
            }else{
                state.products.push({
                    id:newItem.id,
                    name : newItem.name,
                    price: newItem.price,
                    quantity : 1,
                    totalPrice:newItem.price,
                    imageURL:newItem.imageURL
                })
                
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
            saveState(state)
            
        },
        removeCart(state,action){
            const findItem = state.products.find((item)=>item.id === action.payload)
            let deleteIndex =  state.products.findIndex((item)=>item.id === action.payload)
            if (findItem) {
                state.totalPrice -= findItem.price
                state.products.splice(deleteIndex,1)
                state.totalQuantity--;
                // console.log(deleteIndex)
                saveState(state)
            }
        },
        incriseQuantity(state,action){
            const id = action.payload
            const findItem = state.products.find((item)=>item.id === id)
            if (findItem) {
                findItem.quantity++;
                findItem.totalPrice += findItem.price;
                state.totalQuantity++;
                state.totalPrice += findItem.price
                saveState(state)
            }
            
        },
        dicriseQuantity(state,action){
            const id = action.payload
            const findItem = state.products.find((item)=>item.id === id)
            if (findItem) {
                findItem.quantity--;
                findItem.totalPrice -= findItem.price;
                state.totalQuantity--;
                state.totalPrice -= findItem.price
                saveState(state)
            }
            
        }
    },
})

export const {addToCart,removeCart,incriseQuantity,dicriseQuantity} = cartSlice.actions;
export default cartSlice.reducer