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
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start mx-2 mt-2">
            <motion.div
                layout
                initial={{ width: "100%", borderRadius: "1rem", marginTop: 0 }}
                animate={{
                    width: isScrolled ? "auto" : "100%",
                    borderRadius: isScrolled ? "2rem" : "1rem",
                    marginTop: isScrolled ? "1rem" : "0",
                    backgroundColor: isScrolled ? "rgba(255, 255, 255, 0)" : "rgba(168, 85, 247, 0.4)",
                    paddingLeft: isScrolled ? "1rem" : "2rem",
                    paddingRight: isScrolled ? "1rem" : "2rem",
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`flex h-24 items-center backdrop-blur-md shadow-lg overflow-hidden ${!isScrolled
                    ? "justify-between bg-gradient-to-b from-purple-500 to-white/30"
                    : "justify-center shadow-none backdrop-blur-none"
                    }`}
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
                                className="h-16 w-auto object-contain"
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
