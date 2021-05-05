import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

function Menu() {
  return (
    <nav className="menu">
      <div className="container mx-auto">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" id="logo" />
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
