"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import bag from '@/assets/Bag White.png'
import logo from '@/assets/Pat Ohner Logo White.png'
import CartModal from './CartModal';
import { useAppSelector } from "@/lib/hooks";
import whiteMenu from "@/assets/Menu Icon White.png"
import closeWhite from "@/assets/Close button white.png"

export default function HomeNavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  

  return (
    <>
      <nav className="w-full text-black px-4 md:px-10 h-[59px] flex items-center justify-between absolute top-0 left-0 z-50  font-syne ">
        
        {/* Left Links - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex gap-6 text-sm font-light text-white relative left-10">
          <Link href="/shop" className="hover:underline font-semibold text-[13px] leading-[35px] tracking-[0%]">SHOP</Link>
          <Link href="/about" className="hover:underline font-semibold text-[13px] leading-[35px] tracking-[0%]">ABOUT PATOHNER</Link>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsNavOpen(!isNavOpen)} 
            className="text-white text-xl font-bold"
          >
            {isNavOpen ? (
              <span className="inline-flex items-center justify-center rounded-full  shadow-lg p-2">
                <Image src={closeWhite} alt="close" />
              </span>
            ) : (
              <span className="inline-flex items-center justify-center rounded-full shadow-lg p-2">
                <Image src={whiteMenu} alt="Menu" />
              </span>
            )}
          </button>
        </div>

        {/* Center Logo */}
        <div className="text-lg font-semibold tracking-widest md:mr-20">
          <Link href="/">
            <Image src={logo} alt="logo" className="sm:w-[100px] w-[90px] md:w-[133px] relative sm:right-6 sm:left-0 left-3 " />
          </Link>
        </div>

        {/* Right Icon */}
        <div>
          <button onClick={() => setIsCartOpen(true)} className="flex">
            <Image src={bag} alt="cart bag" className="h-4 md:h-5 mr-1" />
            <p className="text-white text-sm md:text-base">{cartItems.length}</p>
          </button>
        </div>
      </nav>

{/* Mobile Navigation Links - Toggleable */}
{isNavOpen && (
  <div className="md:hidden absolute top-[59px] left-0 right-0 z-40 bg-white shadow-md border-t border-gray-200">
    <div className="flex space-x-8 items-start px-6 py-4 ">
      <Link
        href="/shop"
        className="text-black font-semibold text-base uppercase tracking-wide"
        onClick={() => setIsNavOpen(false)}
      >
        SHOP
      </Link>
      <Link
        href="/about"
        className="text-black font-semibold text-base uppercase tracking-wide"
        onClick={() => setIsNavOpen(false)}
      >
        ABOUT PATOHNER
      </Link>
    </div>
  </div>
)}

      
      
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
}
