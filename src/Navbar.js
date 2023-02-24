import { useMyContext } from "./Context";
import { FaBars } from "react-icons/fa";

import logo from "./images/logo.svg";
function Navbar() {
  const { showSide, openSide, closeSide } = useMyContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img className="nav-logo" src={logo} alt="stripe" />
          <button className="btn toggle-btn" onClick={openSide}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn">products</button>
          </li>
          <li>
            <button className="link-btn">developers</button>
          </li>
          <li>
            <button className="link-btn">company</button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar;
