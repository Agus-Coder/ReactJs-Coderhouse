import { useCartContext } from "../../Context/CartContext";
import EmptyCart from "./EmptyCart";

export const Cart = () => {
  const { cartList, emptyCart, totalItems } = useCartContext()

  return totalItems() === 0 ? (
    <EmptyCart totalItems={totalItems()}/>
  ) : (
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
