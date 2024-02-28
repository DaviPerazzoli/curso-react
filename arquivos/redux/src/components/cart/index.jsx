import { useSelector } from 'react-redux';

// Styles
import * as Styles from "./styles";

import CartItem from '../cart-item/index';


const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const {products, productsTotalPrice} = useSelector((rootReducer) => rootReducer.cartReducer)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
          {products.map((product)=>(
            <CartItem product={product}/>
          ))}
        <Styles.CartTotal>R${productsTotalPrice.toFixed(2)}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
