import MenuProps from "./MenuProps";
import { menuCoffeeContentTitle, menuCoffeeContent } from "../../Data";
import TitleProps from "./TitleProps";

function CoffeeMenu() {
  return (
    <div className="individual-menu">
      {menuCoffeeContentTitle.map(({ icon, title }, index) => {
        return (
          <div key={index}>
            <TitleProps icon={icon} title={title} />
          </div>
        );
      })}
      {menuCoffeeContent.map(({ product, price }, index) => {
        return (
          <div key={index}>
            <MenuProps product={product} price={price} />
          </div>
        );
      })}
    </div>
  );
}

export default CoffeeMenu;
