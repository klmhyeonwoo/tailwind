import React from "react";
import { useState } from "react";
import { FaTimes, FaAlignJustify } from "react-icons/fa";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  return (
    <nav className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow">
      <div className="flex items-center justify-between w-full h-full py-10 px-8">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text-4xl">Chail</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Feature</li>
            <li>FeedBack</li>
          </ul>
        </div>
        <div className="hidden pr-4 md:flex">
          <button className="mr-4 text-slate-600 bg-transparent border-none">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>

        <div className="mr-4 md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes /> : <FaAlignJustify />}
        </div>
      </div>

      <div>
        <ul className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
          <li className="w-full border-b-2 border-zinc-300">Home</li>
          <li className="w-full border-b-2 border-zinc-300">About</li>
          <li className="w-full border-b-2 border-zinc-300">Support</li>
          <li className="w-full border-b-2 border-zinc-300">Feature</li>
          <li className="w-full border-b-2 border-zinc-300">Feedback</li>

          <div className="flex flex-col my-4">
            <button className="px-8 py-3 mb-4 text-slate-600 bg-transparent">
              Sign In
            </button>
            <button className="px-8 py-3">Sign Up</button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
