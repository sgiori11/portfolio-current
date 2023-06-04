'use client';

import styles from '../styles/Timeline.module.css';
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageParallax from './ImageParallax'; 

function Timeline() {

  //destructure scrollXProgress out of useScroll hook, which presents the value of horizontal scroll as a fraction between 0 and 1.
  const { scrollXProgress } = useScroll();
  //transform scrollXProgress, which varies between 0 and 1, to scaleX, which varies between 0 and 100.
  const scaleX = useTransform(scrollXProgress, [0, 1], [0, 100]);

  return (
    <div id="scroll-container" className={styles.scrollContainer}>
      {[1, 2, 3, 4].map((image) => (
        <div className={styles.imgParallaxContainer}>
          <ImageParallax id={image} />
        </div>
      ))}
      <motion.div className="progress" style={{ scaleX: scrollXProgress }} />
    </div>
  );
}

export default Timeline;
