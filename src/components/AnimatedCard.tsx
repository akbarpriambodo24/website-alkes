'use client';

import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
