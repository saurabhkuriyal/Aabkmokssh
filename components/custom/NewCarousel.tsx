"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
    {
        id: 1,
        title: "Why wait? Get Heal.",
        subtitle: "Experience the divine energy of sacred gemstones.",
        image: "/Emaral.jpg",
        accent: "from-emerald-600/20 to-emerald-900/40",
        buttonText: "Explore Healing",
    },
    {
        id: 2,
        title: "Prosperity & Abundance",
        subtitle: "Invite wealth and positive vibes into your life.",
        image: "/Blue_stone.jpg",
        accent: "from-blue-600/20 to-blue-900/40",
        buttonText: "Attract Money",
    },
    {
        id: 3,
        title: "Shield Your Spirit",
        subtitle: "Protect yourself from bad omens and negative energy.",
        image: "/curr_hero.jpg",
        accent: "from-purple-600/20 to-purple-900/40",
        buttonText: "View Protection",
    },
];

export default function NewCarousel({ className }: { className?: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, []);

    const slidePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(slideNext, 6000);
        return () => clearInterval(timer);
    }, [slideNext]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 1.1,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.9,
        }),
    };

    return (
        <div className={cn("relative w-full h-[75vh] md:h-[90vh] overflow-hidden rounded-[2.5rem] group shadow-2xl bg-black transition-all", className)}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.7 },
                    }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <Image
                        src={SLIDES[currentIndex].image}
                        alt={SLIDES[currentIndex].title}
                        fill
                        className="object-cover brightness-[0.7] transform scale-105"
                        priority
                    />

                    {/* Gradient Overlays */}
                    <div className={cn("absolute inset-0 bg-gradient-to-r", SLIDES[currentIndex].accent)} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 lg:px-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="h-[2px] w-12 bg-indigo-500" />
                                <span className="text-indigo-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                                    Limited Edition Collection
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                                {SLIDES[currentIndex].title.split(" ").map((word, i) => (
                                    <span key={i} className="inline-block mr-4 italic last:not-italic">
                                        {word}
                                    </span>
                                ))}
                            </h1>

                            <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl font-medium leading-relaxed">
                                {SLIDES[currentIndex].subtitle}
                            </p>

                            <div className="flex flex-wrap gap-5">
                                <button className="group relative bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-white/20 transition-all active:scale-95">
                                    <span className="relative z-10 flex items-center gap-2">
                                        {SLIDES[currentIndex].buttonText}
                                        <Sparkles className="w-5 h-5" />
                                    </span>
                                    <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>

                                <button className="px-8 py-4 rounded-2xl font-bold text-lg border-2 border-white/30 text-white backdrop-blur-md hover:bg-white/10 transition-all">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <button
                    onClick={(e) => { e.stopPropagation(); slidePrev(); }}
                    className="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all pointer-events-auto"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); slideNext(); }}
                    className="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all pointer-events-auto"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setDirection(i > currentIndex ? 1 : -1);
                            setCurrentIndex(i);
                        }}
                        className="relative h-1.5 overflow-hidden rounded-full transition-all duration-300"
                        style={{ width: i === currentIndex ? "4rem" : "1.5rem" }}
                    >
                        <div className={cn(
                            "absolute inset-0",
                            i === currentIndex ? "bg-white" : "bg-white/30"
                        )} />
                        {i === currentIndex && (
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 6, ease: "linear" }}
                                className="absolute inset-0 bg-indigo-400 origin-left"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
