import React from "react";
import weth from "../assets/weth.png";
import "./Nftcard.css";

function Nftcard({ id, name, traits, image }) {
  return (
    <div className="Nftcard">
      <img src={image} alt="" className="nftImg" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id"> *#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} className="wethImg" alt="weth-icon" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
}

export default Nftcard;
