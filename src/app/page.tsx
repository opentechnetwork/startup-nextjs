import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import MainServices from "@/components/Services/MainServices";
import AdditionalServices from "@/components/Services/AdditionalServices";
import { Metadata } from "next";
import React from 'react';


export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Next js Template",
  keywords: "Next.js, SaaS, startup, template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      {/*<Testimonials />*/}
      <MainServices />
      <AdditionalServices />
      <Pricing />
      <Contact />
    </>
  );
}
