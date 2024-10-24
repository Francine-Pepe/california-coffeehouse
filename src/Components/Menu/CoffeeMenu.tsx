import MenuProps from "./MenuProps";
import { menuCoffeeContentTitle, menuCoffeeContent } from "../../Data";
import TitleProps from "./TitleProps";

function CoffeeMenu() {
  return (
    <div className="individual-menu">
      <TitleProps data={menuCoffeeContentTitle} />
      <MenuProps data={menuCoffeeContent} />
    </div>
  );
}

export default CoffeeMenu;
