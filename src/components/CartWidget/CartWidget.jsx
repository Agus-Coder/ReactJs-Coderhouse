import { BiShoppingBag } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { useCartContext } from "../../Context/CartContext";

function CartWidget() {
  const { totalItems } = useCartContext();
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <div className="d-flex flex-row text-white">
        <h4>{totalItems()}</h4>
        <BiShoppingBag size={30} />
      </div>
    </IconContext.Provider>
  );
}

export default CartWidget;
