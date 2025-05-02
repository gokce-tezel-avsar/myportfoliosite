import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Linkedin() {
  return (
    <button
    onClick={()=> window.open("https://linkedin.com/in/gökçe-tezel-avşar-25756234a") }
      className="btn-purple"
        tag="a" 
        target="_blank" 
        rel="noopener noreferrer"
      > <FontAwesomeIcon icon={faLinkedin} /> LinkedIn 
      </button>
  );
}
