import React from "react";
import Page404 from "./Page404";
import { useNavigate } from "react-router-dom";

function Shop() {
  let navigate = useNavigate();

  return (
    <div
      className="shop-container container"
      id="shop"
      onClick={() => navigate("/#shop")}
    ></div>
  );
}

export default Shop;
