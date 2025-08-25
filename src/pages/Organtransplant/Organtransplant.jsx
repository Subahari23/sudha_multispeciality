"use client";
import React from "react";
import Banner from "@/assets/alliedhealthservice/Banner.png";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import Main from "@/assets/nursingservice/main.jpg";
import Bookappointment from "@/components/Bookappointment";
import Image from "next/image";
import hospitalOne from "@/assets/home/cards/c1.svg";
import hospitalTwo from "@/assets/home/cards/c2.svg";
import hospitalThree from "@/assets/home/cards/c3.svg";
import hospitalFour from "@/assets/home/cards/c4.svg";
import HospitalCard from "@/components/Hospital";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import OrganTransplantSidebar from "@/components/organtransplantSidebar";


const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Organ Transplant", href: "/organ-transplant" },
];

const hospitalscards = [
    {
        number: <h3 className="text-[44px] text-[#2B3990]">40+</h3>,
        title: (
            <p className="text-md font-bold text-black">Years of Experience</p>
        ),
        link: "/op-centre",
        icon: hospitalOne,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">300+</h3>,
        title: <p className="text-md font-bold text-black">Patient Beds</p>,
        link: "/maternity",
        icon: hospitalTwo,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">24+</h3>,
        title: <p className="text-md font-bold text-black">Departments</p>,
        link: "/heart-care",
        icon: hospitalThree,
    },
    {
        number: <h3 className="text-[44px] text-[#2B3990]">100+</h3>,
        title: <p className="text-md font-bold text-black">Doctor's</p>,
        link: "/heart-care",
        icon: hospitalFour,
    },
];


const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};
const customerSlides = [Main, Main, Main];

const OrganTransplant = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div>
                <div className="flex justify-end -mt-[60px] ">{dots}</div>
            </div>
        ),
        customPaging: (i) => (
            <div className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"></div>
        ),
    };
    return (
        <div>
            <section className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 mx-2 sm:mx-2 md:mx-4 lg:mx-6 overflow-hidden">
                <div
                    className="max-w-full mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10 text-white bg-center bg-no-repeat bg-cover lg:bg-contain rounded-xl overflow-hidden min-h-[280px] md:min-h-[320px] lg:min-h-[400px]"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-2 relative h-full">
                        <div className="pl-2 sm:pl-4 md:pl-4">
                            {/* Breadcrumb */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 text-white"
                            >
                                <Breadcrumb items={breadcrumbItems} />
                            </motion.div>

                            {/* Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 font-bold"
                            >
                                Organ Transplant
                            </motion.h1>

                            {/* Subtext */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6 text-white max-w-[90%] md:max-w-[80%] lg:max-w-[70%]"
                            >
                                Comprehensive Support for Complete Recovery
                            </motion.p>

                            {/* Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <button className="btn-white inline-flex items-center gap-2 bg-white text-[#2B3990] 
                                    text-xs sm:text-sm md:text-base lg:text-lg font-semibold 
                                    px-4 sm:px-5 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                                    Book an Appointment <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </motion.div>
                        </div>

                        <div className="absolute bottom-0 right-0 hidden md:block">
                            <div className="w-[140px] md:w-[180px] lg:w-[200px] overflow-hidden rounded-tl-xl rounded-br-xl bg-white ">
                                <div className="p-3 md:p-4">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B3990]">
                                        40+
                                    </h3>
                                    <p className="text-sm md:text-base lg:text-lg leading-snug text-black font-semibold">
                                        Years of Trusted <br />
                                        Expertise in <br />
                                        Healthcare
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto px-4 pt-14 pb-16 h-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {hospitalscards.map((card, idx) => (
                            <motion.div key={idx} variants={cardVariants}>
                                <HospitalCard
                                    number={card.number}
                                    icon={card.icon}
                                    title={card.title}
                                    link={card.link}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <div>
                <Marquee
                    speed={50}
                    gradient={false}
                    pauseOnHover={true}
                    className="mt-5">
                    <span className="mx-4 text-[#D5DAE5] font-extrabold text-[76px]">
                        Experienced Professionals + Preventive Care
                    </span>
                </Marquee>
            </div>

            <div className="max-w-7xl mx-auto py-16 ">
                <OrganTransplantSidebar />
            </div>

            <div>
                <Bookappointment />
            </div>
        </div>
    );
};

export default OrganTransplant;
