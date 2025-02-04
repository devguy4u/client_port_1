"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedHeading from "./AnimatedHeading";
import { ModeSwitch1 } from "./ModeSwitch";
import HamBurger from "./Hamburger";
import { roboto, pt_serif_caption, dm_serif } from "@/app/utils/Fonts";

// MenuItems
const link = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
];

export default function Navbar() {
  const pathName = usePathname();
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <header className="absolute inset-0 h-fit text-sm lg:text-base py-3 min-w-full pr-4 pl-4 md:pl-10 lg:pl-16 xl:pl-36 2xl:pl-44 md:pr-32 2xl:pr-44 flex flex-wrap items-center justify-between z-40">
        {/* logo */}
        <Link href={"/"}>
          <AnimatedHeading
            title="G."
            classList="hidden md:inline-block xl:text-4xl text-3xl"
            font={dm_serif}
          />
        </Link>
        {/* navItems */}
        <nav className="flex items-center gap-4 lg:gap-6 xl:gap-8  dark:text-gray-200 text-black">
          {link.map((item, index) => {
            return (
              <Link
                scroll={false}
                href={item.url}
                key={index}
                // style={roboto.style}
                className={`hidden capitalize md:inline-block noSelection ${
                  pathName === item.url
                    ? "underline underline-offset-8 cursor-pointer"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          {/* {pathName === "/" ? (
            <Link
              href="#HireMe"
              style={roboto.style}
              className="hidden md:inline-block font-semibold text-base lg:text-xl cursor-pointer px-2 py-1 rounded-md dark:bg-slate-800 bg-gray-200 dark:text-gray-300 text-gray-700"
            >
              Let&apos;s talk !
            </Link>
          ) : ( */}
          <Link
            href="#Contact"
            // style={roboto.style}
            className="hidden md:inline-block cursor-pointer px-2 py-1 rounded-md dark:bg-slate-800 bg-gray-200 dark:text-gray-300 text-gray-700 w-fit outline-none"
          >
            Contact
          </Link>
          {/* )} */}
        </nav>
      </header>
      <ModeSwitch1 />
      <HamBurger />
    </>
  );
}
