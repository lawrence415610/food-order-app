import ReactDOM from "react-dom";
import style from "./Popup.module.css";
import CartContext from "../../store/cartContext";
import { useContext } from "react";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div className={style.overlay}>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <li key={item.id} className={style.overlayitem}>
              <div className={style.popupleft}>
                <h3>{item.name}</h3>
                <span>{`$ ${item.price}`}</span>
                <span>{`x ${item.amount}`}</span>
              </div>
              <div className={style.popupright}>
                <button onClick={removeItemHandler.bind(null, item.id)}>
                  -
                </button>
                <button onClick={addItemHandler.bind(null, item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={style.afterline}></div>
      <div className={style.totalamount}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={style.controlbtn}>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("portal");
function Popup(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay onClose={props.onClose} />,
        portalElement
      )}
    </>
  );
}

export default Popup;
