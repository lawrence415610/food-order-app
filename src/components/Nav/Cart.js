import style from "./Cart.module.css";
import CartContext from "../../store/cartContext";
import { useContext } from "react";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let itemAmount = 0;
  cartCtx.items.forEach((item) => {
    itemAmount += item.amount;
  });
  return (
    <button onClick={props.onOpen} className={style.cart}>
      <span></span>
      <span>Your Cart</span>
      <span className={style.num}>{itemAmount}</span>
    </button>
  );
};

export default Cart;
