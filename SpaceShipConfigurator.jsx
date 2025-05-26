import React, { useState } from "react";
import "./space.css";

export default function SpaceShipconfigurator() {
  const [selectedColor, setSelectedColor] = useState("Snow");
  const [selectedPower, setSelectedPower] = useState("150");
  const [warpDrive, setWarpDrive] = useState("NO");
  const [optionPackage, setOptionPackage] = useState("Basic");

  const basePrice = 1000;

  const colorPrices = {
    Snow: 0, Volcano: 100, Sky: 100,
  };

  const powerPrices = {
    "100": 0, "150": 200, "200": 500,
  };

  const warpDrivePrices = {
    NO: 0,
    YES: 1000,
  };

  const packagePrices = {
    Basic: 0,
    Sport: 100,
    Lux: 500,
  };

  const total =
    basePrice +
    colorPrices[selectedColor] +
    powerPrices[selectedPower] +
    warpDrivePrices[warpDrive] +
    packagePrices[optionPackage];

  return (
    <div id="Rectangle">
      <h1>Spaceship configurator</h1>

      <label id="label1">Select color:</label>
      <div id="component1" className={` ${selectedColor === "Snow" ? "selected" : ""}`} onClick={() => setSelectedColor("Snow")}>
        <div id="rectangle15" className="component1"></div>
        <div id="color-label">Snow</div>
        <div id="price-label">+0€</div>
      </div>
      <div id="component2" className={` ${selectedColor === "Volcano" ? "selected" : ""}`} onClick={() => setSelectedColor("Volcano")}>
        <div id="rectangle15" className="component2"></div>
        <div  id="color-label">Volcano</div>
        <div id="price-label">+100€</div>
      </div>
      <div id="component3" className={` ${selectedColor === "Sky" ? "selected" : ""}`} onClick={() => setSelectedColor("Sky")}>
        <div id="rectangle15" className="component3"></div>
        <div id="color-label">Sky</div>
        <div id="price-label">+500€</div>
      </div>

      <div id="rectangle11"></div>
      <label id="bprice" className="label">Base price:</label>
      <div id="oprice" className="op1">1000€</div>
      <label id="clor" className="label">Color:</label>
      <div id="oprice" className="op2">+{colorPrices[selectedColor]}€</div>
      <label id="pwer" className="label">Power:</label>
      <div id="oprice" className="op3">+{powerPrices[selectedPower]}€</div>
      <label id="wdrive" className="label">Warp drive:</label>
      <div id="oprice" className="op4">+{warpDrivePrices[warpDrive]}€</div>
      <label id="opackage" className="label">Option Package:</label>
      <div id="oprice" className="op5">+{packagePrices[optionPackage]}€</div>
      <div id="line"></div>
      <div id="total">Total:</div>
      <div id="calc">{total}€</div>

      <label id="label2">Select power:</label>
      <div id="component5" className={selectedPower === "100" ? "selected" : ""} onClick={() => setSelectedPower("100")}>
        <div id="power">100 MW</div>
        <div id="pricePower">+0€</div>
      </div>
      <div id="component6" className={selectedPower === "150" ? "selected" : ""} onClick={() => setSelectedPower("150")}>
        <div id="power">150 MW</div>
        <div id="pricePower">+200€</div>
      </div>
      <div id="component7" className={selectedPower === "200" ? "selected" : ""} onClick={() => setSelectedPower("200")}>
        <div id="power">200 MW</div>
        <div id="pricePower">+500€</div>
      </div>

      <label id="label3">Warp drive:</label>
      <div id="component8" className={warpDrive === "NO" ? "selected" : ""} onClick={() => setWarpDrive("NO")}>
        <div id ="wd" className="wd1">NO</div>
        <div id ="wd" className="wd2">+0€</div>
      </div>
      <div id="component9" className={warpDrive === "YES" ? "selected" : ""} onClick={() => setWarpDrive("YES")}>
        <div id ="wd" className="wd3">YES</div>
        <div id ="wd" className="wd4">+1000€</div>
      </div>

      <label id="label4">Select option package:</label>
      <div id="component10" className={optionPackage === "Basic" ? "selected" : ""} onClick={() => setOptionPackage("Basic")}>
        <div id="package">Basic</div>
        <div id="triangle" className="t1">▴</div>
        <div id="para" className="p1">Air conditioning</div>
        <div id="triangle" className="t2">▴</div>
        <div id="para" className="p2">Cloth seats</div>
        <div id="triangle" className="t3">▴</div>
        <div id="para" className="p3">Fm radio</div>
      </div>
      <div id="component11" className={optionPackage === "Sport" ? "selected" : ""} onClick={() => setOptionPackage("Sport")}>
        <div id="package">Sporto</div>
        <div id="packagePrice">+100€</div>
        <div id="triangle" className="t1">▴</div>
        <div id="para" className="p1">Air conditioning</div>
        <div id="triangle" className="t2">▴</div>
        <div id="para" className="p2">Cloth seats</div>
        <div id="triangle" className="t3">▴</div>
        <div id="para" className="p3">Fm radio</div>
        <div id="triangle" className="t4">▴</div>
        <div id="para" className="p4">Personal tech support</div>
      </div>
      <div id="component12" className={optionPackage === "Lux" ? "selected" : ""} onClick={() => setOptionPackage("Lux")}>
        <div id="package">Lux</div>
        <div id="packagePrice">+500€</div>
        <div id="triangle" className="t1">▴</div>
        <div id="para" className="p1">Air conditioning</div>
        <div id="triangle" className="t2">▴</div>
        <div id="para" className="p2">Cloth seats</div>
        <div id="triangle" className="t3">▴</div>
        <div id="para" className="p3">Fm radio</div>
        <div id="triangle" className="t4">▴</div>
        <div id="para" className="p4">Chrome weels</div>
        <div id="triangle" className="t5">▴</div>
        <div id="para" className="p5">Window tint</div>
        <div id="triangle" className="t6">▴</div>
        <div id="para" className="p6">Subwoofer</div></div>
    </div>
  );
}
