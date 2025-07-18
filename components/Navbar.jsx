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
import { useEffect } from 'react';
import { useRef } from 'react';




const Navbar = () => {

  const SearchInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
  }

    return (
      <>
        <div>
          {/* Navbar display for desktop screens */}
          <nav
            className="flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-1 px-[1rem] fixed w-full 
            bg-white/70 backdrop-blur-xl border-b border-white/20 z-50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  width={30}
                  height={30}
                  alt="logo"
                  className=""
                />
                <h1 className="font-black text-2xl">DropThreads</h1>
              </div>

              <ul className="uppercase flex items-center text-sm gap-12">
                <li className=" hvr-underline-from-center flex items-center gap-1 cursor-pointer font-semibold">
                  <IoHomeOutline className="transition-all ease-in-out duration-300 hover:text-xl" />
                  Home
                </li>

                <li className=" hvr-underline-from-center flex items-center gap-1 cursor-pointer ">
                  <AiOutlineProduct className="transition-all ease-in-out duration-300 hover:text-xl" />
                  Products
                </li>

                <li className=" hvr-underline-from-center flex items-center gap-1 cursor-pointer ">
                  <CiCircleQuestion className="transition-all ease-in-out duration-300 hover:text-xl" />
                  About
                </li>

                <li className=" hvr-underline-from-center flex items-center gap-1 cursor-pointer ">
                  <MdOutlineContacts className="transition-all ease-in-out duration-300 hover:text-xl" />
                  Contact
                </li>
              </ul>

              {/* search icon */}
              <div className="flex items-center gap-2">
                {/* search bar */}
                <div className="flex items-center gap-2">
                  <label>
                    <CiSearch />
                  </label>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="outline-none rounded px-3 py-1"
                    autoFocus
                  />
                </div>
                {/* social icons */}
                <div className="flex flex-col gap-1">
                  <FaSquareInstagram className="" />
                  <FaFacebookSquare className="" />
                  <AiFillTikTok className="" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );




};
export default Navbar;