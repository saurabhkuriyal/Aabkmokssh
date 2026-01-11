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

      {/* <section className="mt-10 mb-6 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900">Here’s something for you 🎁</h2>
        <p className="mt-2 text-sm text-gray-600">Explore our premium selection — handpicked for devotion, balance, and timeless beauty.</p>
      </section> */}

      <div className="my-10 grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-3">
        <PremiumCard />
        <div className="flex flex-col justify-center p-4">
          <p className="text-4xl font-semibold mb-1">Sacred Gemstone — Healing & Harmony ✨</p>
          <p className="text-2xl text-gray-600 mb-2">A timeless companion for spiritual balance 🙏</p>
          <p className="text-md text-gray-700">Revered across traditions,<br />
            this religious stone is believed to channel protective energies,<br />
            promote inner peace, and strengthen devotion. <br />
            Its luminous surface and grounding presence make it perfect for <br />
            meditation, offerings, and daily rituals. 🌿💎</p>
        </div>
      </div>
      
      <section className="mt-12 mb-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Testimonials</h2>
        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">Hear from our community — real experiences with our sacred gemstones and the harmony they bring.</p>
      </section>

      <AnimatedTestimonialsDemo/>
    </div>
  );
}
