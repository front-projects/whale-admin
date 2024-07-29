"use client";

import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import NavItem from "./NavItem";
import LogOutIcon from "./LogOutIcon";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlClose } from "react-icons/sl";
import TitleForNav from "./TitleForNav";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapper = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        "#navigation",
        { y: -200, opacity: 0 },
        { y: 0, ease: "power2.inOut", duration: 0.7, opacity: 1 }
      );
    },
    { scope: wrapper }
  );

  useEffect(() => {
    const timeline = gsap.timeline();
    isOpen
      ? timeline
          .to(".nav-mob", { left: 0 })
          .to(".nav-mob", { background: "rgba(0,0,0,.5)", duration: 0.1 })
      : timeline
          .to(".nav-mob", { background: "none", duration: 0.1 })
          .to(".nav-mob", { left: "-100vw" });
  }, [isOpen]);

  return (
    <div ref={wrapper}>
      {/* PC */}
      <nav
        className="w-screen flex items-center justify-around py-2 h-[72px] max-sm:hidden"
        id="navigation"
      >
        <div className="flex items-center gap-4">
          <NavItem href="/menu/users">USERS</NavItem>
          <NavItem href="/menu/logs">DEPOSITS</NavItem>
          <NavItem href="/menu/logs">LOTTERY</NavItem>
          <NavItem href="/menu/logs">LOGS</NavItem>
        </div>

        <LogOutIcon />
      </nav>
      {/* MOBILE */}
      <div className="h-[72px] flex items-center justify-center px-4 sm:hidden relative">
        <GiHamburgerMenu
          className="text-[200%] absolute left-4"
          onClick={() => setIsOpen(true)}
        />{" "}
        <TitleForNav />
      </div>
      <nav
        className="nav-mob fixed left-[-100vw] top-0 w-screen h-[100dvh] z-10"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="h-full w-[80%] bg-[#17181e] flex flex-col px-2 gap-2 py-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full text-end flex justify-end text-[200%] p-2">
            <SlClose onClick={() => setIsOpen(false)} />
          </div>

          <NavItem href="/menu/users">USERS</NavItem>
          <NavItem href="/menu/logs">DEPOSITS</NavItem>
          <NavItem href="/menu/logs">LOTTERY</NavItem>
          <NavItem href="/menu/logs">LOGS</NavItem>
          <LogOutIcon />
        </div>
      </nav>
    </div>
  );
}
