"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 
      bg-[url('/hero-bg.png')] bg-cover bg-center bg-fixed"
    >
      {/* Dark Overlay for Depth */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Animated Heading */}
      <motion.h1 
        className="text-6xl font-extrabold text-white relative z-10 tracking-wide leading-tight
        shadow-md drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Training & Placement Cell
      </motion.h1>

      {/* Subheading */}
      <motion.p 
        className="mt-4 text-xl text-gray-300 relative z-10 px-4 py-2 
        bg-gradient-to-r  tracking-wide leading-tight
        shadow-md drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Bridging students with top recruiters for a successful future.
      </motion.p>

      {/* Call-to-Action Button */}
      {/* <motion.div 
        className="mt-6 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <Button className="px-6 py-3 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300">
          <a href="/placement-stats">View Placement Stats</a>
        </Button>
      </motion.div> */}

      {/* Subtle Floating Elements for a More Human Feel */}
      <motion.div
        className="absolute top-10 left-20 w-16 h-16 bg-blue-500 rounded-full opacity-30"
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-32 w-24 h-24 bg-purple-500 rounded-full opacity-20"
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
    </section>
  );
}
