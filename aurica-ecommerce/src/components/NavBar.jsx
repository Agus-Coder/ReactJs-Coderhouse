import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark text-white d-flex justify-content-center">
      <ul className="d-flex flex-row align-items-center justify-content-between">
        <li>
          <h3 className="brand"><a href="#">Aurica</a></h3>
        </li>
        <li><a href="#">Blankets</a></li>
        <li><a href="#">Clothes</a></li>
        <li><a href="#">About Aurica</a></li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
