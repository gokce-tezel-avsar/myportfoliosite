import React from "react";

  
  export default function Profile(){
      return (
        <>
           
        <h1 className="mb-[2rem] mx-[6rem] pt-[2rem] text-[#1f2937]">Profile</h1>
  <main className="flex flex-row w-full ">
         
         
  <article className="flex flex-col mx-[6rem]  w-3/4">
      <h2 className=" text-[#443cca]" >Profile</h2>
      <article className="flex flex-row border-none ">
      <form className="flex flex-col w-[10em] py-[2rem] pt-[0]">   
      <p><strong>Doğum tarihi</strong></p>
      <p><strong>İkamet Şehri</strong> </p>
      <p><strong>Eğitim Durumu</strong></p> 
      <p className="py-[1.6rem]"><strong>Tercih Ettiği Rol</strong> </p> 
    </form> 
  <form className="flex flex-col py-[2rem] pt-[0] ">
     <p> 08.08.1997</p>
     <p> Kırklareli</p>
     <p>Trakya Üniversitesi Tıp Fakültesi,<br/>2022</p>
     <p>Frontend, UI</p>
  </form>
  </article>
  </article>
  
       <article className="flex flex-col mr-[5rem]">
              <h2 className="text-[#443cca]">About Me</h2>
              <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores officiis facilis inventore esse, ullam dolorum ducimus, repellendus atque adipisci culpa magni.</p>
              </article>
        
          </main>
          </>
      )
  }