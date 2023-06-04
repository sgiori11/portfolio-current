'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from '../styles/Timeline.module.css';
import Image from 'next/image';
import workExperience from '../workexp.json';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageComponent({ data }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section className={styles.section}>
      <div ref={ref}>
        <Image
          className={styles.img}
          src={data.image}
          alt={data.alt}
          width={350}
          height={450}
          style={{objectFit: "cover"}}
        />
      </div>
      <motion.div style={{ y }}>
        <h2>{data.place}</h2>
        <p className={styles.jobTitle}>{data.jobtitle}</p>
        <p className={styles.company}>{data.company}</p>
        <p className={styles.years}>{data.years}</p>
      </motion.div>
    </section>
  );
}

function Timelinetwo() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {workExperience.map((experience, index) => (
        <ImageComponent key={index} data={experience} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

export default Timelinetwo;
