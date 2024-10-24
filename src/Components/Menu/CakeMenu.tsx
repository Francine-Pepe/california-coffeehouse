import MenuProps from "./MenuProps";
import { menuCakeContentTitle, menuCakeContent } from "../../Data";
import TitleProps from "./TitleProps";

function CakeMenu() {
  return (
    <div className="individual-menu">
      <TitleProps data={menuCakeContentTitle} />
      <MenuProps data={menuCakeContent} />
    </div>
  );
}

export default CakeMenu;
