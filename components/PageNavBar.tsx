"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import bag from '@/assets/Bag Black.png'
import logo from '@/assets/Pat Ohner Logo.png'
import CartModal from './CartModal';

export default function PageNavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Sample cart items - replace with actual cart state management
  const cartItems = [
    {
      id: "1",
      name: "Lux denominator elly bag",
      image: "/assets/Medium-7550992WJ0D1011_A.jpg",
      price: 52000,
      quantity: 1
    }
  ];
  return (
    <>
      <nav className="w-full bg-white text-black px-10 h-[59px] flex items-center justify-between ">
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
        <button onClick={() => setIsCartOpen(true)}>
          <Image src={bag} alt="cart bag" />
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
