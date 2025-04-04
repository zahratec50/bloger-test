import React from "react";
import Navbar from "../../components/Header/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <div>
        <img src="../../images/mainpicture.jpg" alt="main" className="relative bg-cover w-[1520.8px] h-[730px] z-0" />
        <div className="absolute top-0 z-50 w-[360px] sm:w-[500px] md:w-[768px] lg:w-[912px] lg:h-[732px] xl:w-[1250px] 2xl:w-[1520.8px]">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
