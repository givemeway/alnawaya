import { useState } from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { earnings, rings, necklace, bracelet, about, contact } = useSelector(
    (state) => state.tabSelection
  );
  const navigate = useNavigate();
  const handleEarnings = () => {};
  const handleRings = () => {};

  const handleNecklace = () => {};
  const handleBracelet = () => {};
  const handleAbout = () => {
    navigate("/about-us");
  };
  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <div className="header">
      <button
        className={` ${earnings ? "btn-tab-active" : "header-btn"}`}
        onClick={handleEarnings}
      >
        EARNINGS
      </button>
      <button
        className={` ${rings ? "btn-tab-active" : "header-btn"}`}
        onClick={handleRings}
      >
        RINGS
      </button>
      <button
        className={` ${necklace ? "btn-tab-active" : "header-btn"}`}
        onClick={handleNecklace}
      >
        NECKLACE
      </button>
      <button
        className={` ${bracelet ? "btn-tab-active" : "header-btn"}`}
        onClick={handleBracelet}
      >
        BRACELET
      </button>
      <button
        className={` ${about ? "btn-tab-active" : "header-btn"}`}
        onClick={handleAbout}
      >
        ABOUT
      </button>
      <button
        className={` ${contact ? "btn-tab-active" : "header-btn"}`}
        onClick={handleContact}
      >
        CONTACT
      </button>
    </div>
  );
};
