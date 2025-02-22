"use client";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 px-6 bg-gray-900 text-white relative">
      {/* Background Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-95"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-white tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About Us
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="mt-6 text-lg text-gray-300 leading-relaxed bg-gray-800/80 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          At IIITN, the Training & Placement Office plays a vital role in shaping the careers of students. 
          We are committed to transforming students into industry-ready professionals through strategic 
          initiatives and industry collaborations.
          <br />
          <br />
          Our office actively works with leading organizations to provide top-tier internships, research opportunities, and full-time placements. 
          Additionally, we serve as a Resource Center for students, offering guidance on training programs, online courses, and 
          internships at government organizations.
          <br />
          <br />
          The T&P office is led by Dr. Meera Jagdale (Sr. Office Associate T&P) and is supported by 
          Dr. Paritosh Peshwe (Faculty In-Charge) along with dedicated student representatives.
        </motion.p>
      </div>

      {/* Floating Design Elements for a More Human Feel */}
      <motion.div
        className="absolute top-12 left-20 w-16 h-16 bg-blue-600 rounded-full opacity-30"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-24 w-20 h-20 bg-purple-600 rounded-full opacity-20"
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </section>
  );
}
