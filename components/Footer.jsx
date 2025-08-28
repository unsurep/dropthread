import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-black text-white">
      <aside>
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
          className="bg-white rounded-full"
        />
        <p className="font-bold">
          DropThreads Ltd. <br/>Providing reliable clothing since 2024
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="#" className="link link-hover"><FaSquareInstagram className="text-2xl" /></a>
          <a href="#" className="link link-hover"><FaFacebookSquare className="text-2xl" /></a>
          <a href="#" className="link link-hover"><AiFillTikTok className="text-2xl" /></a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
