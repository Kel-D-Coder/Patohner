import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import patOhnerLogo from "@/assets/Pat Ohner Logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-12 sm:py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:justify-evenly sm:gap-[470px] items-start mb-12 sm:mb-20 gap-10">
          <div className="hidden sm:block"></div>
          <div className="space-y-8">
            {/* CONNECT */}
            <div className="space-y-[-3px]">
              <h3 className="font-syne font-semibold text-sm">CONNECT</h3>
              <p className="font-syne text-sm text-gray-600">
                Service(at)patohner.com
              </p>
              <p className="font-syne text-sm text-gray-600">
                +234 090 330 6336
              </p>
            </div>

            {/* FOLLOW US */}
            <div className="space-y-2">
              <h3 className="font-syne font-semibold text-sm">FOLLOW US</h3>
              <div className="flex gap-4 justify-start">
                <Link
                  href="https://www.instagram.com/patohner/"
                  target="_blank"
                >
                  <FaInstagram className="text-xl" />
                </Link>
                <Link href="https://www.tiktok.com/@patohner" target="_blank">
                  <FaTiktok className="text-xl" />
                </Link>
                <Link href="https://x.com/patohner" target="_blank">
                  <FaXTwitter className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Center Section - Logo */}
        <div className="text-center mb-12  w-full ">
          <Image
            src={patOhnerLogo}
            alt="Pat Ohner Logo"
            width={400}
            height={100}
            className="w-full h-auto object-contain max-w-xs mx-auto md:max-w-5xl"
            priority
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-center  items-center text-xs sm:text-sm text-gray-500 gap-x-10">
          <p className="font-syne text-center sm:text-left">
            ©2025 PATH Co. - All Rights Reserved.
          </p>
          <Link href="/terms" className="font-syne">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
