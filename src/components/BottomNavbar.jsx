import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserGroup,
  faPlus,
  faEnvelope,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import "./BottomNavbar.css";

export default function BottomNavbar() {
  return (
    <div className="bottom-navbar">
      <div className="nav-item">
        <FontAwesomeIcon icon={faHouse} className="icon" />
        <span>Home</span>
      </div>

      <div className="nav-item">
        <FontAwesomeIcon icon={faUserGroup} className="icon" />
        <span>Friends</span>
      </div>

      {/* CREATE BUTTON SPECIAL */}
      <div className="nav-item create-btn">
        <div className="create-bg">
          <span className="plus-icon">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
      </div>

      <div className="nav-item">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <span>Inbox</span>
      </div>

      <div className="nav-item">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <span>Profile</span>
      </div>
    </div>
  );
}
