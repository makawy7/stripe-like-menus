import { useMyContext } from "./Context";
import { FaBars } from "react-icons/fa";
import sublinks from "./data";

import logo from "./images/logo.svg";
function Navbar() {
  const { openSide, openSub, closeSub, setSublink, styleRef } = useMyContext();

  const handleHoverIn = (e) => {
    const [currentSub] = sublinks.filter(
      (sub) => sub.page === e.target.textContent
    );
    setSublink(currentSub);

    openSub();
    const left = e.target.getBoundingClientRect().left;
    const halfWidth = e.target.getBoundingClientRect().width / 2;
    // styleRef.current.style.left = `${left + halfWidth}px`;
    styleRef.current = left + halfWidth;
  };

  const handleHoveOut = (e) => {
    const { relatedTarget } = e;
    if (relatedTarget && relatedTarget.tagName !== "ASIDE") {
      closeSub();
    }
  };

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
            <button
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoveOut}
              className="link-btn"
            >
              products
            </button>
          </li>
          <li>
            <button
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoveOut}
              className="link-btn"
            >
              developers
            </button>
          </li>
          <li>
            <button
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoveOut}
              className="link-btn"
            >
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar;
