// components/Hero.jsx
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#FFE6A5] via-[#fde6aa] to-[#FFF7E3] relative overflow-hidden"> 
  <div  className="w-full h-100 p-24 m-24">
    <div style={{paddingTop:"0px", paddingLeft:"90px"}}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 m-40 md:grid-cols-2 gap-8 items-center px-6 md:px-10 py-14 md:py-20">
        {/* LEFT SIDE - Text + CTA + Stats */}
        <div className="order-2 md:order-1">
          <p className="text-sm text-[#6B6B6B] mb-3 font-medium m-190">Namaste, Welcome to Amrutam</p>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#0F2F1E] leading-tight " style={{marginTop:"5px",marginBottom:"5px"}}>
            Join Amrutam —{" "}
            <span className="text-[#2E6B3F]">Grow Your Practice</span>
          </h2>

          <div className=" text-[#6B6B6B] font-medium  md:text-sm grid">
            <p>Connect with more patients, set your own schedule,</p>
            <p>and grow your Ayurvedic practice effortlessly.</p>
          </div>

          <div className="grid mt-20 items-start">
            <button
              className="bg-[#2E6B3F] hover:bg-[#265834] text-white font-medium  rounded-lg shadow-md transition"
              style={{ padding: "8px 20px", width: "220px" , marginTop:"25px", marginBottom:"20px"}}
              aria-label="Join now"
            >
              Join Now
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center ml-0 sm:ml-6">
              <div className="text-center sm:text-left">
                <div className="text-lg md:text-xl font-bold text-[#111827]">500+</div>
                <div className="text-xs text-gray-600 grid">Average Active <span>Users</span></div>
              </div>

              <div className="hidden sm:block border-l border-gray-200 h-8" />

              <div className="text-center sm:text-left">
                <div className="text-lg md:text-xl font-bold text-[#111827]">40+</div>
                <div className="text-xs text-gray-600 grid">Average daily <span>free calls</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Collage */}

        {/* <svg width="509" height="415" viewBox="0 0 509 415" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M292.772 8.97264e-05C328.825 -0.0499628 362.191 20.8487 390.841 42.7309C417.184 62.8514 421.02 70.8629 443.975 83.2991C459.593 91.7609 472.142 89.5545 486.03 100.629C519.481 127.304 507.126 171.983 503.719 208.748C500.298 245.67 490.869 284.378 466.421 312.262C442.381 339.68 402.702 345.236 369.964 361.302C341.776 375.134 315.842 392.299 285.663 400.966C254.271 409.981 221.966 416.818 189.515 413.122C155.821 409.284 122.105 399.297 94.7749 379.224C67.4835 359.179 50.466 328.762 34.2137 299.059C18.1773 269.75 -0.345501 244.73 0.00489627 206.019C0.208446 183.532 2.57757 170.029 12.3423 149.771C30.0928 112.946 64.2964 107.772 93.2078 83.2991C121.326 59.4978 160.827 57.194 194.825 43.003C228.095 29.1163 256.72 0.0501413 292.772 8.97264e-05Z" fill="#DBDCC4"/>
</svg> */}

        <div className="order-1 md:order-2 flex justify-center md:justify-end" style={{marginLeft:"90px"}}>
          {/* decorative soft background (subtle) */}
          {/* <div /> */}
            {/* <svg width="609" height="515" viewBox="0 0 609 515" fill="none" xmlns="http://www.w3.org/2000/svg">
<path filRule="evenodd" clipRule="evenodd" d="M292.772 8.97264e-05C328.825 -0.0499628 362.191 20.8487 390.841 42.7309C417.184 62.8514 421.02 70.8629 443.975 83.2991C459.593 91.7609 472.142 89.5545 486.03 100.629C519.481 127.304 507.126 171.983 503.719 208.748C500.298 245.67 490.869 284.378 466.421 312.262C442.381 339.68 402.702 345.236 369.964 361.302C341.776 375.134 315.842 392.299 285.663 400.966C254.271 409.981 221.966 416.818 189.515 413.122C155.821 409.284 122.105 399.297 94.7749 379.224C67.4835 359.179 50.466 328.762 34.2137 299.059C18.1773 269.75 -0.345501 244.73 0.00489627 206.019C0.208446 183.532 2.57757 170.029 12.3423 149.771C30.0928 112.946 64.2964 107.772 93.2078 83.2991C121.326 59.4978 160.827 57.194 194.825 43.003C228.095 29.1163 256.72 0.0501413 292.772 8.97264e-05Z" fill="#DBDCC4"/>
</svg>  */}
          <img src="/download.svg" alt="soft background"  style={{width:"400px", height:"400px"}}/>
          <div className="relative w-[320px] md:w-[460px] lg:w-[520px]">
            {/* blob image behind doctors (optional) */}
            {/* <div className="absolute right-0 top-0 w-full h-full -z-10">
              <Image
                src="/hero/blob.png"
                alt="blob background"
                width={620}
                height={560}
                className="object-contain"
                priority
              />
            </div> */}

            {/* doctor images stacked & overlapping */}
            
            <div className="relative w-full h-full ">
            <div className="absolute -left-80 top-6 md:top-10  z-10 w-[55%] md:w-[60%]" style={{marginTop:"25px", height:"350px", width:"200px"}}>
                <Image
                  src="/hero/doctor-1.png"
                  alt="doctor 1"
                  width={460}
                  height={560}
                  className="object-contain drop-shadow-xl"
                />
              </div>

              <div className="absolute -left-70 top-6  md:top-10 z-5 w-[55%] md:w-[60%]" style={{marginTop:"5px", height:"520px", width:"320px"}}>
                <Image
                  src="/hero/doctor-2.png"
                  alt="doctor 2"
                  width={460}
                  height={560}
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              <div className="absolute -left-100 top-6  md:top-10 z-5 w-[55%] md:w-[60%]" style={{marginTop:"0px", height:"320px", width:"200px"}}>
                <Image
                  src="/hero/doctor-3.png"
                  alt="doctor 3"
                  width={460}
                  height={560}
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Floating circular badges (vertical stack to the right) */}
            <div className="absolute  top-6 flex flex-col gap-5 items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F7E8C9]  flex items-center justify-center shadow-md" style={{marginTop:"25px", marginLeft:"-190px"}}>
                <Image src="/yoga.svg" alt="appointment" width={22} height={22} />
              </div>

              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F7E8C9] flex items-center justify-center shadow-md" style={{marginTop:"420px", marginLeft:"-290px"}}>
                <Image src="/herbbowl.svg" alt="bowl" width={22} height={22} />
              </div>

              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#F7E8C9] flex items-center justify-center shadow-md" style={{marginTop:"25px", marginLeft:"-190px"}}>
                <Image src="/calendar.svg" alt="calendar" width={22} height={22} />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
      </section>



  );
}
