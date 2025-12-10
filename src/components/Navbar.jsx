// components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full">
        <div className="bg-[#3A3A3A] flex justify-center items-center " style={{height: "40px"}}>
            <div className="text-sm" style={{margin:70, color:"white", fontWeight:"50"}}>
                <p className="text-white text-sm">Register Yourself As An Amrutam Doctor</p>
            </div>
            
            <button className="m-20 bg-[#285C36] text-white flex" style={{padding: "6px 90px", borderRadius: "6px", color:"white", marginLeft:"15px"}}>
                <svg width="20" height="18" ml="10" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.78125 4.58268C6.78125 2.62667 8.44619 1.04102 10.5 1.04102C12.5538 1.04102 14.2188 2.62667 14.2188 4.58268V5.41602C14.2188 7.37202 12.5538 8.95768 10.5 8.95768C8.44619 8.95768 6.78125 7.37202 6.78125 5.41602V4.58268Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8.09375 10.209H8.74999C8.92404 10.209 9.09099 10.2748 9.21401 10.3921L10.5 11.6167L11.786 10.3921C11.909 10.2748 12.076 10.209 12.25 10.209H13.3438V14.9596C12.9514 15.1757 12.6875 15.5797 12.6875 16.0423C12.6875 16.7327 13.2752 17.2923 14 17.2923C14.7248 17.2923 15.3125 16.7327 15.3125 16.0423C15.3125 15.5797 15.0486 15.1757 14.6562 14.9596V10.209H15.75C17.0789 10.2091 18.1562 11.2351 18.1562 12.5007V18.334C18.1562 18.6792 17.8624 18.959 17.5 18.959H3.5C3.13757 18.959 2.84375 18.6792 2.84375 18.334V12.5007C2.84375 11.2351 3.92105 10.2091 5.24997 10.209H6.78125V13.6286C5.77128 13.9007 5.03125 14.785 5.03125 15.834V16.6673C5.03125 17.0125 5.32507 17.2923 5.6875 17.2923C6.04993 17.2923 6.34375 17.0125 6.34375 16.6673V15.834C6.34375 15.2587 6.83344 14.7923 7.4375 14.7923C8.04156 14.7923 8.53125 15.2587 8.53125 15.834V16.6673C8.53125 17.0125 8.82508 17.2923 9.1875 17.2923C9.54992 17.2923 9.84375 17.0125 9.84375 16.6673V15.834C9.84375 14.785 9.10376 13.9007 8.09375 13.6286V10.209Z" fill="white"/>
</svg>

            <div className="text-sm">Join Now</div>
          </button>
        </div>

     
       <nav className=" flex justify-center pt-6 pb-4">
        <div className="max-w-5xl mx-auto  flex flex-col items-center text-center">

    
          <h1 className="text-[#285C36] text-2xl text-bold" style={{marginTop:"10px"}}>
            A M R U T A M
          </h1>

       
          <ul className="flex gap-12 mt-4 text-gray-600 text-sm font-medium" style={{ gap: "40px", marginTop:"14px"}}>
            <ul className="cursor-pointer hover:text-green-700">About Us</ul>
            <ul className="cursor-pointer hover:text-green-700">Onboarding</ul>
            <ul className="cursor-pointer hover:text-green-700">FAQ</ul>
            <ul className="cursor-pointer hover:text-green-700">Testimonials</ul>
          </ul>

        </div>
      </nav>
    </header>
  );
}
