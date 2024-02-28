import MenuProps from "./MenuProps";
import { menuBakedGoodsContentTitle, menuBakedGoodsContent } from "../../Data";
import TitleProps from "./TitleProps";

function BakedGoodsMenu() {
  return (
    <div className="individual-menu">
      {menuBakedGoodsContentTitle.map(({ icon, title }, index) => {
        return (
          <div key={index}>
            <TitleProps icon={icon} title={title} />
          </div>
        );
      })}
      {menuBakedGoodsContent.map(({ product, price }, index) => {
        return (
          <div key={index}>
            <MenuProps product={product} price={price} />
          </div>
        );
      })}
    </div>
  );
}

export default BakedGoodsMenu;
