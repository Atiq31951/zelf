"use client";

import { useState, useRef } from "react";

import Icons from "../Icons";

function index() {
  const modalRef = useRef();
  const buttonRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);

  // useEffect(() => {
  //   document.addEventListener("click", clickEventListener);

  //   return () => {
  //     document.removeEventListener("click", clickEventListener);
  //   };
  // }, []);

  // const clickEventListener = (e) => {
  //   if (
  //     modalRef.current &&
  //     buttonRef.current &&
  //     (!modalRef.current?.contains(e.target) ||
  //     !buttonRef.current?.contains(e.target))
  //     ) {
  //     console.log("ButtonRef => ", buttonRef.current, modalRef.current);
  //     setShowDropdown(false);
  //   }
  // };

  const handleDropdonSelect = () => {
    setShowDropdown((showDropdown) => setShowDropdown(!showDropdown));
  };

  return (
    <div className="nav">
      <Icons name="brand-logo" fill="brand-blue" />
      <div>
        <button
          ref={buttonRef}
          onClick={handleDropdonSelect}
          className="dropdown-btn"
        >
          <Icons name="region-bangladesh" />
          <span>BDT</span>
          <Icons name="right" fill="green" />
          {showDropdown && (
            <div ref={modalRef} className="currency-select-modal">
              <div className="modal-body">
                <div className="block">
                  <div className="heading">Region</div>
                  <div className="select-item">
                    <div className="description">
                      <Icons className="icon" name="region-bangladesh" />
                      <span>Bangladesh</span>
                    </div>
                    <Icons name="check_mark" fill="brand-blue" />
                  </div>
                  <div className="select-item">
                    <div className="description">
                      <Icons className="icon" name="region-bangladesh" />
                      <span>Pakistan</span>
                    </div>
                    <Icons name="check_mark" fill="brand-blue" />
                  </div>
                </div>
                <div className="block">
                  <div className="heading">Currency</div>
                  <div className="select-item">
                    <div className="description">
                      <span>BDT</span>
                    </div>
                    <Icons name="check_mark" fill="brand-blue" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="button-yellow">Apply</button>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default index;
