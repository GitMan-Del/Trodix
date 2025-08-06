"use client";

import Image from "next/image";
import Link from "next/link";
import {useState , useEffect} from "react" 
import LoginBtn from "./LoginBtn";
import { useSession } from "next-auth/react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { data: session } = useSession();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    })

    const Istoggle = () => {
        setIsMenuOpen(prev => !prev)
    }
    console.log(isMenuOpen);
    
    return(
        <>
        <div className="w-full md:px-20 p-3 overflow-hidden">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                 <Image src="/logo.svg" alt="logo" width={50} height={50} priority />
                  <h1 className="text-3xl font-protest-strike ">
                    <Link href="/" >TRODIX.</Link>
                  </h1>    
                </div>
                <div className="md:flex text-sec hidden items-center gap-6 text-sm font-medium">
                    <Link href="/">Home</Link>
                    {session && (
                        <Link href="/dashboard" className="text-blue-600 font-semibold">Dashboard</Link>
                    )}
                    <Link href="/Badages">Badges</Link>
                    <Link href="/about">About</Link>
                    <Link href="#footer">Footer</Link>
                </div>

                <div className="flex flex-row gap-3">
                    <div className="hidden md:flex">
                    <LoginBtn />
                    </div>
                    <button className="md:flex hidden rounded-full w-12 h-12 bg-alb --border items-center justify-center">
                        <Image src="/Donate.png" alt="Donate" width={24} height={24} className="object-fill" />
                    </button>
                    <button onClick={Istoggle} className="md:hidden rounded-2xl bg-white flex flex-col gap-1 p-2">
                        <div className="w-6 h-1 rounded-full bg-black"></div>
                        <div className="w-6 h-1 rounded-full bg-black"></div>
                        <div className="w-6 h-1 rounded-full bg-black"></div>
                    </button>
                </div>
            </div>
        </div>
        
        {isMenuOpen && (
            <div className="fixed inset-0 z-[9999] md:hidden">
                <div 
                    className="fixed inset-0 bg-black/50" 
                    onClick={Istoggle}
                ></div>
                
                <aside className="flex flex-col justify-between w-1/2 min-w-[300px] h-[100dvh] fixed top-0 left-0 bg-alb shadow-lg animate-slide ">
                    <Image src="/logo.svg" alt="logo" width={60} height={60} className="m-5"/>
                    <div className="flex flex-col text-sec items-left mx-5 py-5 gap-10 text-base font-medium">
                        <Link href="/" onClick={Istoggle}>Home</Link>
                        {session && (
                            <Link href="/dashboard" onClick={Istoggle} className="text-blue-600 font-semibold">Dashboard</Link>
                        )}
                        <Link href="/Badages" onClick={Istoggle}>Badges</Link>
                        <Link href="/about" onClick={Istoggle}>About</Link>
                        <Link href="#footer" onClick={Istoggle}>Footer</Link>
                    </div>
                    <div className="flex flex-col gap-3 mx-5 mb-5">
                        <LoginBtn />
                        <button className="flex rounded-full items-center bg-alb --border justify-center px-6 gap-2 py-2">
                            <Image src="/Donate.png" alt="Donate" width={24} height={24} className="object-fill" />
                            <p>Donate</p>
                        </button>
                    </div>
                </aside>
            </div>
        )}
     </>
    ); 
}