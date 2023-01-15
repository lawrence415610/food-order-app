import style from "./Nav.module.css";
import Cart from "./Cart";

const Nav = props => {
  return (
    <section className={style.nav}>
      <h1>ReactManaga</h1>
      <Cart onOpen={props.onOpen}/>
    </section>
  );
};

export default Nav;
