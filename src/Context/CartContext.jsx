import { useState } from "react";
import { createContext } from "react";

const cartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (itemToAdd) => {
    setCartList([...cartList, itemToAdd]);
  };

  const emptyCart = () => {
    setCartList([]);
  };

  return (
    <cartContext.Provider value={{ cartList, addToCart, emptyCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
