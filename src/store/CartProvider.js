import { useReducer } from "react";
import CartContext from "./defaultContext";


const initialState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === "ADD"){
        
    }
};

const CartProvider = () => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addItemAction = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemAction = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemAction,
    removeItem: removeItemAction,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
