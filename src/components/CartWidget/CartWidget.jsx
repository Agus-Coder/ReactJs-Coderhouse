import { BiShoppingBag } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

function CartWidget() {
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <BiShoppingBag size={30} />
    </IconContext.Provider>
  );
}

export default CartWidget;
