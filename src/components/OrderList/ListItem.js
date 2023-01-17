import React, { useContext, useRef } from "react";
import CartContext from "../../store/cartContext";
import style from "./ListItem.module.css";
function ListItem(props) {
  const amountValue = useRef();
  const cartCtx = useContext(CartContext);

  const amountSubmitHandler = (event) => {
    event.preventDefault();
    const enteredItemAmount = +amountValue.current.value;
    cartCtx.addItem({
      id: props.id,
      des: props.des,
      price: props.price,
      amount: enteredItemAmount,
      name: props.name,
    });
  };

  return (
    <li className={style.listitem} key={props.id}>
      <div className={style.listcontent}>
        <div className={style.itemleft}>
          <h3 className={style.manganame}>{props.name}</h3>
          <div className={style.mangades}>{props.des}</div>
          <h3 className={style.mangaprice}>{props.price}</h3>
        </div>
        <div className={style.itemright}>
          <form className={style.amount} onSubmit={amountSubmitHandler}>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              name="amount"
              ref={amountValue}
              id={`amount ${props.id}`}
              min="1"
              max="5"
              step="1"
            ></input>
            <button className={style["btn--add"]}>+ Add</button>
          </form>
        </div>
      </div>
      <div className={style.bottomline}></div>
    </li>
  );
}

export default ListItem;
