import React from "react";
import style from "./ListItem.module.css";
function ListItem(props) {
  return (
    <li className={style.listitem}>
      <div className={style.listcontent}>
        <div className={style.itemleft}>
          <h3 className={style.manganame}>{props.name}</h3>
          <div className={style.mangades}>{props.des}</div>
          <h3 className={style.mangaprice}>{props.price}</h3>
        </div>
        <div className={style.itemright}>
          <div className={style.amount}>
            <label htmlFor="amount">Amount:</label>
            <input type="number" name="amount"></input>
          </div>
          <button className={style["btn--add"]}>+ Add</button>
        </div>
      </div>
      <div className={style.bottomline}></div>
    </li>
  );
}

export default ListItem;
