import MenuProps from "./MenuProps";
import { menuTeaContentTitle, menuTeaContent } from "../../Data";
import TitleProps from "./TitleProps";

function TeaMenu() {
  return (
    <div className="individual-menu">
      {menuTeaContentTitle.map(({ icon, title }, index) => {
        return (
          <div key={index}>
            <TitleProps icon={icon} title={title} />
          </div>
        );
      })}
      {menuTeaContent.map(({ product, price }, index) => {
        return (
          <div key={index}>
            <MenuProps product={product} price={price} />
          </div>
        );
      })}
    </div>
  );
}

export default TeaMenu;
