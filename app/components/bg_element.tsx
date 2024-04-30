import React from 'react';
import Image from "next/image";

const Background = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col overflow-hidden">
        <div className="bg-slate-600 flex-grow z-[-1] relative">
          <Image src={"/aestethic-bg.png"} fill={true} alt={"Background Image"}/>
        </div>
    </div>
  )
};

export default Background