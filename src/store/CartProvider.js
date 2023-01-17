import { useReducer } from "react";
import CartContext from "./cartContext";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    let updatedItems = [...state.items];
    const itemIndex = updatedItems.findIndex(
      (item) => item.id === action.item.id
    );
    if (itemIndex === -1) {
      updatedItems.push(action.item);
    } else {
      const currentItem = updatedItems[itemIndex];
      const updatedItem = {
        ...currentItem,
        amount: currentItem.amount + action.item.amount,
      };
      updatedItems[itemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const selectedItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const selectedItem = state.items[selectedItemIndex];
    const updatedTotalAmount = state.totalAmount - selectedItem.price;
    let updatedItems = [...state.items];
    if (selectedItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...selectedItem, amount: selectedItem.amount - 1 };
      updatedItems[selectedItemIndex] = updatedItem
    }

    return {
      totalAmount: updatedTotalAmount,
      items: updatedItems,
    };
  }
};

const CartProvider = (props) => {
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
