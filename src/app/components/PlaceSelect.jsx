import React, { useState, useRef } from "react";

import Icons from "./Icons";
import InputBox from "./InputBox";

function PlaceSelect({
  fromLocation = {},
  toLocation = {},
  selectedDropdown,
  setSelectedDropdown,
  setFromLocationPage,
  setToLocationPage,
}) {
  const { name: fromName, airportName: fromAddress } = fromLocation;
  const { name: toName, airportName: toAddress } = toLocation;

  const fromRef = useRef();
  const toRef = useRef();

  return (
    <>
      <InputBox
        onClick={() => selectedDropdown("fromLocation")}
        text1="FROM"
        text2={fromName}
        text3={fromAddress}
      >
        <div className="swaper">
          <Icons name="swaper" />
        </div>
      </InputBox>

      <InputBox
        onClick={() => selectedDropdown("toLocation")}
        text1="TO"
        text2={toName}
        text3={toAddress}
      />

      <div ></div>
    </>
  );
}

export default PlaceSelect;
