import React from "react";
import { NavLink, Nav, Button, Container } from "reactstrap"
export default function HeaderNav(){
    return(
    <>
      <div className="flex flex-row justify-end">
     <NavLink className="px-4" href="#skills">Skills</NavLink>
    <NavLink href="#projects">Projects</NavLink>
    <Button className="bg-white border-[#3730A3] rounded-md text-[#3730A3]">Hire Me</Button>
    </div>
    </>
    )
}