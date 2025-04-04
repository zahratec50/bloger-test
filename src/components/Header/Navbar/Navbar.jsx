import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BsMoonStars } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { ImEnter } from "react-icons/im";

export default function Navbar() {
  const [theme, setTheme] = useState(false);

  return (
    <div className="flex items-center justify-between px-10 w-full bg-white shadow-2xl ">
      <img
        src="../../images/logo.png"
        alt="logo"
        className="w-14 h-16 sm:w-16 sm:h-20 lg:w-32 lg:h-36"
      />

      <ul className="flex items-center justify-center gap-x-5">
        
        <li>
          <Link
            to="/"
            className="font-bold text-zinc-700 hover: hover:font-bold"
          >
            بلاگرها
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="font-bold text-zinc-700 hover: hover:font-bold"
          >
            درباره ی ما
          </Link>
        </li>
      </ul>

      <div className="flex items-center justify-center gap-x-4 cursor-pointer">
        <div onClick={() => setTheme((previous) => !previous)}>
          {theme ? (
            <BsSunFill className="w-7 h-7 text-white " />
          ) : (
            <BsMoonStars className="w-7 h-7 text-white" />
          )}
        </div>

        <button className="flex items-center justify-center gap-x-4 text-zinc-700 bg-gray-200 bg-amber-50 hover:bg-blue-800 hover:text-white">
          ورود | ثبت نام
          <ImEnter className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
