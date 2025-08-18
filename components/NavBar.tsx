"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import bag from '@/assets/Bag White.png'
import logo from '@/assets/Pat Ohner Logo White.png'
import CartModal from './CartModal';
import { useAppSelector } from "@/lib/hooks";

export default function HomeNavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  

  return (
    <>
      <nav className="w-full text-black px-4 md:px-10 h-[59px] flex items-center justify-between absolute top-0 left-0 z-50 bg-gradient-to-b from-[#D9D9D980] to-black font-syne">
        
        {/* Left Links - Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex gap-6 text-sm font-light text-white">
          <Link href="/shop" className="hover:underline font-semibold text-[13px] leading-[35px] tracking-[0%]">SHOP</Link>
          <Link href="/about" className="hover:underline font-semibold text-[13px] leading-[35px] tracking-[0%]">ABOUT PATOHNER</Link>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsNavOpen(!isNavOpen)} 
            className="text-white text-xl font-bold"
          >
            {isNavOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Center Logo */}
        <div className="text-lg font-semibold tracking-widest md:mr-20">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-[100px] md:w-[133px]" />
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
        <div className="md:hidden bg-white px-4 py-3 border-b border-gray-200 absolute top-[59px] left-0 right-0 z-40">
          <div className="flex flex-col space-y-2">
            <Link 
              href="/shop" 
              className="text-black font-semibold text-sm uppercase"
              onClick={() => setIsNavOpen(false)}
            >
              SHOP
            </Link>
            <Link 
              href="/about" 
              className="text-black font-semibold text-sm uppercase"
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
