import React from "react";
export default function HeaderNav(){
    return(
      <header className="flex justify-end mx-[4rem] mt-[2rem]">
      <nav className="px-[3rem] ">
     <a className="px-[4rem] text-[#6b7280] no-underline " href="#skills">Skills</a>
     <a className="pr-[4rem] text-[#6b7280] no-underline" href="#projects">Projects</a>
   
       <button className="btn-hire-header ">Hire Me</button>
       </nav>
       </header>
    )
}