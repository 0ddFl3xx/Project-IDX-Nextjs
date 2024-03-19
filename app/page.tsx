"use client";

import Hero from "@/components/Hero/Hero";
import Consent from "@/components/Cookie/Consent";
import Features from "@/components/Features/Features";
import TestimonialSection from "@/components/Testimonial/Reviews";
import PricingTable from "@/components/Pricing/Table";

export default function Home() {
  return (
    <>
      <Hero />
      <Consent />
      <Features />
      <TestimonialSection/>
      <PricingTable/>
    </>
  );
}
