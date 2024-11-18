import { SearchIcon } from "../icons/SearchIcon";
import { Link } from "react-router-dom";
import "./Search.css";
import { ContextIcon } from "./icons/Context";
import { useDispatch, useSelector } from "react-redux";
import { setTabSelection } from "../features/tabSelectedSlice";
import { useState } from "react";

export const Search = () => {
  const tab = useSelector((state) => state.tabSelection);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleContext = () => {
    dispatch(setTabSelection({ ...tab, showContext: true }));
  };
  return (
    <div className="search-container">
      <div className="search-context-container">
        <ContextIcon
          className={"search-context-icon"}
          onClick={handleContext}
        />
      </div>
      <div className="search-input-container">
        <input
          className={`search-input ${show ? "show" : "hide"} `}
          type="text"
          placeholder="Search Products"
          onBlur={() => setShow(false)}
        ></input>

        <SearchIcon
          className={`search-icon ${show ? "right" : "left"}`}
          onClick={() => setShow(true)}
        />
      </div>
      <div className="search-banner-container">
        <Link to={"/"} className="search-banner-link">
          <img
            src="../../assets/stuartz-green-dark.jpg"
            className="search-img"
          />
          <span className="img-banner-name">by Al Nawaya</span>
        </Link>
      </div>
    </div>
  );
};
