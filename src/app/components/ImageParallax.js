'use client';

import styles from '../styles/Timeline.module.css';
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

function useParallax(value, distance) {
 //uses useTransform to create a motion value that represents the transformed version of the input value. 
 //It will interpolate between -distance and distance as value goes from 0 to 1.
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageParallax({ id }) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll();

  //creates a parallax effect where the motion value x will interpolate between -300 and 300 
  //as scrollXProgress goes from 0 to 1.
  const x = useParallax(scrollXProgress, 300);

  return (
    <section ref={ref}>
      <img src={`/${id}.png`} alt={`Image ${id}`} />
      <motion.h2 style={{ x }} className={styles.h2}>Please work</motion.h2>
    </section>
  );
}

export default ImageParallax;
