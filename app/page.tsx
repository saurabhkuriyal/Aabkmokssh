"use client";
import Items from "@/components/custom/Items";
import CarouselDemo from "@/components/custom/NewCarousel";
import PremiumCard from "@/components/custom/PremiumCard";
import { AnimatedTestimonialsDemo } from "@/components/custom/Testimonials";

export default function Home() {
  return (
    <div className="mx-3 ">
      <CarouselDemo className="rounded-2xl"/>
      <Items/>
      <div className="grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      <PremiumCard   />
      <PremiumCard   />
      </div>
      
      <AnimatedTestimonialsDemo/>
    </div>
  );
}
