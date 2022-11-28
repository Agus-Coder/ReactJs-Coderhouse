import { useState, useContext } from "react";
import { createContext } from "react";

const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.some(el => el.id === id);
  };

  const addToCart = (itemToAdd, quantity) => {
    if (isInCart(itemToAdd.id)) {
      const updatedIndex = cartList.findIndex((el) => el.itemToAdd.id === itemToAdd.id);
      cartList[updatedIndex].quantity =
        cartList[updatedIndex].quantity + quantity;
      setCartList([...cartList]);
    } else {
      const newItemToAdd = {
        itemToAdd,
        quantity,
      };
      setCartList([...cartList, newItemToAdd]);
    }
  };


  const totalItems = () => {
    const totalItems = cartList.reduce(
      (total, item) => (total = total + item.quantity),
      0
    );
    return totalItems;
  };

  const totalPrice = () => {
    return cartList.reduce(
      (total, el) => total + el.quantity * el.item.price,
      0
    );
  };

  const deleteItem = (id) => {
    const updatedCart = cartList.filter((element) => element.item.id !== id);
    setCartList(updatedCart);
  };


  const emptyCart = () => {
    setCartList([]);
  };

  const allContextsFunctions = {
    cartList,
    isInCart,
    addToCart,
    totalItems,
    totalPrice,
    deleteItem,
    emptyCart
  }

  return (
    <cartContext.Provider value={allContextsFunctions}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
