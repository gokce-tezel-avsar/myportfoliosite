import React from "react";
import { useAppContext } from "../context/AppContext";
import { profile } from "../initialData"

    export default function Profile() {
      return (
        <section className="block bg-white dark:bg-gray-900 text-gray-800 dark:text-white w-full">
          <h1 className="mb-[2rem] ml-[6rem] pt-[2rem] text-[#1f2937]" >{profile.title}</h1>
          <div className="flex flex-row ">
            <div className="flex flex-col ml-[6rem] mr-[4rem]">
              <h2 className="flex flex-col py-[2rem] pt-[0] text-[#443ca3] mb-4">{profile.subTitle}</h2>
              <div className="flex flex-row w-2/3">
                <div className="flex flex-col font-bold py-[2rem] pt-[0] mr-[4rem]">
                  <p>{profile.birthDate}</p>
                  <p>{profile.city}</p>
                  <p>{profile.education}</p>
                  <p className="mt-[2.5rem]">{profile.role}</p>
                </div>
                <div className="flex flex-col ml-[2rem] py-[2rem] pt-[0] mr-[4rem]">
                  <p>08.08.1997</p>
                  <p>Kırklareli</p>
                  <p>Trakya Üniversitesi Tıp Fakültesi, <br/> 2022</p>
                  <p>Frontend, UI</p>
                </div>
              </div>
            </div>
    
            <div className="flex flex-col mr-[6rem] ml-[4rem] w-2/3">
              <h2 className="font-semibold text-[#443ca3] mb-4">{profile.about}</h2>
              <p className="text-sm text-muted dark:text-gray-300">{profile.aboutText}</p>
            </div>
          </div>
        </section>
      );
    }
    


/**return (
    <>
       
    <h1 className="mb-[2rem] mx-[6rem] pt-[2rem] text-[#1f2937]">Profile</h1>
<main className="flex flex-row w-full ">
     
     
<article className="flex flex-col ml-[6rem]  w-3/4">
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

   <article className="flex flex-col  mr-[6rem] ">
          <h2 className="text-[#443cca]">About Me</h2>
          <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores officiis facilis inventore esse, ullam dolorum ducimus, repellendus atque adipisci culpa magni.</p>
          </article>
    
      </main>
      </>
  )
}/ */
