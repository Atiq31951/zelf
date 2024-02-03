import React from "react";

function DateSelect({ title, place, placeDetails }) {
  return (
    <div className="input-box">
      <div className="text-1">{title}</div>
      <div className="text-2">{place}</div>
      <div className="text-1">{placeDetails}</div>
    </div>
  );
}

export default DateSelect;
