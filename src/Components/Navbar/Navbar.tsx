import { navHeader } from "../../Data";
import NavProps from "../Props/NavProps";
import Logo from "../../Assets/Logo.svg";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <nav>
      {navHeader.map((data, index) => {
        return (
          <div className="nav-container" key={index}>
            <NavProps id={data.link} name={data.name} link={data.link} />
          </div>
        );
      })}
      <div className="logo-container">
        <a href={"/"}>
          <img src={Logo} alt={"Logo"} />
        </a>
      </div>
      <MobileNav />
    </nav>
  );
}

export default Navbar;
