"use client";
import Items from "@/components/custom/Items";
import CarouselDemo from "@/components/custom/NewCarousel";
import PremiumCard from "@/components/custom/PremiumCard";
import { AnimatedTestimonialsDemo } from "@/components/custom/Testimonials";

export default function Home() {
  return (
    <div>
      <CarouselDemo />
      <Items/>
      <PremiumCard/>
      <AnimatedTestimonialsDemo/>
    </div>
  );
}
