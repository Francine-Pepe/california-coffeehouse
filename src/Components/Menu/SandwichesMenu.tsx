import MenuProps from "./MenuProps";
import { menuSandwichesContentTitle, menuSandwichesContent } from "../../Data";
import TitleProps from "./TitleProps";

function SandwichesMenu() {
  return (
    <div className="individual-menu">
      <TitleProps data={menuSandwichesContentTitle} />

      <MenuProps data={menuSandwichesContent} />
      {menuSandwichesContent.map(({ smallText }, index) => {
        return (
          <div key={index}>
            <small>{smallText}</small>
          </div>
        );
      })}
    </div>
  );
}

export default SandwichesMenu;
