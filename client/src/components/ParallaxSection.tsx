import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  offsetMultiplier?: number; // Controls the parallax effect intensity
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
}

const ParallaxSection = ({
  children,
  className = '',
  offsetMultiplier = 0.3,
  direction = 'up',
  duration = 0.5,
  delay = 0,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Convert direction into proper transform properties
  const getMotionValues = () => {
    if (direction === 'up' || direction === 'down') {
      // For vertical movement
      const intensity = direction === 'up' ? -80 : 80;
      const y = useTransform(
        scrollYProgress,
        [0, 1],
        [intensity * offsetMultiplier, 0]
      );
      return { y };
    } else {
      // For horizontal movement
      const intensity = direction === 'left' ? -80 : 80;
      const x = useTransform(
        scrollYProgress,
        [0, 1],
        [intensity * offsetMultiplier, 0]
      );
      return { x };
    }
  };

  const motionValues = getMotionValues();

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ ...motionValues }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;