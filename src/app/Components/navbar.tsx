"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react" 

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const Istoggle = () => {
        setIsMenuOpen(prev => !prev)
    }
    console.log(isMenuOpen);
    
    return(
        <>
        <div className="w-full md:px-20 p-3 z-50 reltaive">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                 <Image src="/logo.svg" alt="logo" width={50} height={50} priority />
                  <h1 className="text-3xl font">
                    <Link href="/" >TRODIX.</Link>
                  </h1>    
                </div>
                <div className="md:flex text-sec hidden items-center gap-6 text-sm font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/Badages">Badges</Link>
                    <Link href="/about">About</Link>
                    <Link href="#footer">Footer</Link>
                </div>

                <div className="flex flex-row gap-3">
                    <button className="md:flex hidden bg-white py-1 px-6 --border rounded-2xl text-sec text-sm">Get Started</button>
                    <button className="md:flex hidden rounded-full w-12 h-12 bg-alb --border items-center justify-center">
                        <Image src="/Donate.png" alt="Donate" width={24} height={24} className="object-fill" />
                    </button>
                        <button onClick={Istoggle} className="md:hidden rounded-2xl bg-white flex flex-col gap-1">
                        <div className="w-6 h-1 rounded-full bg-black"></div>
                        <div className="w-6 h-1 rounded-full bg-black"></div>
                        <div className="w-6 h-1 rounded-full bg-black"></div>
                       </button>
                </div>
            </div>
        </div>
          
            <div className={`flex flex-col justify-between w-1/2 min-w-[300px] h-[100dvh] absolute top-0 left-0 bg-alb ${isMenuOpen ? `flex` : `hidden`} `}>
            <Image src="/logo.svg" alt="logo" width={60} height={60}  className="m-5"/>
            <div className="flex flex-col text-sec items-left mx-5 py-5 gap-10 text-base font-medium">
                <Link href="/">Home</Link>
                <Link href="/Badages">Badges</Link>
                <Link href="/about">About</Link>
                <Link href="#footer">Footer</Link>
            </div>
            <div className="flex flex-col gap-3 mx-5 mb-5">
                    <button className="flex bg-white py-2 px-6 --border rounded-2xl text-sec text-sm">Get Started</button>
                    <button className="flex rounded-full items-center bg-alb --border justify-left px-6 gap-2 py-2">
                        <Image src="/Donate.png" alt="Donate" width={24} height={24} className="object-fill" />
                        <p>Donate</p>
                    </button>
                </div>
        </div>
     </>
    ); 
}