'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ParallaxBackground.module.css';

export default function ParallaxBackground() {
  // const { scrollYProgress } = useScroll();
  // const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const y = 0;
  //  const y = useTransform(scrollYProgress, (value) => value * 0.7);

  return <motion.div style={{ y }} className={styles.background} />;
}
