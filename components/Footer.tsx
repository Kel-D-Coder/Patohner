import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import patOhnerLogo from '@/assets/Pat Ohner Logo.png'
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Top Section - CONNECT and FOLLOW US stacked on the right */}
                <div className="flex justify-evenly gap-[470px] items-start mb-20">
                    <div></div>
                    <div className="text-left space-y-8">
                        <div>
                            <h3 className="font-syne font-semibold text-sm mb-2">CONNECT</h3>
                            <p className="font-syne text-sm text-gray-600 mb-1">Service(at)patohner.com</p>
                            <p className="font-syne text-sm text-gray-600">+234 090 330 6336</p>
                        </div>
                        <div>
                            <h3 className="font-syne font-semibold text-sm mb-2">FOLLOW US</h3>
                            <div className="flex gap-4 justify-start">
                                <Link href={"https://www.instagram.com/patohner/"}>
                                    <FaInstagram className="text-xl" />
                                </Link>
                                <Link href={"https://www.tiktok.com/@patohner"}>
                                    <FaTiktok className="text-xl" />
                                </Link>
                                <Link href={"https://x.com/patohner"}>
                                    <FaXTwitter className="text-xl" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Section - Large PATOHNER */}
                <div className="text-center mb-12 w-full">
                    <Image 
                        src={patOhnerLogo} 
                        alt="Pat Ohner Logo" 
                        width={400} 
                        height={100} 
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>

                {/* Bottom Section - Copyright and Terms */}
                <div className="flex justify-evenly items-center text-sm text-gray-500">
                    <p className="font-syne">©2025 PATH Co. - All Rights Reserved.</p>
                    <p className="font-syne">Terms</p>
                </div>
            </div>
        </footer>
    )
}