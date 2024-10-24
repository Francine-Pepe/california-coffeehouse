import MenuProps from "./MenuProps";
import { menuTeaContentTitle, menuTeaContent } from "../../Data";
import TitleProps from "./TitleProps";

function TeaMenu() {
  return (
    <div className="individual-menu">
      <TitleProps data={menuTeaContentTitle} />
      <MenuProps data={menuTeaContent} />
    </div>
  );
}

export default TeaMenu;
