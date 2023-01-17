import { useState } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Nav from "./components/Nav/Nav";
import OrderList from "./components/OrderList/OrderList";
import Popup from "./components/Popup/Popup";
import CartProvider from "./store/CartProvider";

function App() {
  const [isOverlay, setOverlay] = useState(false);

  const closeOverlayHandler = () => {
    setOverlay(false);
  };

  const openOverlayHandler = () => {
    setOverlay(true);
  };

  return (
    <CartProvider>
      {isOverlay && <Popup onClose={closeOverlayHandler} /> }
      <Nav onOpen={openOverlayHandler}></Nav>
      <section className="main">
        <Description></Description>
        <OrderList></OrderList>
      </section>
    </CartProvider>
  );
}

export default App;
