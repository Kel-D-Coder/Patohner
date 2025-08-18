"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2"; // Hamburger icon
import bag from '@/assets/Bag Black.png';
import logo from '@/assets/Pat Ohner Logo.png';
import CartModal from './CartModal';
import { useAppSelector } from "@/lib/hooks";

export default function PageNavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <>
      <nav
        className="w-full bg-white text-black px-4 md:px-10 h-[59px] flex items-center justify-between font-syne relative"
        style={{ marginTop: "-10px" }}
      >
        {/* Left: Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-black text-3xl"
            aria-label="Open menu"
          >
            <HiBars3 />
          </button>
        </div>

        {/* Left Links (desktop only) */}
        <div className="hidden md:flex gap-6 text-sm font-light ml-14">
          <Link
            href="/shop"
            className="hover:underline font-semibold text-[13px] leading-[35px] tracking-[0%]"
          >
            SHOP
          </Link>
          <Link
            href="/about"
            className="hover:underline font-semibold text-[13px] leading-[35px] tracking-[0%]"
          >
            ABOUT PATOHNER
          </Link>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none text-center">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="w-[100px] md:w-[133px] h-auto mx-auto"
              priority
            />
          </Link>
        </div>

        {/* Right: Cart */}
        <div className="flex items-center">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center"
          >
            <Image src={bag} alt="cart bag" className="h-5 mr-1" />
            <p className="text-sm">{cartItems.length}</p>
          </button>
        </div>
      </nav>

      <div className="border-b-2 border-black relative bottom-3"></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <button
            className="absolute top-4 right-4 text-black text-3xl"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-10 text-black font-syne">
            <Link
              href="/shop"
              className="text-2xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              SHOP
            </Link>
            <Link
              href="/about"
              className="text-2xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT PATOHNER
            </Link>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
}
