import { useMyContext } from "./Context";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";

function Sidebar() {
  const { closeSide, showSide } = useMyContext();
  return (
    <aside className={`sidebar-wrapper ${showSide && "show"}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSide}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, idx) => (
            <article key={idx}>
              <h4>{item.page}</h4>
              <div className="sidebar-sublinks">
                {item.links.map((link, idx) => (
                  <a key={idx} href={link.url}>
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
