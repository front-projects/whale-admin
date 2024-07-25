"use client";

import { logout } from "@/app/auth/actions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

export default function Navigation() {
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

  return (
    <div ref={wrapper}>
      <nav
        className="w-screen flex items-center justify-around py-2 h-[72px]"
        id="navigation"
      >
        <Link href='/menu/home'>HOME</Link>
        <Link href='/menu/users'>USERS</Link>
        <button onClick={() => logout()}>Logout</button>
      </nav>
    </div>
  );
}
