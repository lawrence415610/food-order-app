import { useState } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Nav from "./components/Nav/Nav";
import OrderList from "./components/OrderList/OrderList";
import Popup from "./components/Popup/Popup";

function App() {
  const [isOverlay, setOverlay] = useState(true);

  const closeOverlayHandler = () => {
    setOverlay(false);
  };

  const openOverlayHandler = () => {
    setOverlay(true);
  };

  return (
    <>
      {isOverlay ? <Popup onClose={closeOverlayHandler} /> : ""}
      <Nav onOpen={openOverlayHandler}></Nav>
      <section className="main">
        <Description></Description>
        <OrderList></OrderList>
      </section>
    </>
  );
}

export default App;
