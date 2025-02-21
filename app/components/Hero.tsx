"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 
      bg-[url('/hero-bg.png')] bg-cover bg-center"
      
    >
      {/* Gradient Overlay for Fading Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>

      <motion.h1 
        className="text-5xl font-extrabold text-white relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Placement Hub
      </motion.h1>

      <motion.p 
        className="mt-4 text-lg text-gray-300 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Connecting students with top recruiters for a bright future.
      </motion.p>

      <motion.div 
        className="mt-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Button asChild>
          <a href="#stats">View Placement Stats</a>
        </Button>
      </motion.div>
    </section>
  );
}
