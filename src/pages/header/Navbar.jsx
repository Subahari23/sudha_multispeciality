"use client";

import { links } from "@/constants/navLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// import ThemeSwitch from "../ThemeSwitch";
import MenuImage from "./MenuImage";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import SubLink from "./SubLink";
import Call from "../../assets/home/call.svg";
import TeleCall from "../../assets/home/tele-call.svg";
import { cn } from "@/lib/utility";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import homeLogo from "../../assets/home/logo.svg"; // For home page before scroll
import darkLogo from "../../assets/home/logo.svg"; // For home page after scroll
import whiteLogo from "../../assets/home/whiteLogo.svg";
import SpecialSubLink from "./Specialites";
import Academics from "./Academics";
import HeaderOne from "@/assets/header_one.svg";
import HeaderTwo from "@/assets/header_two.svg";
import { ArrowUpRight } from "lucide-react";
import './Navbar.css';
export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [hovering, setHovering] = useState(null);
  const subRef = useRef(null);
  const [hoveredSubLinkImage, setHoveredSubLinkImage] = useState(null);

  const whiteTextRoutes = [
    "/cardiology",
    "/find-doctor",
    "/about",
    "/awards-and-honors",
    "/nursing-services",
    "/our-growth-story",
    "/doctor-detail",
    "/why-sudha",
    "/anaesthesiology",
    "/mother-and-childcare",
  ];
  const isWhitePage = whiteTextRoutes.some((route) =>
    pathname.startsWith(route)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleMouseEnter(index) {
    if (links[index].subLinks) {
      setHovering(index);
    } else {
      setHovering(null);
    }
  }

  let currentLogo = homeLogo;

  if (isScrolled) {
    currentLogo = darkLogo;
  } else {
    currentLogo = pathname === "/" ? whiteLogo : whiteLogo;
  }

  console.log("links", links);

  return (
    <>
      <div className="hidden md:block text-sm text-black py-4 max-w-7xl mx-auto">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-y-2">
          {/* Left - Welcome Text */}
          <p className="text-center md:text-left ">UpComing Events</p>

          {/* Right - Contact Numbers */}
          <div className="flex gap-4 items-center text-sm">
            <div className="flex items-center gap-2">
              <Image src={TeleCall} alt="Phone" className="w-8 h-8" />
              <a
                href="tel:+914242454545"
                className="text-[#2B3990] font-semibold text-sm"
              >
                042-424-54545
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Call} alt="WhatsApp" className="w-8 h-8" />
              <Link
                href="tel:+7670076006"
                className="text-[#2B3990] font-semibold text-sm"
              >
                +91 76-7007-6006
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 py-3  mb-navbar max-w-7xl mx-auto text-sm transition-all supports-[backdrop-filter]:bg-background-transparent",
          isScrolled
            ? "w-full bg-white text-black"
            : isWhitePage
              ? "max-w-7xl mx-auto bg-transparent text-black lg:text-white"
              : "max-w-7xl mx-auto bg-transparent text-white"
        )}
      >
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between mx-auto">
          <Link
            href="/"
            className="hidden lg:flex relative items-center gap-x-3  font-bold text-muted hover:text-accent text-3xl transition ease-in-out"
          >
            <Image src={currentLogo} alt="img" />
          </Link>

          <div className="hidden lg:flex items-center gap-x-10">
            <nav
              className="flex items-center "
              onMouseLeave={() => {
                if (!subRef.current) {
                  setHovering(null);
                }
              }}
            >
              {links
                ?.filter((link) => link && link.hrefs && link.label)
                .map((link, index) => (
                  <NavLink
                    key={index}
                    handleMouseEnter={handleMouseEnter}
                    hovering={hovering}
                    index={index}
                    link={link}
                  />
                ))}

              <div
                ref={subRef}
                className={cn(
                  "absolute top-20 left-0 px-4 sm:px-0 py-0 pt-4 w-full bg-white text-black transition-all ease-in-out",
                  hovering || hovering === 0
                    ? "opacity-100 border-t shadow-[0_4px_15px_rgba(0,0,0,0.08)] border-accent"
                    : "opacity-0 border-none pointer-events-none"
                )}
                onMouseLeave={() => setHovering(null)}
              >
                <AnimatePresence>
                  {hovering !== null && links[hovering].subLinks && (
                    <>
                      <motion.div
                        key="mega-menu"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        // className="absolute left-0 top-full w-full z-50 bg-white px-6 py-8 shadow-md border-t border-gray-200"
                        onMouseLeave={() => setHovering(null)}
                      >
                        {/* For 'aboutus' without image preview */}
                        {links[hovering]?.type === "aboutus" && (
                          <div className="flex flex-col lg:flex-row gap-6 max-w-[1560px] px-6 mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
                              {links[hovering].subLinks.map(
                                (subLink, index) => (
                                  <SubLink
                                    key={index}
                                    index={index}
                                    subLink={subLink}
                                    setHoveredSubLinkImage={
                                      setHoveredSubLinkImage
                                    }
                                  />
                                )
                              )}
                            </div>



                            {/* Image preview on right */}
                            <div className="hidden lg:block w-[300px] shrink-0 rounded-2xl overflow-hidden">
                              <MenuImage
                                image={
                                  hoveredSubLinkImage == null
                                    ? links[hovering].imagestatic
                                    : hoveredSubLinkImage
                                }
                                width={300}
                                height={200}
                              />
                            </div>
                          </div>
                        )}

                        {/* For 'specialites' without image preview */}
                        {links[hovering]?.type === "specialites" && (
                          <div className="max-w-[1560px] mx-auto px-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                              {links[hovering].subLinks.map(
                                (subLink, index) => (
                                  <SpecialSubLink
                                    key={index}
                                    index={index}
                                    subLink={subLink}
                                    setHoveredSubLinkImage={
                                      setHoveredSubLinkImage
                                    }
                                  />
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {/* For 'facilities' with image preview */}
                        {links[hovering]?.type === "facilities" && (
                          <div className="flex flex-col lg:flex-row gap-6 max-w-[1560px] px-6  mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
                              {links[hovering].subLinks.map(
                                (subLink, index) => (
                                  <SubLink
                                    key={index}
                                    index={index}
                                    subLink={subLink}
                                    setHoveredSubLinkImage={
                                      setHoveredSubLinkImage
                                    }
                                  />
                                )
                              )}
                            </div>

                            {/* Image preview only for aboutus */}
                            <div className="hidden lg:block w-[300px] shrink-0 rounded-2xl overflow-hidden">
                              <MenuImage
                                image={
                                  hoveredSubLinkImage == null
                                    ? links[hovering].imagestatic
                                    : hoveredSubLinkImage
                                }
                                width={300}
                                height={200}
                              />
                            </div>
                          </div>
                        )}

                        {/* For 'academics' with image preview */}
                        {links[hovering]?.type === "academics" && (
                          <div className="flex flex-col lg:flex-row gap-6 max-w-[1560px] px-6 mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
                              {links[hovering].subLinks.map(
                                (subLink, index) => (
                                  <Academics
                                    key={index}
                                    index={index}
                                    subLink={subLink}
                                    setHoveredSubLinkImage={
                                      setHoveredSubLinkImage
                                    }
                                  />
                                )
                              )}
                            </div>


                            {console.log("links[hovering].image", links[hovering].image)}
                            {/* Image preview only for aboutus */}
                            <div className="hidden lg:block w-[300px] shrink-0 rounded-2xl overflow-hidden">
                              <MenuImage
                                image={
                                  hoveredSubLinkImage == null
                                    ? links[hovering].imagestatic
                                    : hoveredSubLinkImage
                                }
                                width={300}
                                height={200}
                              />
                            </div>
                          </div>
                        )}

                        {/* Additional sections like facilities, etc., can go here */}
                        <div className="py-5 px-6 mt-3 flex justify-between items-center border-t border-gray-200">
                          <p className="text-black text-md font-bold">
                            24x7 healthcare support for your needs.{" "}
                            <span className="text-[#2B3990] text-md font-bold">
                              Book Your Appointment
                            </span>
                          </p>

                          <div className="flex gap-5">
                            <div className="flex items-center gap-4">

                              <Image src={HeaderOne} alt="HeaderOne" className="w-[36px] h-[36px]" />
                              <Link
                                href="tel:+7670076006"
                                className="text-[#2B3990] font-semibold text-sm"
                              >
                                +91 76-7007-6006
                              </Link>

                            </div>
                            <div className="flex items-center gap-4">
                              <Image src={HeaderTwo} alt="HeaderTwo" className="w-[36px] h-[36px]" />
                              <Link
                                href="tel:+9042065454"
                                className="text-[#2B3990] font-semibold text-sm"
                              >
                                +91 90-4206-5454
                              </Link>
                             
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </div>
          <div className="flex flex-row-reverse justify-center gap-x-10 lg:gap-x-0  ">
            <Link
              href="/"
              className="block lg:hidden relative items-center gap-x-3 flex font-bold text-muted hover:text-accent text-3xl transition ease-in-out"
            >
              <Image src={currentLogo} alt="img" />
            </Link>
            <div className="hidden lg:block  items-center gap-x-4">
              <div className="  rounded-full overflow-hidden relative">
                <button
                  className={cn(
                    " btn-diagonal flex items-center gap-2 text-[14px] pt-3 pb-3 pr-8 pl-8 rounded-full transition letter-space",
                    isScrolled
                      ? "bg-[#ffffff] text-[#2B3990] text-[14px] shadow-sm shadow-accent border-b border-accent"
                      : isWhitePage
                        ? "bg-white text-[#2B3990] hover:bg-[#2B3990] hover:text-[#2B3990]"
                        : "bg-[#2B3990] text-white hover:bg-[#ffffff]"
                        ? "bg-white text-[#2B3990] hover:bg-gray-100"
                        : "bg-[#2B3990] text-white hover:bg-[#1f2f70]"
                  )}
                >
                  Consult Our Specialists <ArrowUpRight className="w-5 h-5" />
                </button>

              </div>
            </div>
          </div>
          {/* Mobile sidebar */}
          <MobileNav />
        </div>
      </header>
    </>
  );
}
