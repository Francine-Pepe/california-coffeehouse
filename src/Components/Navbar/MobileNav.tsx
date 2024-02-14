import { useState } from "react";
import CloseMobileMenu from "../../Icons/CloseMobileMenu";
import OpenMobileMenu from "../../Icons/OpenMobileMenu";
import MobileMenu from "./MobileMenu";
import Logo from "../../Assets/Logo.svg";

function MobileNav() {
  const [show, toggleShow] = useState(false);

  return (
    <div className="mobile-nav-container">
      <button
        onClick={() => toggleShow(!show)}
        className="button-mobile-navbar"
      >
        <a href={"/"}>
          <img src={Logo} alt={"Logo"} />
        </a>
        {show ? <CloseMobileMenu /> : <OpenMobileMenu />}
      </button>
      <div className="mobile-nav">{show && <MobileMenu />}</div>
    </div>
  );
}

export default MobileNav;
