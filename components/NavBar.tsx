"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import bag from '@/assets/Bag White.png'
import logo from '@/assets/Pat Ohner Logo White.png'
import CartModal from './CartModal';

export default function HomeNavBar() {
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
      <nav className="w-full text-black px-10 h-[59px] flex items-center justify-between absolute top-0 left-0 z-50 bg-gradient-to-b from-[#D9D9D980] to-black">
        
        {/* Left Links */}
        <div className="flex gap-6 text-sm font-light text-white">
          <Link href="/shop" className="hover:underline font-semibold text-[13px] leading-[35px] tracking-[0%]">SHOP</Link>
          <Link href="/about" className="hover:underline font-semibold text-[13px] leading-[35px] tracking-[0%]">ABOUT PATOHNER</Link>
        </div>

        {/* Center Logo */}
        <div className="text-lg font-semibold tracking-widest mr-20">
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
      
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
}
