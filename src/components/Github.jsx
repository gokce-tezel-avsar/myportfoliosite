import React from "react";
import { faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Github() {
  return (
    <button
    onClick={()=> window.open("https://github.com/gokce-tezel-avsar")}
    className="btn-purple mr-[0.5rem]"
      tag="a" 
      target="_blank" 
      rel="noopener noreferrer"
    > <FontAwesomeIcon icon={faGithub}
/> Github 
    </button>
  );
}
