"use client";

import Container from "./Container";
import Logo from "./Logo";
import { NavbarData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  console.log(isSideBarOpen);

  return (
    <header className="border-b border-hoverColor/50 sticky top-0 bg-bodyColor z-50 bg-bodyColor">
      <Container className="py-5 flex items-center justify-between">
        {/* Logo */}
        <Logo title="Imon" subTitle="." />

        {/* Navbar List */}
        <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {NavbarData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-hoverColor  relative group overflow-x-hidden ${
                pathname === item?.href && "text-hoverColor bg-lightSky/30 p-1"
              }`}
            >
              {item?.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${
                  pathname === item?.href
                    ? "translate-x-0"
                    : "-translate-x-[105%]"
                }`}
              />
            </Link>
          ))}
          <Link
            // href={"/resume.pdf"}
            href={"https://drive.google.com/file/d/1xDUT5_3doV2YJWPuY-ndkjMfa3CbsyHa/view?usp=drive_link"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-lightSky/30 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
          >
            Hire Me
          </Link>
        </div>

        <button
          onClick={() => setIsSidebarOpen(!isSideBarOpen)}
          className="inline-flex md:hidden "
        >
          <Menu className="hover:text-hoverColor hoverEffect" />
        </button>
      </Container>
      <div className="md:hidden">
        <Sidebar
          isOpen={isSideBarOpen}
          onClose={() => setIsSidebarOpen(false)}
          pathname={pathname}
        />
      </div>
    </header>
  );
};

export default Header;
