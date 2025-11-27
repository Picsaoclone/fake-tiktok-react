import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./FooterLeft.css";

export default function FooterLeft({ username, description, song }) {
  return (
    <div className="footer-left">
      <h3>@{username}</h3>
      <p>{description}</p>

      <div className="ticker">
        <FontAwesomeIcon icon={faMusic} />
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
        <marquee scrollamount="2">{song}</marquee>
      </div>
    </div>
  );
}
