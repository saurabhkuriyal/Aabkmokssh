"use client";
import Items from "@/components/custom/Items";
import CarouselDemo from "@/components/custom/NewCarousel";
import PremiumCard from "@/components/custom/PremiumCard";

export default function Home() {
  return (
    <div>
      <CarouselDemo />
      <Items/>
      <PremiumCard/>
    </div>
  );
}
