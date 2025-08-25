"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Banner from "@/assets/facilities/pharmacy-banner.webp";

import Sudha1 from "@/assets/pharmacyService/sudha.png";
import Image from "next/image";
import "./pharmacy.css";
import Medicine from "@/assets/pharmacyService/Medicine.png";
import Check from "@/assets/Insurance/check.svg";
import CampusFacilitySlider from "@/components/FacilitySlider/CampusFacilitySlider";
import Slider1 from "@/assets/pharmacyService/slider1.png";
import Slider2 from "@/assets/pharmacyService/slider2.png";
import Slider3 from "@/assets/pharmacyService/slider3.png";
import Breadcrumb from "@/components/Breadcrumb";


const breadcrumbItems = [
    { label: "Home", href: "/" },

    { label: "Facilities", href: "" },

    { label: "Pharmacy", href: "/pharmacy-services" },
];



const facilities = [
    {
        image: Slider1,
        title: (
            <p className="text-primary-blue">
                Gift Shop for <br />
                the New born
            </p>
        ),
    },
    { image: Slider2, title: "Medicine Rack" },
    { image: Slider3, title: "Electronics" },
];


const Pharmacyservice = () => {
    const checklist = [
        "24/7 Pharmacy Support ",
        "Medicines for all specialties and surgeries ",
        "Handled by certified pharmacists ",
        "Quality and authenticity assured ",
        "Patient-first service and quick response "
    ]

    return (
        <div>
            <section className="relative -mt-24 sm:-mt-20 md:-mt-24 lg:-mt-28 mx-2 sm:mx-2 md:mx-4 lg:mx-6 overflow-hidden">
                {/* Banner Container */}
                <div
                    className="relative top-6 max-w-full mx-auto px-4 py-36 z-10 text-white bg-center bg-no-repeat bg-cover lbg-contain rounded-3xl overflow-hidden banner"
                    style={{ backgroundImage: `url(${Banner.src})` }}
                >
                    <div className="pl-8 md:pl-20">
                        {/* Breadcrumb */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className=" mb-3 text-white"
                        >
                            <Breadcrumb items={breadcrumbItems} />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[44px] font-bold mb-4"
                        >
                            Pharmacy
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className=" mb-6 text-white"
                        >
                            Reliable Pharmacy Support, 24/7.
                        </motion.p>
                    </div>

                    <div className="absolute bottom-[20px] hidden md:block right-4 sm:right-10 md:-right-[35px] z-30 text-[#2B3990]  p-4 rounded-xl  w-[220px]">
                        <h3 className="text-[36px] font-bold">40+</h3>
                        <p className="text-lg leading-snug text-black font-semibold">
                            Years of Trusted <br />
                            Expertise in <br />
                            Healthcare
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto   relative z-10 text-white bg-center bg-no-repeat bg-cover md:bg-contain py-16">
                <div className=' flex flex-col justify-center items-center text-center p-5 rounded-lg '>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-6 rounded-xl ">
                    <div className="w-full md:w-1/2  text-start space-y-4 ">
                        <div className="px-5  py-2 font-semibold text-primary-blue bg-white inline-block rounded-full ">
                            Pharmacy
                        </div>
                        <h2 className='text-[30px] text-black '>Sudha Pharmacy </h2>
                        <p className=''>
                           Sudha Hospital has an in house pharmacy department established in the year 1982 working 24*7 which caters to the patients with its timely and 
                           quality service under one roof.
                        </p>

                        <p className=''>
                           The Pharmacy has qualified and experienced pharmacists in catering the patients' needs at the right time and with right quality meeting NABH Standards. 
                           Various advanced and improved dispensing methods are followed to avoid the waiting time and error free dispensing of medicines.
                        </p>

                        <p className=''>
                            We have our internal Formulary committee with experienced consultants and Pharmacists to identify good quality medicines that are available in the market
                            and the Quality assessment technology is used for assessing the product quality in order to prescribe quality medicines to the patients.
                        </p>

                    </div>
                    <div className="w-full md:w-1/2 space-y-4 flex justify-center items-center mt-10">
                        <Image
                            src={Sudha1}
                            alt="Sudha"
                            className="rounded-2xl w-full h-auto object-cover"
                        />
                    </div>
                </div>






            </div>

            <section className="max-w-7xl mx-auto   relative z-10 text-white bg-center bg-no-repeat bg-cover md:bg-contain py-16">

                <div className="bg-white rounded-3xl py-16">
                    <div className=' flex flex-col justify-center items-center text-center  '>
                        <div className="px-5  py-2 bg-blue inline-block font-semibold rounded-full mb-3">
                            Sudha Pharmacy
                        </div>
                        <h2 className='text-[#000000] text-[30px] mb-4'>Pharmacy Service</h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-start bg-[#ffffff] gap-6 rounded-xl p-6">


                        <div className="w-full md:w-1/2 space-y-4 flex justify-center items-center ">
                            <Image
                                src={Medicine}
                                alt="Medicine"
                                className="rounded-xl w-full h-[400px] object-cover"
                            // style={{ height: "300px", width: "450px" }}
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-[#444] text-sm text-start space-y-4 tracking-[0.03em]">
                            <h2 className='text-[#000000]  text-[30px] leading-[1.6]'> Safe, Reliable Medicines, Anytime You Need </h2>
                            <ul className="flex flex-col list-none space-y-4">
                                {checklist.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-[#5E566A]  font-semibold text-sm">
                                        <Image
                                            src={Check}
                                            alt="tick"
                                            width={20}
                                            height={20}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className=''>
                                Our hospital pharmacy serves as a vital link in the continuum of care, ensuring patients have access to the right medications at the right time. 
                                It operates in close coordination with all clinical departments to support safe and effective treatment plans. With a strong focus on patient safety, 
                                we adhere to strict storage, labelling, and dosage protocols.
                            </p>

                        </div>
                    </div>
                </div>

            </section>

            <div className="max-w-7xl mx-auto py-12 px-4">
                <div className="flex justify-center mb-2">
                    <div className="px-5  py-2 bg-white text-primary-blue inline-block font-semibold rounded-full mb-3">
                        Sudha Pharmacy
                    </div>
                </div>
                <h2 className=" text-[30px] text-center">
                    Pharmacy Gallery
                </h2>
                <CampusFacilitySlider data={facilities} />
            </div>
        </div>
    )
}

export default Pharmacyservice