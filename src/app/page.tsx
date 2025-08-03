
import Link from "next/link";
import Navbar from "./Components/navbar";
import Image from "next/image";
import Footer from "./Components/footer";
import UserAvatars from "./Components/UserAvatars";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute top-1/2 right-0 w-[220px] h-[80px] rounded-2xl rotate-12 animation-float z-10 pointer-events-none">
        <Image
          src="/Frame 9.png"
          alt="a"
          width={250}
          height={100}
          unoptimized
        />
      </div>
      <div className="absolute top-1/2 -left-10 w-[220px] h-[80px] rounded-2xl -rotate-12 animation-float z-10 pointer-events-none">
        <Image
          src="/Frame 10.png"
          alt="a"
          width={250}
          height={100}
          unoptimized
        />
      </div>

      <div
        className="relative max-w-[98%] md:mx-5 mx-1 my-1 md:my-5 h-[120vh] --border rounded-2xl flex flex-col justify-center overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><circle cx='1' cy='1' r='1' fill='%231E1E1E' fill-opacity='0.3' /></svg>")`
        }}
      >
        <div className="absolute -top-3 left-1/4 w-[220px] h-[80px] rounded-2xl z-30 rotate-12 animation-float pointer-events-none">
          <Image
            src="/Frame 9-1.png"
            alt="a"
            width={250}
            height={100}
            unoptimized
          />
        </div>
        <div className="relative w-full h-full min-h-screen flex flex-col items-center justify-between z-[5]">
          <div className="w-[300px] h-[300px] blur-3xl bg-[#A800EB]/30 rounded-full absolute bottom-1/2  -right-20 pointer-events-none"></div>
          <div className="w-[250px] h-[250px] blur-3xl bg-[#0023EB]/30 rounded-full absolute bottom-1/3  -right-20 pointer-events-none"></div>
          <div className="w-[300px] h-[300px] blur-3xl bg-[#A800EB]/30 rounded-full absolute bottom-1/3  -left-20 pointer-events-none"></div>
          <div className="w-[250px] h-[250px] blur-3xl bg-[#0023EB]/30 rounded-full absolute bottom-1/4  -left-20 pointer-events-none"></div>
          <div className="w-full z-60 relative">
            <Navbar />
          </div>

          <div className="w-full text-center mx-auto z-40">
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
            <UserAvatars />
            <div className="w-full flex justify-center items-end overflow-hidden relative z-10">
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
      </div>
      <div className="w-full flex justify-center mb-4 ">
        <Footer />
      </div>
    </div>
  );
}
