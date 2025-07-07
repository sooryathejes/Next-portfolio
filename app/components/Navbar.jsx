import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll,setIsScroll] =  useState(false)

  const sideMenuRef = useRef()

  const openMenu = () =>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }
  useEffect(() => {
      window.addEventListener('scroll',() => {
        if(scrollY > 50){
            setIsScroll(true)
        }else{
            setIsScroll(false)
        }
      })
  },[])
  return (
    <div>
      <div className="fixed top-0 right-0 w-11/12 z-10 translate-y-[-85%]"> 
        <Image src={assets.header_bg_color} alt="nav-bg" className="w-full" />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex item-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
        <a href="#top">
          <Image src={assets.logo} className="w-28 cursor-pointer mr-14" />
        </a>
        <ul className={`hidden md:flex items-center gap-6  lg:gap-8 rounded-full px-12 py-3  ${isScroll ? "bg-transparent" : "bg-white shadow-sm"}`}> 
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#top">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#top">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex">
          <button>
            <Image src={assets.moon_icon} alt="theme-icon" className="w-6" />
          </button>
          <a
            className="hidden md:flex gap-3 px-10 items-center py-2.5 border border-gray-500 rounded-full ml-4" 
            href="#contact"
          >
            Contact <Image src={assets.arrow_icon} className="w-3" />
          </a>

          <button className="block md:hidden ml-3" >
            <Image src={assets.menu_black} alt="menu-icon" className="w-6" onClick={openMenu}/> 
          </button> 
        </div>
        {/* -----------mobile-menu--------------- */}
            <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 transition h-screen bg-rose-50 duration-500"> 
            <div>
              <Image src={assets.close_black} alt="menu-close-btn" className="w-5 cursor-pointer" onClick={closeMenu}/> 
            </div>
            <li> 
              <a className="font-Ovo cursor-pointer" href="#top" onClick={closeMenu}> 
                Home 
              </a>
            </li>
            <li> 
              <a className="font-Ovo cursor-pointer" href="#about" onClick={closeMenu}>
                About me
              </a>
            </li>
            <li>
              <a className="font-Ovo cursor-pointer" href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a className="font-Ovo cursor-pointer" href="#top" onClick={closeMenu}> 
                My Work
              </a>
            </li>
            <li>
              <a className="font-Ovo cursor-pointer" href="#top" onClick={closeMenu}>
                Contact me
              </a>
            </li>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
