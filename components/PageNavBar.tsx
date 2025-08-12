"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import bag from '@/assets/Bag Black.png'
import logo from '@/assets/Pat Ohner Logo.png'
import CartModal from './CartModal';
import { useAppSelector } from "@/lib/hooks";

export default function PageNavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Sample cart items - replace with actual cart state management
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <>
      <nav className="w-full bg-white text-black px-10 h-[59px] flex items-center justify-between font-syne" style={{ marginTop: '-10px'}}>
      {/* Left Links */}
      <div className="flex gap-6 text-sm font-light ml-14">
        <Link href="/shop" className="hover:underline font-semibold text-[13px] leading-[35px] tracking-[0%]">SHOP</Link>
        <Link href="/about" className="hover:underline font-semibold text-[13px] leading-[35px] tracking-[0%]">ABOUT PATOHNER</Link>
      </div>

      {/* Center Logo */}
      <div className="text-lg font-semibold tracking-widest mr-24">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-[133px]" />
        </Link>
      </div>

      {/* Right Icon */}
      <div>
        <button onClick={() => setIsCartOpen(true)} className="flex">
          <Image src={bag} alt="cart bag" className="h-5 mr-1" />
          <p>{cartItems.length}</p>
        </button>
      </div>
    </nav>
    <div className="border-b-2 border-black relative bottom-3"></div>
    
    <CartModal 
      isOpen={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      cartItems={cartItems}
    />
  </>
  );
}
