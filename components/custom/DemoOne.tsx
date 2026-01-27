"use client";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import GradientMenu from "../gradient-menu";

const DemoOne = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3">
            <motion.div
                layout
                initial={{ width: "95vw", borderRadius: "1rem" }}
                animate={{
                    width: isScrolled ? "auto" : "95vw",
                    backgroundColor: isScrolled ? "rgba(255, 255, 255, 0)" : "rgba(168, 85, 247, 0.4)", // Fallback color
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`flex h-[15vh] px-2 items-center backdrop-blur-md shadow-lg overflow-hidden ${!isScrolled ? "justify-between bg-gradient-to-b from-purple-500 to-white/30" : "justify-center shadow-none backdrop-blur-none"
                    }`}
                style={{
                    // Removing the class-based background if likely to conflict, relying on explicit animation for smoother transition if needed.
                    // But for gradient, CSS transition might be better.
                    // Let's rely on the classNames for gradient and framer-motion layout for movement.
                }}
            >
                <AnimatePresence mode="popLayout">
                    {!isScrolled && (
                        <motion.div
                            key="logo-wrapper"
                            initial={{ width: 0, opacity: 0, scale: 0.8 }}
                            animate={{ width: "auto", opacity: 1, scale: 1 }}
                            exit={{ width: 0, opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex items-center justify-start shrink-0 overflow-hidden"
                        >
                            <img
                                src="/logo.PNG"
                                alt="logo"
                                className="h-[50vh] w-auto object-contain pt-12 pr-4"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div layout transition={{ duration: 0.6, ease: "easeInOut" }}>
                    <GradientMenu />
                </motion.div>
            </motion.div>
        </div>
    );
};

export { DemoOne };
