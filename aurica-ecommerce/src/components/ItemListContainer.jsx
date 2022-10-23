import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-5 divdiv">
          <h2 className="welcome-message">{greeting}</h2>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
