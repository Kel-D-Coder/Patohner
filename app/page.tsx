"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

import HomeNavBar from "@/components/NavBar";
import desktopHero from '@/assets/Desktop Home screen.jpg';
import mobileHero from '@/assets/Home screen for mobile.jpg';
import arrowImage from '@/assets/Arrow.png';

import mobileTopLeft from "@/assets/Moble Slide 1(Top  left).png";
import mobileTopRight from "@/assets/Moble Slide 2(Top right).png";
import mobileBottomLeft from "@/assets/Moble Slide 3(Bottom left).png";
import mobileBottomRight from "@/assets/Moble Slide 4(Bottom right).png";

import bag1 from "@/assets/Desktop 1@2x.png";
import bag2 from "@/assets/Desktop 2@2x.png";
import bag3 from "@/assets/Desktop 3@2x.png";
import bag4 from "@/assets/Desktop 4@2x.png";
import Link from "next/link";

export default function Home() {
  const navigate = useRouter()
  return (
    <div className="min-h-screen bg-white">
      <HomeNavBar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="relative">
          <div className="relative">
            <Image 
              // src="https://res.cloudinary.com/djyud9uky/image/upload/a_auto/v1755819780/GirlPAt_lp6uc4.jpg"
              src={desktopHero}
              alt="Hero Image" 
              className="sm:w-full sm:block hidden sm:h-full h-[50vh] md:h-[135vh]"
              priority
              // width={1920}
              // height={1080}
            />
            <Image 
              src="https://res.cloudinary.com/djyud9uky/image/upload/a_auto/v1756422577/Home_screen_for_mobile_n1da1k.jpg"
              // src={mobileHero}
              alt="Hero Image" 
              className="sm:w-full sm:h-full h-[50vh] md:h-[135vh] sm:hidden block"
              priority
              width={1920}
              height={1080}
            />
            
            {/* Shop Bag Text Overlay */}
            <div 
              className="
                absolute 
                left-6 top-1/2 -translate-y-1/2 
                md:left-36 md:top-[32rem] md:-translate-y-1/2
                z-10
              "
            >
              <div className="flex items-center gap-2 text-black relative sm:top-0 sm:right-0  bottom-36 right-5 top-7 sm:left-0 left-1">
                <Link href={"/shop"} className="font-syne font-medium text-sm sm:text-lg">Shop Bag</Link>
                <Image src={arrowImage} alt="Arrow" className="w-[3rem] sm:w-[10rem]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Display Section */}
      <section className="py-8 md:py-16 md:mt-[-50px] sm:px-0 px-2.5 sm:block hidden">
        {/* Desktop grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full sm:block md:grid">
          {[bag1, bag2, bag3, bag4].map((bag, idx) => (
            <div key={idx} className="aspect-square bg-white border border-gray-200 flex items-center justify-center">
              <Image 
                src={bag} 
                alt={`Bag ${idx + 1}`} 
                width={200} 
                height={200}
                className="object-cover w-full h-full"
                onClick={() => navigate.push("/shop")}
              />
            </div>
          ))}
        </div>
      </section>
        {/* Mobile grid */}
      <div className="sm:hidden block mt-5 px-3">
        <div className="grid grid-cols-2 gap-2">
          {[mobileTopLeft, mobileTopRight, mobileBottomLeft, mobileBottomRight].map((img, idx) => (
            <div key={idx} className="aspect-square bg-white border border-gray-200 flex items-center justify-center">
              <Image 
                src={img} 
                alt={`Mobile Slide ${idx + 1}`} 
                width={200} 
                height={200}
                className="object-cover w-full h-full"
                onClick={() => navigate.push("/shop")}
              />
            </div>
          ))}
        </div>
        </div>
    </div>
  );
}
