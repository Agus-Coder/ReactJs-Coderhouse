import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  let greeting = "Welcome to Aurica's Store!";
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={greeting} />} />
        <Route path="/category/:catId" element={<ItemListContainer greeting={greeting} />} />
        <Route path="/detail/:productId" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart  />} />
      </Routes>
    </>
  );
}

export default App;
