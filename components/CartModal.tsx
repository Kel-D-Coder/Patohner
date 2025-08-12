"use client";

import React from "react";
import Image from "next/image";
import bagIcon from "@/assets/Bag Black.png";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart, clearCart, removeFromCart } from "@/store/cartSlice";
import { CartItem } from "@/store/cartSlice";

// interface CartItem {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
//   quantity: number;
// }

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems }) => {
  // const cart = useAppSelector((state) => state.cart.items);
  // console.log(cart);
  const dispatch = useAppDispatch()
  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex font-syne">
      <div
        className="flex-1 bg-black/30"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="relative w-full max-w-sm h-full bg-white shadow-xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="px-6 py-6">
          <h2 className="text-3xl font-bold text-center relative top-10">In your bag</h2>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          {cartItems.length === 0 ? (
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
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="border border-gray-400 p-4 flex flex-col gap-4"
                >
                  {/* Top row with details and remove */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-base font-medium mt-1">
                        ${item.price}
                      </p>
                    </div>
                    <button className="text-lg leading-none hover:bg-gray-100 w-6 h-6 flex items-center justify-center" onClick={() => dispatch(clearCart())}>
                      ×
                    </button>
                  </div>

                  {/* Product Image and Quantity */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                    <div className="flex items-center gap-2 border px-2 py-1 text-sm">
                      <span className="mr-2">Qty</span>
                      <button className="px-1" onClick={() => dispatch(removeFromCart(item))}>-</button>
                      <span>{item.quantity}</span>
                      <button className="px-1" onClick={() => dispatch(addToCart(item))}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Checkout Button */}
        {cartItems.length > 0 && (
          <div className="p-0">
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
