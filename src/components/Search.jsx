import { SearchIcon } from "../icons/SearchIcon";
import { Link } from "react-router-dom";
import "./Search.css";

export const Search = () => {
  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search Products"
        ></input>
        <SearchIcon className={"search-icon"} />
      </div>
      <div className="search-banner-container">
        <Link to={"/"} className="search-banner-link">
          <img src="/public/assests/stuartz.jpeg" className="search-img" />
        </Link>
      </div>
    </div>
  );
};
