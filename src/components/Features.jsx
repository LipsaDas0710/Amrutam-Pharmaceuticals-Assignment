// components/Featured.jsx
import Image from "next/image";
import React from "react";


export default function Featured() {
  return (
    <section>
        <div className="text-[#285C36] text-2xl font-bold text-center" style={{marginTop:"20px"}}>Featured</div>
        <div className="text-center text-gray-600 text-sm" style={{marginTop:"8px"}}> Recognized and celebrated by leading publications — Amrutam in the spotlight!</div>

        {/* Logos Row */}
        <div className="mt-10 flex items-center justify-center gap-12 flex-wrap">

          <Image src="/brands/times-of-india.png" alt="Times of India" width={90} height={80} />
          <Image src="/brands/yourstory.png" alt="YourStory" width={80} height={60} />
          <Image src="/brands/traveler.png" alt="Conde Nast Traveler" width={80} height={60} />
          <Image src="/brands/livingetc.png" alt="Livingetc" width={80} height={60} />
          <Image src="/brands/voice-fashion.png" alt="Voice of Fashion" width={80} height={60} />
          <Image src="/brands/gq.png" alt="GQ" width={ 80} height={40} />
          <Image src="/brands/lifestyle-asia.png" alt="Lifestyle Asia" width={90} height={40} />
          <Image src="/brands/vogue.png" alt="Vogue" width={70} height={40} />
          <Image src="/brands/forbes-30.png" alt="Forbes 30 Under 30" width={70} height={40} />

        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Grid: 2 columns, 3 rows on md+; 1 column on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 gap-x-10">

          {/* ROW 1 - LEFT */}
          <div className="flex items-start">
            <div className="w-full">
              {/* PLACE YOUR TEXT / IMAGE HERE */}
              <div className="rounded-lg p-6 bg-white/60 border border-dashed border-gray-200 min-h-[180px]">
                {/* Example placeholder - replace with your content */}
                <div className="text-sm text-gray-500">
                    <svg width="297" height="279" viewBox="0 0 297 279" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M139.883 0.0684918C203.091 -1.55561 267.77 25.6701 288.798 85.334C311.299 149.176 281.05 165.956 226.5 206C171.143 246.636 99.7071 305.913 45.1806 264.167C-5.94212 225.027 -8.95696 153.05 12.7821 92.426C32.3317 37.9075 82.0132 1.55541 139.883 0.0684918Z" fill="#FFEEC3"/>
</svg>

                </div>
              </div>
            </div>
          </div>

          {/* ROW 1 - RIGHT */}
          <div className="flex items-start justify-end">
            <div className="w-full max-w-[520px]">
              <div className="rounded-lg p-6 bg-white/60 border border-dashed border-gray-200 min-h-[180px]">
                <div className="text-sm text-gray-500 text-right">Top Right — add text or image here</div>
              </div>
            </div>
          </div>

          {/* ROW 2 - LEFT */}
          <div className="flex items-center">
            <div className="w-full">
              <div className="rounded-lg p-6 bg-white/60 border border-dashed border-gray-200 min-h-[260px]">
                <div className="text-sm text-gray-500">Middle Left — add text or image here</div>
              </div>
            </div>
          </div>

          {/* ROW 2 - RIGHT */}
          <div className="flex items-center justify-end">
            <div className="w-full max-w-[520px]">
              <div className="rounded-lg p-6 bg-white/60 border border-dashed border-gray-200 min-h-[260px]">
                <div className="text-sm text-gray-500 text-right">Middle Right — add text or image here</div>
              </div>
            </div>
          </div>

          {/* ROW 3 - LEFT */}
          <div className="flex items-end">
            <div className="w-full">
              <div className="rounded-lg p-6 bg-white/60 border border-dashed border-gray-200 min-h-[220px]">
                <div className="text-sm text-gray-500">Bottom Left — add text or image here</div>
              </div>
            </div>
          </div>

          {/* ROW 3 - RIGHT */}
          <div className="flex items-end justify-end">
            <div className="w-full max-w-[520px]">
              <div className="rounded-lg p-6 bg-white/60 border border-dashed border-gray-200 min-h-[220px]">
                <div className="text-sm text-gray-500 text-right">Bottom Right — add text or image here</div>
              </div>
            </div>
          </div>

          {/* ROW 4 - LEFT */}
          <div className="flex items-end">
            <div className="w-full">
              <div className="rounded-lg p-6 bg-white/60 border border-dashed border-gray-200 min-h-[220px]">
                <div className="text-sm text-gray-500">Bottom Left — add text or image here</div>
              </div>
            </div>
          </div>

          {/* ROW 4 - RIGHT */}
          <div className="flex items-end justify-end">
            <div className="w-full max-w-[520px]">
              <div className="rounded-lg p-6 bg-white/60 border border-dashed border-gray-200 min-h-[220px]">
                <div className="text-sm text-gray-500 text-right">Bottom Right — add text or image here</div>
              </div>
            </div>
          </div>

          {/* ROW 5 - LEFT */}
          <div className="flex items-end">
            <div className="w-full">
              <div className="rounded-lg p-6 bg-white/60 border border-dashed border-gray-200 min-h-[220px]">
                <div className="text-sm text-gray-500">Bottom Left — add text or image here</div>
              </div>
            </div>
          </div>

          {/* ROW 5 - RIGHT */}
          <div className="flex items-end justify-end">
            <div className="w-full max-w-[520px]">
              <div className="rounded-lg p-6 bg-white/60 border border-dashed border-gray-200 min-h-[220px]">
                <div className="text-sm text-gray-500 text-right">Bottom Right — add text or image here</div>
              </div>
            </div>
          </div>

        </div>
      </div>

        
    </section>
  );
}
