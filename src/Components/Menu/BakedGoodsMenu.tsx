import MenuProps from "./MenuProps";
import { menuBakedGoodsContentTitle, menuBakedGoodsContent } from "../../Data";
import TitleProps from "./TitleProps";

function BakedGoodsMenu() {
  return (
    <div className="individual-menu">
      <TitleProps data={menuBakedGoodsContentTitle} />
      <MenuProps data={menuBakedGoodsContent} />
    </div>
  );
}

export default BakedGoodsMenu;
