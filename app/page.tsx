import Image from "next/image";
import HomeNavBar from "@/components/NavBar";
import heroImage from '@/assets/GirlPAt.jpg';
import arrowImage from '@/assets/Arrow.png';
import mobileArrow from "@/assets/Arrow Mobile.png";

import bag1 from "@/assets/image 48.png";
import bag2 from "@/assets/image 46.png";
import bag3 from "@/assets/image 47.png";
import bag4 from "@/assets/image 49.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HomeNavBar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="relative">
          <div className="relative h-[100vh]">
            <Image 
              src={heroImage} 
              alt="Hero Image" 
              className="sm:w-full sm:h-full h-[50vh] object-cover md:h-[135vh]"
              priority
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
              <div className="flex items-center gap-2 text-black relative sm:top-0 sm:right-0  bottom-36 right-5 sm:left-0 left-1">
                <Link href={"/shop"} className="font-syne font-medium text-sm sm:text-lg">Shop Bag</Link>
                <Image src={arrowImage} alt="Arrow" className="w-[3rem] sm:w-[10rem]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Display Section */}
      <section className="py-8 md:py-16 md:mt-[180px] mt-[-22rem] sm:px-0 px-2.5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {[bag1, bag2, bag3, bag4].map((bag, idx) => (
            <div key={idx} className="aspect-square bg-white border border-gray-200 flex items-center justify-center">
              <Image 
                src={bag} 
                alt={`Bag ${idx + 1}`} 
                width={200} 
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
