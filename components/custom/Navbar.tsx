"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollY } = useScroll();

    // Smoother state switch for elements that need boolean logic
    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 60);
        });
        return () => unsubscribe();
    }, [scrollY]);

    // Continuous interpolation for a "butter-smooth" feel
    const navWidth = useTransform(scrollY, [0, 80], ["100%", "fit-content"]);
    const navPadding = useTransform(scrollY, [0, 80], ["0rem 2rem", "0rem 1.5rem"]);
    const navRadius = useTransform(scrollY, [0, 80], ["1rem", "3rem"]);
    const navBg = useTransform(
        scrollY,
        [0, 80],
        ["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.85)"]
    );
    const navBorder = useTransform(
        scrollY,
        [0, 80],
        ["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.6)"]
    );

    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "Explore",
            href: "#",
            dropdown: [
                { name: "Healing", href: "/explore/healing" },
                { name: "Money", href: "/explore/money" },
                { name: "Bad Omen", href: "/explore/bad-omen" },
            ]
        },
        { name: "About", href: "/about" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
                <motion.nav
                    layout
                    style={{
                        width: navWidth,
                        borderRadius: navRadius,
                        padding: navPadding,
                        backgroundColor: navBg,
                        borderColor: navBorder,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                        mass: 0.8,
                        layout: { duration: 0.4, ease: "easeOut" }
                    }}
                    className={cn(
                        "relative flex items-center justify-between h-16 md:h-18 backdrop-blur-xl border shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]",
                        isScrolled && "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
                    )}
                >
                    {/* Logo Section */}
                    <AnimatePresence mode="popLayout">
                        {!isScrolled && (
                            <motion.div
                                key="logo"
                                initial={{ opacity: 0, x: -10, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -10, scale: 0.95, width: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="flex items-center overflow-hidden mr-6"
                            >
                                <img
                                    src="/logo.PNG"
                                    alt="AankMokssh"
                                    className="h-14 md:h-20 w-auto object-contain"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Links Section */}
                    <motion.div
                        layout
                        className={cn(
                            "flex items-center gap-1 md:gap-4 transition-all duration-300",
                            isScrolled ? "mx-auto" : ""
                        )}
                    >
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-semibold transition-all flex items-center gap-1 px-4 py-2 rounded-full",
                                            "text-gray-700 hover:text-indigo-600 hover:bg-white/60",
                                            isScrolled && "text-[13px] px-3"
                                        )}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <ChevronDown className={cn(
                                                "w-4 h-4 transition-transform duration-300",
                                                activeDropdown === link.name ? "rotate-180" : ""
                                            )} />
                                        )}
                                    </Link>

                                    {/* Enhanced Dropdown */}
                                    {link.dropdown && (
                                        <AnimatePresence>
                                            {activeDropdown === link.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white/95 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl p-2 z-[60]"
                                                >
                                                    <div className="grid gap-1">
                                                        {link.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="flex items-center gap-2 px-4 py-2.5 text-[0.85rem] text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all font-medium"
                                                            >
                                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-200" />
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Menu Icon */}
                        <button
                            className="md:hidden p-2 text-gray-700 hover:bg-white/50 rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </motion.div>

                    {/* Right Button Section */}
                    <AnimatePresence mode="popLayout">
                        {!isScrolled && (
                            <motion.div
                                key="action-button"
                                initial={{ opacity: 0, scale: 0.9, x: 10 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, x: 10, width: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="hidden md:block ml-4 overflow-hidden"
                            >
                                <button className="group relative overflow-hidden bg-gray-950 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap">
                                    <span className="relative z-10">Limited Edition</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[48] bg-black/40 backdrop-blur-sm md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-[80%] bg-white/95 backdrop-blur-3xl shadow-2xl p-8 flex flex-col gap-8 pt-24"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="flex flex-col">
                                        <div
                                            className="flex items-center justify-between py-4 text-xl font-bold text-gray-900 border-b border-gray-100"
                                            onClick={() => link.dropdown && setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                        >
                                            {link.dropdown ? (
                                                <span className="flex items-center gap-2">
                                                    {link.name} <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === link.name && "rotate-180")} />
                                                </span>
                                            ) : (
                                                <Link href={link.href} className="w-full" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
                                            )}
                                        </div>

                                        {link.dropdown && activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                className="overflow-hidden flex flex-col gap-3 pl-4 bg-gray-50/50 rounded-xl mt-2"
                                            >
                                                {link.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="text-lg text-gray-600 font-medium py-3 border-b border-gray-100 last:border-0"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <button className="mt-auto w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg">
                                Limited Edition
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
