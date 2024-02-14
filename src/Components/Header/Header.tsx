import Banner from "./Banner";
import Navbar from "../Navbar/Navbar";
import TopBanner from "./TopBanner";

function Header() {
  return (
    <header className="header-container">
      <TopBanner />
      <Navbar />
      <Banner />
    </header>
  );
}

export default Header;
