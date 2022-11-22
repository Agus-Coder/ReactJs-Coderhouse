import { useContext, cartContext } from "react";

export const Cart = () => {
  const { cartList, emptyCart } = useContext(cartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartList.map((product) => (
          <li key={product.id}>
            <img src={product.foto} className="w-25" />
            Name: {product.name} - Price {product.price} - Quantity:{" "}
            {product.cantidad}
          </li>
        ))}
      </ul>
      <button onClick={emptyCart}>Delete All Items</button>
    </div>
  );
};