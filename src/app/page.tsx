import Link from "next/link";
import Navbar from "./Components/navbar";
import Image from "next/image";
import Footer from "./Components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute top-1/2 right-0 w-[220px] h-[80px] rounded-2xl rotate-12 z-20 animation-float">
        <Image
          src="/Frame 9.png"
          alt="a"
          width={250}
          height={100}
          unoptimized
        />
      </div>
      <div className="absolute top-1/2 -left-10 w-[220px] h-[80px] rounded-2xl -rotate-12 z-20 animation-float">
        <Image
          src="/Frame 10.png"
          alt="a"
          width={250}
          height={100}
          unoptimized
        />
      </div>

      {/* Zona cu backgroundul cu puncte */}
      <div
        className="relative max-w-[98%] mx-5 my-5 h-[120vh] --border rounded-2xl flex flex-col justify-center overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><circle cx='1' cy='1' r='1' fill='%231E1E1E' fill-opacity='0.3' /></svg>")`
        }}
      >
        <div className="absolute -top-3 left-1/4 w-[220px] h-[80px] rounded-2xl rotate-12 z-0 animation-float">
          <Image
            src="/Frame 9-1.png"
            alt="a"
            width={250}
            height={100}
            unoptimized
          />
        </div>
        {/* Mask pentru a nu permite contentului sa iasa din background */}
        <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-between z-10">
          <div className="w-[300px] h-[300px] blur-3xl bg-[#A800EB]/30 rounded-full absolute bottom-1/2 z-10 -right-20 pointer-events-none"></div>
          <div className="w-[250px] h-[250px] blur-3xl bg-[#0023EB]/30 rounded-full absolute bottom-1/3 z-10 -right-20 pointer-events-none"></div>
          <div className="w-[300px] h-[300px] blur-3xl bg-[#A800EB]/30 rounded-full absolute bottom-1/3 z-10 -left-20 pointer-events-none"></div>
          <div className="w-[250px] h-[250px] blur-3xl bg-[#0023EB]/30 rounded-full absolute bottom-1/4 z-10 -left-20 pointer-events-none"></div>
          {/* Navbar */}
          <div className="w-full z-20">
            <Navbar />
          </div>

          {/* Main Content */}
          <div className="w-full text-center mx-auto">
            <h1 className="text-6xl">
              A place to track, grow, and trade <br /> <span className="text-prim"> — without the noise</span>.
            </h1>
            <p className="max-w-[700px] mx-auto text-sec">
              Built by traders, not marketers. No upsells. No ads. No distractions. Just real tools to help you become a better trader. Free. Forever.
            </p>
            <button className="text-sec text-md mt-5 px-5 py-1 --border rounded-2xl">
              Get started for free <span className="text-prim">→</span>
            </button>
            <p className="text-sec text-sm mt-10">
              Made By <Link href="https://www.masters-web.com/" className="underline text-prim"> mastersweb.com</Link>
            </p>
          </div>

          <div className="w-[60%] mx-auto">
            <div className="flex flex-row justify-between px-3">
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row -space-x-3 mb-2">
                  <Image src="/images/1.png" alt="1" width={40} height={40} className="rounded-full" />
                  <Image src="/images/2.png" alt="2" width={40} height={40} className="rounded-full" />
                  <Image src="/images/3.png" alt="3" width={40} height={40} className="rounded-full" />
                  <Image src="/images/4.png" alt="4" width={40} height={40} className="rounded-full" />
                  <Image src="/images/5.png" alt="5" width={40} height={40} className="rounded-full" />
                </div>
                <p className="text-sec"> <span className="text-prim"> +4M </span> Users</p>
              </div>
              <div className="flex flex-row-reverse items-center gap-3">
                <div className="flex lfex-row -space-x-3 mb-2">
                  <Image src="/images/s1.png" alt="1" width={40} height={40} className="rounded-full" />
                  <Image src="/images/s2.png" alt="2" width={40} height={40} className="rounded-full" />
                  <Image src="/images/s3.png" alt="3" width={40} height={40} className="rounded-full" />
                </div>
                <p className="text-sec">Sponosors</p>
              </div>
            </div>
            {/* Imaginea de jos trebuie să rămână în interiorul div-ului */}
            <div className="w-full flex justify-center items-end overflow-hidden relative z-20">
              <Image
                src="/Preview.png"
                alt="a"
                property="1"
                width={2000}
                height={20000}
                unoptimized
                className="object-contain shadow-2xl max-h-[400px] w-auto -mb-1"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="w-[300px] h-[300px] blur-3xl bg-[#EB00D7]/20 rounded-full absolute bottom-0 z-10 left-48 pointer-events-none"></div>
            <div className="w-[250px] h-[250px] blur-3xl bg-[#A800EB]/30 rounded-full absolute -bottom-10 z-10 right-52 pointer-events-none"></div>
          </div>
        </div>
        {/* Mask effect: overflow-hidden on parent, all content stays inside rounded border */}
      </div>
      {/* Footer jos, inafara backgroundului cu puncte */}
      <div className="w-full flex justify-center mb-4 z-50">
        <Footer />
      </div>
    </div>
  );
}
