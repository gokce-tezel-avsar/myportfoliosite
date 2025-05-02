import React from "react";
import hero from "../assets/hero.png";
import Github from "../components/github";
import Linkedin from "../components/Linkedin";
import { heroData } from "../initialData"

export default function Hero() {
  return (
    <main id="hero" className="flex flex-row justify-between mx-[5rem] mt-[2rem] ">
            <form className="flex flex-col ml-[1rem] mr-[2rem]">

            <h1 className="text-[4rem] fw-bold flex h-auto text-[#1f2937] mb-[0]">
              {heroData.title1}
            </h1>
            <h1 className="text-[4rem] fw-bold flex h-auto text-[#1f2937]">
            {heroData.title2}
            </h1>
          
            <p className="text-muted text-balance max-w-32  ">
            {heroData.text}
            </p>
            <form className="flex flex-row my-[3rem]">
              <button className="btn-hero-hire mr-[0.5rem]">Hire Me</button>
            <Github className=""/>
            <Linkedin/>
            </form>

            </form>
          <form>
            <img 
            src={hero}
            alt="Hero"
            className="hero-image  rounded-[1rem] ml-[1rem] mr-[2rem]"
          /></form>
          
    </main>
  );
}
