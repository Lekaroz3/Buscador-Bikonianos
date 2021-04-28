import { Link } from "react-router-dom";
import logo from "../../imagenes/logo.png";

function Menu() {
  return (
    <nav className="navbar my-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" id="logo" />
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
