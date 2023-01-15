import ReactDOM from "react-dom";
import style from "./Popup.module.css";

const Backdrop = props => {
  return <div className={style.backdrop} onClick={props.onClose}></div>;
};

const Overlay = props => {
  return (
    <div className={style.overlay}>
      <ul>
        <li className={style.overlayitem}>
          <div className={style.popupleft}>
            <h3>Manga</h3>
            <span>$ 22.23</span>
            <span>x 2</span>
          </div>
          <div className={style.popupright}>
            <button>-</button>
            <button>+</button>
          </div>
        </li>
      </ul>
      <div className={style.afterline}></div>
      <div className={style.totalamount}>
        <span>Total Amount</span>
        <span>45.98</span>
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
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<Overlay onClose={props.onClose}/>, portalElement)}
    </>
  );
}

export default Popup;
