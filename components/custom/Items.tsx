"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
    {
        id: 1,
        name: 'Blue Stone',
        href: '/crystal/1',
        price: 'Rs. 500',
        imageSrc: "/Blue_stone.jpg",
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        category: 'Healing',
        badge: 'Popular'
    },
    {
        id: 2,
        name: 'Emerald',
        href: '/crystal/2',
        price: 'Rs. 1000',
        imageSrc: '/Emaral.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        category: 'Money',
        badge: 'New'
    },
    {
        id: 3,
        name: 'Blue Gem',
        href: '/crystal/3',
        price: 'Rs. 750',
        imageSrc: '/Blue_Rectangular.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        category: 'Protection',
    },
    {
        id: 4,
        name: 'Green Stone',
        href: '/crystal/4',
        price: 'Rs. 600',
        imageSrc: '/Green_Stone.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        category: 'Healing',
    },
    {
        id: 5,
        name: 'Red Stone',
        href: '/crystal/5',
        price: 'Rs. 800',
        imageSrc: '/curr_hero.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
        category: 'Energy',
        badge: 'Limited'
    },
    {
        id: 6,
        name: 'Emerald Gemstone',
        href: '/crystal/6',
        price: 'Rs. 1200',
        imageSrc: '/Emarald.avif',
        imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
        category: 'Money',
    },
    {
        id: 7,
        name: 'Dark Blue Gemstone',
        href: '/crystal/7',
        price: 'Rs. 700',
        imageSrc: '/Blue_Rectangular.jpg',
        imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
        category: 'Protection',
    },
    {
        id: 8,
        name: "Green Gemstone",
        href: '/crystal/8',
        price: 'Rs. 650',
        imageSrc: '/Green_Stone.jpg',
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
        category: 'Healing',
    },
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative"
        >
            <Link href={product.href} className="block">
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <Image
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            fill
                            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />

                        {/* Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Badge */}
                        {product.badge && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                                className="absolute top-4 left-4 z-10"
                            >
                                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm">
                                    <Sparkles className="w-3 h-3" />
                                    {product.badge}
                                </span>
                            </motion.div>
                        )}

                        {/* Category Tag */}
                        <div className="absolute top-4 right-4 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-gray-800">
                                {product.category}
                            </span>
                        </div>

                        {/* Quick Actions - Visible on Hover */}
                        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsLiked(!isLiked);
                                }}
                                className={`rounded-full p-3 backdrop-blur-xl transition-all ${isLiked
                                        ? 'bg-red-500 text-white'
                                        : 'bg-white/90 text-gray-800 hover:bg-white'
                                    }`}
                            >
                                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="rounded-full bg-indigo-600 p-3 text-white backdrop-blur-xl transition-all hover:bg-indigo-700"
                            >
                                <ShoppingBag className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
                            {product.name}
                        </h3>
                        <div className="mt-2 flex items-center justify-between">
                            <p className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                {product.price}
                            </p>
                            <motion.div
                                className="opacity-0 transition-opacity group-hover:opacity-100"
                                whileHover={{ x: 5 }}
                            >
                                <span className="text-sm font-semibold text-indigo-600">
                                    View →
                                </span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default function Items() {
    return (
        <div className="relative py-8">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
