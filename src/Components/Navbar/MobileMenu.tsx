import NavProps from "./NavProps";
import { navHeader } from "../../Data";

function MobileMenu() {
  return (
    <>
      <nav className="mobile-nav-container">
        {navHeader.map((data, index) => {
          return (
            <div className="mobile-nav" key={index}>
              <NavProps id={data.id} name={data.name} link={data.link} />
            </div>
          );
        })}
      </nav>
    </>
  );
}

export default MobileMenu;
