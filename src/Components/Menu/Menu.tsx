import React from "react";
import CoffeeMenu from "./CoffeeMenu";
import TeaMenu from "./TeaMenu";
import CakeMenu from "./CakeMenu";
import SandwichesMenu from "./SandwichesMenu";
import BakedGoodsMenu from "./BakedGoodsMenu";
import LateralInfo from "./LateralInfo";
import AnimatedImage from "../AnimatedImage";
import Shop from "../Shop";

function Menu() {
  return (
    <section className="menu-container" id="menu">
      <div className="menu-animated-image">
        {/* <AnimatedImage /> */}
        <h1>Menu</h1>
      </div>

      <div className="menu menu-wrapped" >
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
