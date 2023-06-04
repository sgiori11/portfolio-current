'use client';

import styles from '../styles/Timeline.module.css';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ImageParallax from './ImageParallax';

export default function Timeline() {
    //destructure scrollXProgress out of useScroll hook, which presents the value of horizontal scroll as a fraction between 0 and 1.
    const ref = useRef(null);
    const { scrollY } = useScroll({  container: ref });
 
  //transform scrollXProgress, which varies between 0 and 1, to scaleX, which varies between 0 and 100.
  const scaleX = useSpring(scrollY, {
    stiffness: 10,
    damping: 300,
    restDelta: 0.01
  });

  return (
    <div id="scroll-container" className={styles.scrollContainer} ref={ref}>
      {[1, 2, 3, 4].map((image) => (
        <div>
          <ImageParallax id={image} />
        </div>
      ))}
      <motion.div className={styles.progress} style={{ scaleX }} />
    </div>
  );
}

