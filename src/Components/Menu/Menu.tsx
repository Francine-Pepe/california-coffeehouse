import React from "react";
import CoffeeMenu from "./CoffeeMenu";
import TeaMenu from "./TeaMenu";
import CakeMenu from "./CakeMenu";
import SandwichesMenu from "./SandwichesMenu";
import BakedGoodsMenu from "./BakedGoodsMenu";
import LateralInfo from "./LateralInfo";
import AnimatedImage from "../AnimatedImage";

function Menu() {
  return (
    <section className="menu-container">
      <div className="menu-animated-image">
        <AnimatedImage />
      </div>

      <div className="menu">
        <CoffeeMenu />
        <TeaMenu />
        <CakeMenu />
        <SandwichesMenu />
        <BakedGoodsMenu />
        <LateralInfo />
      </div>
    </section>
  );
}

export default Menu;
