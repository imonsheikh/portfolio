import { X } from "lucide-react";
import React from "react";
import Logo from "./Logo";
import { NavbarData } from "@/constants";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, pathname }) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 z-50 min-w-72 bg-bodyColor border-1 border-l-hoverColor/20 transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } hoverEffect`}
    >
      <div className="flex justify-end p-4 pt-5">
        <button
          className="hover:text-red-600 hoverEffect"
          aria-label="Close sidebar"
          onClick={onClose}
        >
          <X />
        </button>
      </div>
      <nav className="flex flex-col px-5 gap-7 text-sm uppercase tracking-wide font-medium mt-2">
        <Logo title="Imon" subTitle="." />

        {/* NavLists */}
        {NavbarData?.map((item) => (
          <Link
            onClick={onClose}
            key={item?.title}
            href={item.href}
            className={`hover:text-hoverColor hoverEffect ${
              item.href === pathname && "text-hoverColor"
            } relative group overflow-x-hidden`}
          >
            {item?.title}
          </Link>
        ))}

        {/* Hire Link */}
        <Link
          // href={"/resume.pdf"}
          href={
            "https://drive.google.com/file/d/1xDUT5_3doV2YJWPuY-ndkjMfa3CbsyHa/view?usp=drive_link"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-lightSky/30 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect w-28"
        >
          Hire Me
        </Link>

        {/* Social Links */}
        <SocialLinks />
      </nav>
    </div>
  );
};

export default Sidebar;
