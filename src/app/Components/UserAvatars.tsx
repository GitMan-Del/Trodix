"use client";

import Image from "next/image";

export default function UserAvatars() {
  const users = [
    {
      src: "/images/1.jpg",
      alt: "Darius",
      link: "https://www.instagram.com/1a.darius?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      ariaLabel: "Instagram 1a.darius",
      isFirst: true
    },
    {
      src: "/images/2.jpg",
      alt: "Liviu",
      link: "https://www.instagram.com/_liviuuu__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      ariaLabel: "User 2"
    },
    {
      src: "/images/3.jpg",
      alt: "Antonio",
      link: "https://www.instagram.com/fxantonioac?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      ariaLabel: "User 3"
    },
    {
      src: "/images/4.jpg",
      alt: "Ginel",
      link: "https://www.instagram.com/pascwg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      ariaLabel: "User 4"
    },
    {
      src: "/images/5.jpg",
      alt: "Gabriel",
      link: "https://www.instagram.com/corneanugabriel2?igsh=MXFzdmo2NXZ4NGJsMQ==",
      ariaLabel: "User 5"
    }
  ];

  const sponsors = [
    { src: "/images/s1.png", alt: "1", link: "https://www.instagram.com/tutuianuliviu_dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", ariaLabel: "Sponsor 1" },
    { src: "/images/s2.png", alt: "2", link: "https://www.instagram.com/fxmasterstrading?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", ariaLabel: "Sponsor 2" },
    { src: "/images/s3.png", alt: "3", link: "https://www.instagram.com/masterswebcom/", ariaLabel: "Sponsor 3" }
  ];

  return (
    <div className="flex flex-row justify-between px-3">
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row -space-x-3 mb-2 z-30">
          {users.map((user, index) => (
            <span
              key={index}
              onClick={() => window.open(user.link, "_blank")}
              style={{ cursor: "pointer", transition: "transform 0.15s" }}
              className="inline-block hover:z-40 hover:scale-105 focus:scale-105"
              tabIndex={0}
              role="button"
              aria-label={user.ariaLabel}
            >
              <Image
                src={user.src}
                alt={user.alt}
                width={40}
                height={40}
                className={`object-fill rounded-full shadow-2xl border-2 border-white transition-all duration-200 ${
                  user.isFirst ? "border-2" : "border"
                }`}
              />
            </span>
          ))}
        </div>
        <p className="text-sec md:block hidden">
          <span className="text-prim ">+4M</span> Users
        </p>
      </div>
      <div className="flex flex-row-reverse items-center gap-3">
        <div className="flex flex-row -space-x-3 mb-2">
          {sponsors.map((sponsor, index) => (
            <span
              key={index}
              onClick={() => window.open(sponsor.link, "_blank")}
              className="inline-block hover:z-40 cursor-pointer hover:scale-105 transition-transform duration-150"
              style={{ transition: "transform 0.15s" }}
              tabIndex={0}
              role="button"
              aria-label={sponsor.ariaLabel}
            >
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={40}
                height={40}
                className="rounded-full"
              />
            </span>
          ))}
        </div>
        <p className="text-sec md:block hidden">Sponsors</p>
      </div>
    </div>
  );
} 