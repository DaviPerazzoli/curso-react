import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    productsTotalPrice: 0,
    productsTotalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productIsAlreadyInCard = state.products.some(product => product.id === action.payload.id);
            
            if(productIsAlreadyInCard){
                //Se estiver, aumentar sua quantidade em 1
                state.products = state.products.map(
                    (product) => 
                    product.id === action.payload.id ? 
                    {...product, quantity: product.quantity + 1} : 
                    product
                )
            }else{
                //Se não estiver, adicioná-lo
                state.products = [
                    ...state.products,
                    {...action.payload, quantity: 1}
                ]
            }

            state.productsTotalPrice += action.payload.price;
            state.productsTotalQuantity = state.productsTotalQuantity + 1
        },
        removeProduct: (state,action) => {
            state.products = state.products.filter(product=> product.id !== action.payload.id);
            state.productsTotalPrice = state.productsTotalPrice - action.payload.price * action.payload.quantity;
            state.productsTotalQuantity = state.productsTotalQuantity - action.payload.quantity;
        },
        decreaseProduct: (state,action) => {
            if(action.payload.quantity < 2){
                //Se clicar para diminuir com 1, exclui o item do carrinho
                state.products = state.products.filter(
                    (product) => {
                        if(product.id !== action.payload.id){
                            return product;
                        }
                    }
                );
            }else{
                state.products = state.products.map(
                    (product) => {
                        if(product.id !== action.payload.id){
                            return product;
                        }else{
                            product.quantity = product.quantity - 1;
                            return product;
                        }
                    }
                )
            }

            state.productsTotalPrice = state.productsTotalPrice - action.payload.price;
            state.productsTotalQuantity = state.productsTotalQuantity - 1;
        }
    }
});

export const { addProduct , removeProduct , decreaseProduct } = cartSlice.actions;

export default cartSlice.reducer;