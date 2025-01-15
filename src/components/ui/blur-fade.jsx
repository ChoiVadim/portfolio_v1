import React from 'react';
import { motion } from 'framer-motion';

export const BlurFade = ({ children, delay = 0, inView, startAnimation }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={startAnimation ? {
        opacity: 1,
        filter: 'blur(0px)',
      } : {}}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.04, 0.62, 0.23, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
};
