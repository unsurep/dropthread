'use client'

import Image from "next/image";
import { SocialIcon } from 'react-social-icons'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import { MdOutlineContacts } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from 'react';
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="drawer fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" checked={isDrawerOpen} onChange={toggleDrawer} />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar px-4">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                width={30}
                height={30}
                alt="logo"
              />
              <h1 className="font-black text-2xl">DropThreads</h1>
            </div>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal uppercase text-sm gap-8">
              {/* Navbar menu content here */}
              <li className="hvr-underline-from-center flex items-center gap-1 cursor-pointer font-semibold">
                <IoHomeOutline className="transition-all ease-in-out duration-300 hover:text-xl" />
                Home
              </li>
              <li className="hvr-underline-from-center flex items-center gap-1 cursor-pointer">
                <AiOutlineProduct className="transition-all ease-in-out duration-300 hover:text-xl" />
                Shop
              </li>
              <li className="hvr-underline-from-center flex items-center gap-1 cursor-pointer">
                <CiCircleQuestion className="transition-all ease-in-out duration-300 hover:text-xl" />
                About
              </li>
              <li className="hvr-underline-from-center flex items-center gap-1 cursor-pointer">
                <MdOutlineContacts className="transition-all ease-in-out duration-300 hover:text-xl" />
                Contact
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <div className="form-control hidden md:block">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="flex items-center gap-2 ml-2">
              <ThemeToggle />
              <div className="flex flex-col gap-1">
                <FaSquareInstagram className="" />
                <FaFacebookSquare className="" />
                <AiFillTikTok className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 uppercase text-sm gap-4">
          {/* Sidebar content here */}
          <li className="hvr-underline-from-center flex items-center gap-1 cursor-pointer font-semibold">
            <IoHomeOutline className="transition-all ease-in-out duration-300 hover:text-xl" />
            Home
          </li>
          <li className="hvr-underline-from-center flex items-center gap-1 cursor-pointer">
            <AiOutlineProduct className="transition-all ease-in-out duration-300 hover:text-xl" />
            Shop
          </li>
          <li className="hvr-underline-from-center flex items-center gap-1 cursor-pointer">
            <CiCircleQuestion className="transition-all ease-in-out duration-300 hover:text-xl" />
            About
          </li>
          <li className="hvr-underline-from-center flex items-center gap-1 cursor-pointer">
            <MdOutlineContacts className="transition-all ease-in-out duration-300 hover:text-xl" />
            Contact
          </li>
          <div className="form-control md:hidden">
              <input type="text" placeholder="Search" className="input input-bordered w-full" />
            </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
