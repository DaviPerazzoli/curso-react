import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Actions
import { loginUser , logoutUser } from '../../redux/user/slice';

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer);
  const { productsTotalQuantity } = useSelector(rootReducer => rootReducer.cartReducer);

  const dispatch = useDispatch();

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({name: 'Davi', email: 'davi@perazzoli.com'}));
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser?(<div onClick={handleLogoutClick}>Sair</div>):(<div onClick={handleLoginClick}>Login</div>)}
        <div onClick={handleCartClick}>Carrinho ({productsTotalQuantity})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
