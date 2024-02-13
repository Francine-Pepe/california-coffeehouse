import React from "react";
import Phone from "../../Icons/Phone";
import Facebook from "../../Icons/Facebook";
import Instagram from "../../Icons/Instagram";

function TopBanner() {
  return (
    <div className="top-banner-container">
      <div className="top-banner-children">
        <Phone />
        <a href="+4940123456789098">+49 40 12345 6789098</a>
      </div>
      <div className="top-banner-children">
        <Facebook />
        <Instagram />
      </div>
    </div>
  );
}

export default TopBanner;
