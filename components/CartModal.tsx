"use client";

import React from "react";
import Image from "next/image";
import bagIcon from "@/assets/Bag Black.png";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="flex-1 bg-black/30"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="relative w-full max-w-sm h-full bg-white shadow-xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="text-2xl font-medium">In your bag</h2>
          <button
            onClick={onClose}
            className="text-sm text-gray-600 hover:text-black"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <Image src={bagIcon} alt="Empty bag" width={60} height={60} className="mb-4 opacity-50" />
              <p>Your bag is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border border-gray-300 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-600 mt-1">Bag</p>
                    </div>
                    <button className="text-lg leading-none hover:bg-gray-100 w-6 h-6 flex items-center justify-center">×</button>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={bagIcon}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="object-cover bg-gray-100 p-2"
                    />
                    <div className="flex-1 text-right">
                      <span className="text-sm">Qty: {item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Checkout Button */}
        {cartItems.length > 0 && (
          <div className="p-6">
            <button className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors text-sm tracking-wide">
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
