"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function PremiumCard() {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for rotation
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Map mouse position to rotation degrees
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Lighting/Sheen effects
    const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const sheenOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.3]); // Only visible on movement

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate generic x/y values between -0.5 and 0.5
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <div className="flex items-center justify-center p-4 md:p-10 perspective-1000">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-[500px] w-full max-w-sm rounded-[2rem] bg-gradient-to-br from-gray-900 to-black p-1 shadow-2xl transition-all duration-200 ease-out"
            >
                {/* Border Gradient Animation */}
                <div className="absolute inset-0 -z-10 animate-spin-slow rounded-[2rem] bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-500 opacity-20 blur-xl md:opacity-40" />

                {/* Card Content Container */}
                <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-gray-950">

                    {/* Background Image / Texture */}
                    <div className="absolute inset-0 opacity-50 mix-blend-overlay">
                        <Image
                            src="/Emaral.jpg"
                            alt="Background Texture"
                            fill
                            className="object-cover blur-sm scale-110"
                        />
                    </div>

                    {/* Main Product Image - Floating */}
                    <motion.div
                        style={{ transform: "translateZ(50px)" }}
                        className="absolute inset-x-0 top-0 h-3/4 flex items-center justify-center overflow-hidden"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <Image
                                src="/Emaral.jpg"
                                alt="Sacred Emerald"
                                fill
                                className="object-cover rounded-2xl mask-image-gradient"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                }}
                            />

                            {/* Floating Particles */}
                            <motion.div
                                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4"
                            >
                                <Sparkles className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                            </motion.div>
                        </div>
                    </motion.div>


                    {/* Text Content Overlay - Slides up on Hover */}
                    <motion.div
                        style={{ transform: "translateZ(30px)" }}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 pt-24"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1">
                                <ShieldCheck className="w-3 h-3" /> Certified Authentic
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-1">Divine Emerald</h2>
                        <p className="text-gray-400 text-sm line-clamp-2 md:line-clamp-none mb-4">
                            Activated for deep healing and heart chakra alignment. Sourced from the ancient mines.
                        </p>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Price</p>
                                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                                    ₹12,999
                                </p>
                            </div>

                            <button className="group relative overflow-hidden rounded-full bg-white px-6 py-3 font-semibold text-black transition-all hover:bg-gray-200">
                                <span className="relative z-10 flex items-center gap-2">
                                    Buy Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Shimmer Effect layer */}
                    <motion.div
                        style={{
                            background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)`,
                            backgroundPosition: sheenX,
                            opacity: sheenOpacity,
                            transform: "translateZ(1px)"
                        }}
                        className="absolute inset-0 pointer-events-none"
                    />

                </div>
            </motion.div>
        </div>
    );
}