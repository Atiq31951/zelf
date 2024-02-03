"use client";

import React, { useEffect, useRef, useState } from "react";
import AsyncSelect from "react-select/async";

import { getDefaultAirports } from '../../services/airline';

function InputBox({ text1, text2, text3, children }) {
  const selectRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {

    getDefaultAirports();
    addEventListener("click", handleClickOutside);
    return () => removeEventListener("click", handleClickOutside);
  }, []);

  const handleClickOutside = (e) => {
    if (!selectRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      ref={selectRef}
      className="input-box"
    >
      <div className="text-1">{text1}</div>
      <div className="text-2">{text2}</div>
      <div className="text-1">{text3}</div>
      {children}

      {isOpen && (
        <div className="generic-modal">
          <div className="modal-body">
            <AsyncSelect
              cacheOptions
              loadOptions={loadOptions}
              defaultOptions
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default InputBox;
