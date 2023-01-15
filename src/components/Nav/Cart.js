import style from "./Cart.module.css";
const Cart = (props) => {
  return (
    <button onClick={props.onOpen} className={style.cart}>
      <span></span>
      <span>Your Cart</span>
      <span className={style.num}>32</span>
    </button>
  );
};

export default Cart;
