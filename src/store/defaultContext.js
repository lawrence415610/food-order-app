import React from "react";

const CartContext = React.createContext({
    totalAmount: 0,
    items:[],
    addItems: item => {},
    removeItems: id => {}
});

export default CartContext;