import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark text-white d-flex justify-content-center">
      <ul className="d-flex flex-row align-items-center justify-content-between">
        <li>
          <h3 className="brand">
            <Link to={"/"}>
              <h3>Aurica</h3>
            </Link>
          </h3>
        </li>
        <li>
          <Link to={"/category"}>
            <p>Blankets</p>
          </Link>
        </li>
        <li>
          <Link to={"/category"}>
            <p>Clothes</p>
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <p>About Aurica</p>
          </Link>
        </li>
        <li>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
