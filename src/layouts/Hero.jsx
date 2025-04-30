import React from "react";
import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <main id="hero" className="flex flex-row justify-between mx-[5rem] mt-[2rem]">
            <form className="flex flex-col ml-[1rem]">
            <h1 className="text-[4rem] fw-bold flex h-auto text-[#1f2937] mb-[0]">
              Creative thinker
            </h1>
            <h1 className="text-[4rem] fw-bold flex h-auto text-[#1f2937]">
             Minimalism lover
            </h1>
          
            <text className="text-muted text-balance max-w-32  ">
              Hi, I'm Gökçe. I'm a full-stack developer. If you are looking for a
              developer who can craft solid and scalable frontend products with great
              user experiences, let's shake hands with me.
            </text>
            </form>
  
            <img 
            src={hero}
            alt="Hero"
            className="hero-image  rounded-[1rem] ml-[1rem] mr-[2rem]"
          />
          
    </main>
  );
}
