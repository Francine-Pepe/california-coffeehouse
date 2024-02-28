import MenuProps from "./MenuProps";
import { menuSandwichesContentTitle, menuSandwichesContent } from "../../Data";
import TitleProps from "./TitleProps";

function SandwichesMenu() {
  return (
    <div className="individual-menu">
      {menuSandwichesContentTitle.map(({ icon, title }, index) => {
        return (
          <div key={index}>
            <TitleProps icon={icon} title={title} />
          </div>
        );
      })}
      {menuSandwichesContent.map(({ product, price, smallText }, index) => {
        return (
          <div key={index}>
            <MenuProps product={product} price={price} />
            <small>{smallText}</small>
          </div>
        );
      })}
    </div>
  );
}

export default SandwichesMenu;
