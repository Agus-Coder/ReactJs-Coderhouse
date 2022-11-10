import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  let greeting = "Welcome to Aurica's Store!";
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detail/:productId" element={<ItemDetail />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
