"use client";

import Image from "next/image";
import Link from "next/link";

export default function navbar() {
    return(
        <div className="w-full px-20 p-3 z-20">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                 <Image src="/logo.svg" alt="logo" width={50} height={50} priority />
                  <h1 className="text-3xl font">
                    <Link href="/" >TRODIX.</Link>
                  </h1>    
                </div>
                <div className="text-sec flex items-center gap-6 text-sm font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/Badages">Badges</Link>
                    <Link href="/about">About</Link>
                    <Link href="#footer">Footer</Link>
                </div>

                <div className="flex flex-row gap-3">
                    <button className="bg-white py-1 px-6 --border rounded-2xl text-sec text-sm">Get Started</button>
                    <button className="rounded-full w-12 h-12 bg-alb --border flex items-center justify-center">
                        <Image src="/Donate.png" alt="Donate" width={24} height={24} className="object-fill" />
                    </button>
                </div>
            </div>

        </div>
    );
}


