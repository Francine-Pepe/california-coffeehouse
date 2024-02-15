import Banner from "./Banner";
import Navbar from "../Navbar/Navbar";
import TopBanner from "./TopBanner";
import CoffeehouseInformation from "./AboutUs";

function Header() {
  return (
    <section>
      <header className="header-container">
        <TopBanner />
        <Navbar />
        <Banner />
        <CoffeehouseInformation />
      </header>
    </section>
  );
}

export default Header;
