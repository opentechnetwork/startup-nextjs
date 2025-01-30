import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import CustomSolutions from "@components/CustomSolutions";
import Video from "@/components/Video";
import MainServices from "@/components/Services/MainServices";
import AdditionalServices from "@/components/Services/AdditionalServices";
import Metadata from "next";
import React from 'react';



export const metadata: Metadata = {
  title: "Open Tech Innovations | Expert Web Design, SEO, and Digital Solutions",
  description: "Open Tech Innovations offers custom web design, SEO optimization, AI services, and progressive web app development using Next.js and React. Enhance your online presence with our expert team and innovative strategies.",
  keywords: "Web Design, SEO Services, AI Solutions, E-commerce Solutions, Digital Marketing, UX/UI Design, CMS, Website Maintenance, Analytics, Custom Development, Progressive Web Apps, Next.js, React",
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
      < CustomSolutions />
      <MainServices />
      <AdditionalServices />
      <Pricing />
      <Contact />
    </>
  );
}
