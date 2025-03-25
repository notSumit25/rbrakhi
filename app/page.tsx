'use client'
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [width,setWidth] = useState(0);
  const [height,setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight
    );
  }, [window.innerWidth,window.innerHeight]);
  
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center sm:hidden bg-black">
        <Image
          src="/movile.jpg"
          alt="Picture of the author"
          width={width}
          height={width}
        />
      </div>
      <div
        className="w-full min-h-screen justify-center items-center bg-cover bg-center hidden sm:block overflow-auto"
        
      >
        <Image
          src="/pic.jpg"
          alt="Picture of the author"
          width={width}
          height = {height}
        />
        {/* Other content can go here */}
      </div>
    </div>
  );
}
