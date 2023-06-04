'use client';

import styles from '../styles/Timeline.module.css';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/Image';

function useParallax(value, distance) {
 //uses useTransform to create a motion value that represents the transformed version of the input value. 
 //It will interpolate between -distance and distance as value goes from 0 to 1.
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageParallax({ id, ref }) {
const { scrollY } = useScroll({  container: ref }); 
  
   //creates a parallax effect where the motion value 7 will interpolate between -300 and 300 
  //as scrollXProgress goes from 0 to 1.
  const y = useParallax(scrollY, 400);

  return (
    <section className={styles.imgParallaxContainer + ' ' + styles.section}>
      <div>
        <Image 
            className={styles.img} 
            src={`/${id}.png`} 
            alt={`Image ${id}`} 
            width={350}
            height={450}
            style={{objectFit: "cover"}}
        />
      </div>
      <motion.h2 
        style={{ y }}
        className={styles.h2}
        >
            {`#00${id}`}
     </motion.h2>
    </section>
  );
}

export default ImageParallax;

