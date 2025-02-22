"use client";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const sections = [
  { name: "About Us", id: "about" },
  { name: "Recruiters", id: "recruiters" },
  { name: "Placement Stats", id: "stats" },
  { name: "For Companies", id: "companies" },
  { name: "For Students", id: "students" },
  { name: "Internship", id: "internship" },
  { name: "Contact T&P", id: "contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full bg-white shadow-md z-50 p-4 flex justify-between items-center"
    >
      <h1 className="text-xl font-bold">Placement Hub</h1>
      <div className="hidden md:flex space-x-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="text-gray-700 hover:text-blue-500 transition"
          >
            {section.name}
          </a>
        ))}
      </div>
      {/* <Button variant="outline">Login</Button> */}
    </motion.nav>
  );
}
