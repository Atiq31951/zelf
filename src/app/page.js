"use client";

import { useState } from "react";

import PlaceSelect from "./components/PlaceSelect";
import DateSelect from "./components/DateSelect";

export default function Home() {
  const [isHotel, setIsHotel] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState("");

  const [fromLocation, setFromLocationPage] = useState({
    name: "Dhaka",
    airportName: "Dhaka Shahjalal Internation airport",
  });
  const [toLocation, setToLocationPage] = useState({
    name: "Cox's bazar",
    airportName: "Cox's bazar shah amanat airport",
  });

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState("");

  return (
    <div className="home-page">
      <div className="homepage-banner">
        <div className="search-bar">
          <div className="search-type">
            <div className="radio-button">
              <input
                type="radio"
                onChange={() => setIsHotel(!isHotel)}
                checked={!isHotel}
              />
              <span>Flight</span>
            </div>

            <div className="radio-button">
              <input
                type="radio"
                onChange={() => setIsHotel(!isHotel)}
                checked={!isHotel}
              />
              <span>Hotel</span>
            </div>
          </div>

          <div className="search-items">
            <PlaceSelect
              selectedDropdown={selectedDropdown}
              setSelectedDropdown={setSelectedDropdown}
              fromLocation={fromLocation}
              setFromLocationPage={setFromLocationPage}
              toLocation={toLocation}
              setToLocationPage={setToLocationPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
