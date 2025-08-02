import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return(
        <div id="footer" className="w-[80%] flex items-center justify-between py-5 z-50">
           {/* Text */}
            <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                 <Image src="/logo.svg" alt="logo" width={50} height={50} priority />
                  <h1 className="text-3xl">
                    <Link href="/" >TRODIX.</Link>
                  </h1>    
                </div>
                <p className="text-sec text-left max-w-[500px]">We built what we wish existed when we started: a clean, bullshit-free trading dashboard. No fees, no ads, no spam, just tools that work.</p>
                <p className="text-sec text-sm mt-3">
                  Made By <Link href="https://www.masters-web.com/" className="underline text-prim"> mastersweb.com</Link>
                 </p>
            </div>

            {/* Links */}
            <div className="flex flex-row gap-70">
                <ul>
                    <h2 className="font-semibold text-xl mb-4">Links</h2>
                    <li className="flex flex-1/5 flex-col gap-3">
                    <Link className="text-sec text-sm" href="/">Home</Link>
                    <Link className="text-sec text-sm" href="/">Badges</Link>
                    <Link className="text-sec text-sm" href="/">About</Link>
                    <Link className="text-sec text-sm" href="/">Footer</Link>
                    </li>
                </ul>
                <ul>
                    <h2 className="font-semibold text-xl mb-4">Contact</h2>
                    <li className="flex flex-col gap-3">
                    <Link className="text-sec text-sm" href="email:trodix@gmail.com">trodix@gmail.com</Link>
                    <Link className="text-sec text-sm" href="tel:+40787484921">+40787484921</Link>
                    <Link className="text-sec text-sm" href="">Str. Exemplu nr 2</Link>
                    <Link className="text-sec text-sm" href="/">Instagram</Link>
                    </li>
                </ul>

            </div>
        </div>
    );
}