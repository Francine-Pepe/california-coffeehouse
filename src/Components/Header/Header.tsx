import Banner from "./Banner";
import Navbar from "../Navbar/Navbar";
import TopBanner from "./TopBanner";
import CoffeehouseInformation from "./AboutUs";
import Slider from "../Slider";
import TextProps from "../Props/TextProps";
import { BannerText } from "../../Data";

function Header() {
  return (
    <section>
      <header className="header-container">
        <TopBanner />
        <Navbar />
        <TextProps data={BannerText} />
        {/* <Banner /> */}
        <Slider />
        <CoffeehouseInformation />
      </header>
    </section>
  );
}

export default Header;
