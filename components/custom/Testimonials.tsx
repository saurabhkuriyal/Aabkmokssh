"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
    {
        id: 1,
        quote: "These crystals have brought such peace and positive energy into my life. The quality is exceptional and I can feel the healing vibrations every day.",
        name: "Priya Sharma",
        location: "Mumbai, India",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        product: "Emerald Healing Stone"
    },
    {
        id: 2,
        quote: "After placing the money crystal in my workspace, I've noticed a significant improvement in my business. Highly recommend AankMokssh!",
        name: "Rajesh Kumar",
        location: "Delhi, India",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        product: "Blue Prosperity Gem"
    },
    {
        id: 3,
        quote: "The protection stone has been a blessing. I feel shielded from negative energies and my home feels more harmonious than ever before.",
        name: "Ananya Desai",
        location: "Bangalore, India",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        product: "Sacred Protection Crystal"
    },
    {
        id: 4,
        quote: "Beautiful craftsmanship and authentic spiritual energy. These aren't just stones, they're companions on my spiritual journey.",
        name: "Vikram Singh",
        location: "Jaipur, India",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        product: "Green Healing Stone"
    },
    {
        id: 5,
        quote: "The customer service was excellent and the gemstones arrived beautifully packaged. I've already recommended AankMokssh to my friends!",
        name: "Meera Patel",
        location: "Ahmedabad, India",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
        product: "Divine Crystal Set"
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            const next = prev + newDirection;
            if (next < 0) return testimonials.length - 1;
            if (next >= testimonials.length) return 0;
            return next;
        });
    };

    const current = testimonials[currentIndex];

    return (
        <div className="relative py-16 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    {/* Main Testimonial Card */}
                    <div className="relative bg-gradient-to-br from-white to-indigo-50/30 rounded-[3rem] shadow-2xl overflow-hidden border border-white/50 backdrop-blur-sm">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                }}
                                className="p-8 sm:p-12 lg:p-16"
                            >
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    {/* Left: Image */}
                                    <div className="relative">
                                        <div className="relative w-full aspect-square max-w-md mx-auto">
                                            {/* Decorative Elements */}
                                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20 blur-2xl" />

                                            {/* Image Container */}
                                            <div className="relative rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                                <Image
                                                    src={current.image}
                                                    alt={current.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </div>

                                            {/* Floating Quote Icon */}
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ delay: 0.3, type: "spring" }}
                                                className="absolute -top-6 -right-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full p-6 shadow-xl"
                                            >
                                                <Quote className="w-8 h-8 text-white" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Right: Content */}
                                    <div className="space-y-6">
                                        {/* Stars */}
                                        <div className="flex gap-1">
                                            {[...Array(current.rating)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    transition={{ delay: 0.1 * i, type: "spring" }}
                                                >
                                                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                            "{current.quote}"
                                        </blockquote>

                                        {/* Author Info */}
                                        <div className="pt-6 border-t border-gray-200">
                                            <p className="text-xl font-bold text-gray-900">{current.name}</p>
                                            <p className="text-lg text-indigo-600 font-medium">{current.location}</p>
                                            <p className="text-sm text-gray-500 mt-2">Purchased: {current.product}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => paginate(-1)}
                                className="pointer-events-auto bg-white/90 backdrop-blur-md rounded-full p-4 shadow-xl hover:bg-white transition-all border border-gray-200"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-800" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => paginate(1)}
                                className="pointer-events-auto bg-white/90 backdrop-blur-md rounded-full p-4 shadow-xl hover:bg-white transition-all border border-gray-200"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-800" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className="group relative"
                            >
                                <div
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? "w-12 bg-gradient-to-r from-indigo-600 to-purple-600"
                                            : "w-2 bg-gray-300 group-hover:bg-gray-400"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-6 mt-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
                        >
                            <p className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                500+
                            </p>
                            <p className="text-sm text-gray-600 font-semibold mt-2">Happy Customers</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
                        >
                            <p className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                4.9★
                            </p>
                            <p className="text-sm text-gray-600 font-semibold mt-2">Average Rating</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
                        >
                            <p className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                100%
                            </p>
                            <p className="text-sm text-gray-600 font-semibold mt-2">Authentic Gems</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
