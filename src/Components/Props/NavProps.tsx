import { NavLink } from "react-router-dom";
import "../../Styles/styles.sass";
import { useState } from "react";

function NavProps(props: { id: any; link: any; name: any }) {
  const { id, link, name } = props;
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <nav>
      <ul>
        <li id={link} onClick={() => isOpen || toggle}>
          <a href={link} >
            {name}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavProps;
