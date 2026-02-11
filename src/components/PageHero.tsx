'use client';

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  backgroundImage: string;
}

export function PageHero({ title, subtitle, badge, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative py-24 md:py-32 flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay - consistent dengan homepage */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#1e3a8a]/85 to-[#134e4a]/80"></div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge (optional) */}
          {badge && (
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="px-5 py-2 bg-emerald-400/20 backdrop-blur-sm rounded-md border border-emerald-400/30">
                <span className="text-emerald-300 text-sm font-bold tracking-widest uppercase">
                  {badge}
                </span>
              </div>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {title}
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-emerald-400 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-emerald-400 rounded-full"></div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
