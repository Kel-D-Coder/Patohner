"use client";

import React, { useState } from "react";
import Image from "next/image";
import bagIcon from "@/assets/Bag Black.png";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart, removeFromCart } from "@/store/cartSlice";
import { CartItem } from "@/store/cartSlice";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
}) => {
  const dispatch = useAppDispatch();
  const [isCheckout, setIsCheckout] = useState(false);
  const [isDeliveryForm, setIsDeliveryForm] = useState(false);

  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const handleBackToCart = () => {
    setIsCheckout(false);
    setIsDeliveryForm(false);
  };

  const handleContinueAsGuest = () => {
    setIsDeliveryForm(true);
  };

  const handleBackToCheckout = () => {
    setIsDeliveryForm(false);
  };

  const handleClose = () => {
    setIsCheckout(false);
    setIsDeliveryForm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex font-syne">
      <div
        className="flex-1 bg-black/30"
        onClick={handleClose}
        aria-label="Close modal"
      />
      <div
        className={`relative ${
          isDeliveryForm ? "w-full max-w-sm" : "w-full max-w-sm"
        } h-full bg-white shadow-xl flex flex-col`}
      >
        {/* Header */}
        <div className="px-6 ">
          {!isCheckout ? (
            <div className="flex justify-end items-center">
              <h2 className="text-2xl font-bold text-center flex-1 relative top-5">
                In your bag
              </h2>
              <button
                onClick={handleClose}
                className="text-black text-xs font-medium"
              >
                Close
              </button>
            </div>
          ) : !isDeliveryForm ? (
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-center flex-1">
                CHECK OUT YOUR ORDER
              </h2>
            </div>
          ) : null}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {!isCheckout ? (
            // Cart Items View
            cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <Image
                  src={bagIcon}
                  alt="Empty bag"
                  width={60}
                  height={60}
                  className="mb-4 opacity-50"
                />
                <p>Your bag is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.name}
                    className="border border-black p-4 relative bg-[#F8F8FA]"
                  >
                    {/* Close button in top right */}
                    {/* <button
                      className="absolute top-2 right-2 text-black text-lg leading-none hover:bg-gray-100 w-6 h-6 flex items-center justify-center"
                      onClick={() => dispatch(clearCart())}
                    >
                      ×
                    </button> */}

                    {/* Product name and price centered at top */}
                    <div className="text-center mb-4">
                      <h3 className="font-medium text-sm mb-1 -mt-2">
                        {item.name}
                      </h3>
                      <p className="text-sm font-medium">${item.price}</p>
                    </div>

                    {/* Product image and quantity selector */}
                    <div className="flex items-end gap-3">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                      <div className="flex items-center gap-2 text-xs bg-white px-3 py-1">
                        <span className="mr-1">Qty</span>
                        <button
                          className="px-1"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          disabled={item.quantity >= 3}
                          className="px-1"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : !isDeliveryForm ? (
            // Checkout View
            <div className="flex flex-col h-full">
              {/* Order Summary */}
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-3">Order Summary</h3>
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between text-sm"
                    >
                      <span>
                        {item.name} (x{item.quantity})
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="pt-2 flex justify-between font-semibold border-t border-gray-200">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Delivery Form View
            <div className="space-y-6">
              {/* Top Bar with light blue line */}
              {/* <div className="border-t-2 border-blue-300 pt-4"> */}
              <div className="flex items-center ">
                <button
                  onClick={handleBackToCheckout}
                  className="text-sm text-black hover:text-gray-600"
                >
                  ← Back
                </button>
                <h2 className="text-lg font-semibold text-center flex-1">
                  Delivery
                </h2>
              </div>
              {/* </div> */}

              {/* Main Title */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold uppercase">
                  COMPLETE YOUR INFO
                </h1>
              </div>

              {/* Contact Section */}
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg mb-1">Contact</h3>
                  <span className="text-sm text-black">Required *</span>
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-black"
                />
              </div>

              {/* Delivery Section */}
              <div>
                <h3 className="font-bold text-lg mb-2">Delivery</h3>
                <div className="space-y-4">
                  {/* Country/Region */}
                  <div className="relative">
                    <select className="w-full p-4 border border-gray-300 text-sm appearance-none bg-white focus:outline-none focus:border-black">
                      <option value="">Country/Region*</option>
                      <option value="nigeria">Nigeria</option>
                    </select>
                    <div className="absolute right-4 top-4 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* First Name and Last Name */}
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="First Name*"
                      className="flex-1 p-4 border border-gray-300 text-sm focus:outline-none focus:border-black w-14"
                    />
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="flex-1 p-4 border border-gray-300 text-sm focus:outline-none focus:border-black w-14"
                    />
                  </div>

                  {/* Address */}
                  <div className="relative">
                    <select className="w-full py-2 px-4 border border-gray-300 text-sm appearance-none bg-white focus:outline-none focus:border-black">
                      <option value="">Address*</option>
                      <option value="home">Home</option>
                      <option value="work">Work</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-4 top-4 pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* House Number and Street/Apartment */}
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="House Number"
                      className="flex-1 p-4 border border-gray-300 text-sm focus:outline-none focus:border-black w-14"
                    />
                    <input
                      type="text"
                      placeholder="Street/apartment"
                      className="flex-1 p-4 border border-gray-300 text-sm focus:outline-none focus:border-black w-14"
                    />
                  </div>

                  {/* City, State, and Postcode */}
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="City*"
                      className="w-1/3 p-4 border border-gray-300 text-sm focus:outline-none focus:border-black"
                    />
                    <div className="w-1/3 relative">
                      <select className="w-full p-4 border border-gray-300 text-sm appearance-none bg-white focus:outline-none focus:border-black">
                        <option value="">State*</option>
                        <option value="lagos">Lagos</option>
                        <option value="abuja">Abuja</option>
                        <option value="kano">Kano</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            d="M1 1L6 6L11 1"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Postcode*"
                      className="w-1/3 p-4 border border-gray-300 text-sm focus:outline-none focus:border-black"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="+234"
                      className="w-24 p-4 border border-gray-300 text-sm text-center focus:outline-none focus:border-black"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number*"
                      className="flex-1 p-4 border border-gray-300 text-sm focus:outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>

              {/* Opt-in Checkbox */}
              <div className="flex items-center gap-3 pt-4">
                <input
                  type="checkbox"
                  id="email-offers"
                  className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:border-black"
                />
                <label htmlFor="email-offers" className="text-sm text-black">
                  Email me with offers and promo
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Footer - Buttons */}
        {cartItems.length > 0 && (
          <div className=" border-t border-gray-200">
            {!isCheckout ? (
              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-2 font-bold hover:bg-gray-800 transition-colors text-sm tracking-wide"
              >
                CHECKOUT
              </button>
            ) : !isDeliveryForm ? (
              <div className="space-y-2">
                <button
                  onClick={handleBackToCart}
                  className="w-full bg-gray-200 text-black py-3 font-bold hover:bg-gray-300 transition-colors text-sm tracking-wide"
                >
                  BACK TO CART
                </button>
                <button
                  onClick={handleContinueAsGuest}
                  className="w-full bg-black text-white py-3 font-bold hover:bg-gray-800 transition-colors text-sm tracking-wide"
                >
                  CONTINUE AS A GUEST
                </button>
              </div>
            ) : (
              <button className="w-[100%] bg-black text-white py-2 font-bold hover:bg-gray-800 transition-colors text-sm tracking-wide">
                CONTINUE
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
