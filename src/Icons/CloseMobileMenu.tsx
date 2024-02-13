import closeMenu from "../Assets/Close mobile menu.svg";

function CloseMobileMenu() {
  return (
    <div className="nav-button-toggle">
      <img src={closeMenu} alt="close the menu" />
    </div>
  );
}

export default CloseMobileMenu;
