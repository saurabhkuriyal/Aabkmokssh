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
      <div className=" grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-3 items-center">
      <PremiumCard />
        <div className="flex flex-col justify-center p-4">
          <p className="text-4xl font-semibold mb-1">Sacred Gemstone — Healing & Harmony ✨</p>
          <p className="text-2xl text-gray-600 mb-2">A timeless companion for spiritual balance 🙏</p>
          <pre className="text-md text-gray-700">Revered across traditions,<br />
            this religious stone is believed to channel protective energies,<br />
            promote inner peace, and strengthen devotion. <br />
            Its luminous surface and grounding presence make it perfect for <br />
            meditation, offerings, and daily rituals. 🌿💎</pre>
        </div>
      </div>
      
      <AnimatedTestimonialsDemo/>
    </div>
  );
}
