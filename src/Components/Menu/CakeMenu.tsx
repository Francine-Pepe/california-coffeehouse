import MenuProps from "./MenuProps";
import { menuCakeContentTitle, menuCakeContent } from "../../Data";
import TitleProps from "./TitleProps";

function CakeMenu() {
  return (
    <div className="individual-menu">
      {menuCakeContentTitle.map(({ icon, title }, index) => {
        return (
          <div key={index}>
            <TitleProps icon={icon} title={title} />
          </div>
        );
      })}
      {menuCakeContent.map(({ product, price }, index) => {
        return (
          <div key={index}>
            <MenuProps product={product} price={price} />
          </div>
        );
      })}
    </div>
  );
}

export default CakeMenu;
