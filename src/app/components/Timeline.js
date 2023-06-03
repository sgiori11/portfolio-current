'use client';

import { motion } from "framer-motion";
import styles from '../styles/Timeline.module.css';
import Image from 'next/image'
import { useScroll, useSpring } from "framer-motion";
import ImageParallax from './ImageParallax'; // adjust this path based on where the ImageParallax component file is located

function Timeline() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <ImageParallax id={image} key={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

export default Timeline;



