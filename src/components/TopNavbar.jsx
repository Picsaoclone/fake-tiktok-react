import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./TopNavbar.css";

const TopNavbar = ({
  searchVisible,
  searchTerm,
  onToggleSearch,
  onSearchTermChange,
  onSearchSubmit,
}) => {
  return (
    <div className="top-navbar-wrapper">
      <div className="top-navbar">
        <FontAwesomeIcon icon={faTv} className="icon" />

        <h2>
          Following | <span>For You</span>
        </h2>

        <FontAwesomeIcon
          icon={faSearch}
          className="icon"
          onClick={onToggleSearch}
        />
      </div>

      {searchVisible && (
        <form className="search-form" onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="#Search hashtag..."
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
          />
        </form>
      )}
    </div>
  );
};

export default TopNavbar;
