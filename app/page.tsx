"use client";
import Accordian from "@/components/custom/accordian";
import BannerNew from "@/components/custom/BannerNew";
import Items from "@/components/custom/Items";
import CarouselDemo from "@/components/custom/NewCarousel";
import PremiumCard from "@/components/custom/PremiumCard";
import Testimonials from "@/components/custom/Testimonials";

export default function Home() {
  return (
    <div className="w-full">
      <CarouselDemo className="rounded-b-[3.5rem] mt-3 mx-2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <BannerNew />

        <section className="mt-16 mb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Explore our products</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-medium">Hear are some of us products</p>
        </section>

        <Items />

        <div className="my-20 grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <PremiumCard />
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2rem] opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-4 leading-tight">
              Sacred Gemstone — <br />Healing & Harmony ✨
            </h3>
            <p className="text-2xl text-indigo-600/80 font-semibold mb-6">A timeless companion for spiritual balance 🙏</p>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-medium">
              <p>Revered across traditions, this religious stone is believed to channel protective energies, promote inner peace, and strengthen devotion.</p>
              <p>Its luminous surface and grounding presence make it perfect for meditation, offerings, and daily rituals. 🌿💎</p>
            </div>
          </div>
        </div>

        <section className="mt-20 mb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">What Our Customers Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-medium">Real experiences from our spiritual community</p>
        </section>

        <Testimonials />
        <div className="my-20">
          <Accordian />
        </div>
      </div>
    </div>
  );
}

// bg-gradient-to-b from-white to-emerald-50 