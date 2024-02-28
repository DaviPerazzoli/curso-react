import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0,
    productsTotalQuantity: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            // Verificar se o produto está no carrinho
            const productIsAlreadyInCard = state.products.some(product => product.id === action.payload.id)

            //Se estiver, aumentar sua quantidade em 1
            if(productIsAlreadyInCard){
                return { 
                    ...state, 
                    products: state.products.map(
                    (product) => 
                    product.id === action.payload.id ? 
                    {...product, quantity: product.quantity + 1} : 
                    product
                    ),
                    productsTotalPrice: state.productsTotalPrice + action.payload.price,
                    productsTotalQuantity: state.productsTotalQuantity + 1
                }
            }

            //Se não estiver, adicioná-lo
            return {
                ...state,
                products: [
                    ...state.products,
                    {...action.payload, quantity: 1}
                ],
                productsTotalPrice: state.productsTotalPrice + action.payload.price,
                productsTotalQuantity: state.productsTotalQuantity + 1
            }
        case CartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product=> product.id !== action.payload.id),
                productsTotalPrice: state.productsTotalPrice - action.payload.price * action.payload.quantity,
                productsTotalQuantity: state.productsTotalQuantity - action.payload.quantity
            };
        case CartActionTypes.DECREASE_PRODUCT:
            if(action.payload.quantity < 2){
                return {
                    ...state,
                products: state.products.filter(
                    product=>{
                    if(product.id !== action.payload.id){
                        return product;
                    }
                }),
                productsTotalPrice: state.productsTotalPrice - action.payload.price,
                productsTotalQuantity: state.productsTotalQuantity - 1
                }
            }
            
            return {
                ...state,
                products: state.products.map(
                product=>{
                if(product.id !== action.payload.id){
                    return product;
                }else{
                    product.quantity = product.quantity - 1;
                    return product;
                }
                }),
                productsTotalPrice: state.productsTotalPrice - action.payload.price,
                productsTotalQuantity: state.productsTotalQuantity - 1
            }

    default:
        return state;
    }
}

export default cartReducer;