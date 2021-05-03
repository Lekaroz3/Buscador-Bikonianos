import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

function Menu() {
  return (
    <nav className="menu">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" id="logo" />
      </Link>
    </nav>
  );
}

export default Menu;
