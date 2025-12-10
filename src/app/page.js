

// app/page.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "./globals.css";
import Featured from "@/components/Features";
import WhyDocs from "@/components/WhyDocs";
import CircleOfCare from "@/components/CircleOfCare";
import AyurvedicDoctors from "@/components/AyurvedicDoctors";
import Questions from "@/components/Questions";
import LetsConnect from "@/components/LetsConnect";

export default function Page() {
  return (
    <div >
      <Navbar className=" bg-[#FFF7E3] text-gray-800" />
      <main className="max-w-7xl mx-auto px-6 md:px-10">
      
        <Hero />
        <Featured/>
        <WhyDocs/>
        <CircleOfCare/>
        <AyurvedicDoctors/>
        <Questions/>
        <LetsConnect/>
        
        {/* Other page sections go here */}
      </main>
    </div>
  );
}

