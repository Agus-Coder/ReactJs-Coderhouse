import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  let greeting = "Welcome to Aurica's Store!"
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer greeting={greeting}/>
    </React.Fragment>
  );
}

export default App;
