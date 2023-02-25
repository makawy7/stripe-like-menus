import { useMyContext } from "./Context";

function Submenu() {
  const { showSub, sublink } = useMyContext();
  return (
    <aside className={`submenu ${showSub && sublink && "show"}`}>
      <section>
        {showSub && sublink && (
          <>
            <h4>{sublink.page}</h4>
            <div className="submenu-center col-4">
              {sublink.links.map((link, idx) => (
                <a key={idx} href={link.url}>
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </>
        )}
      </section>
    </aside>
  );
}

export default Submenu;
