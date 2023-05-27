'use client';

import styles from '../styles/Skills.module.css';
import Image from 'next/image'
import SoftSkills from '/public/softskills.svg';
import { motion } from "framer-motion";


const containerVariants = {
    offscreen: {
      opacity: 0, 
      transition: {
        when: "afterChildren",
      },
    },
    onscreen: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    }
  };
  
  const skillVariants = {
    offscreen: {
      opacity: 0, 
      scale: 0.5
    },
    onscreen: {
      opacity: 1, 
      scale: 1,
      transition: {
          type: "spring", 
          stiffness: 100 
      }
    }
  };

export default function Skills() {

 return (
        <div>
            <div className={styles.skillsCont}>
              <span>React</span>
              <span>Next.js</span>
              <span>Javascript</span>
              <span>CSS</span>
              <span>HTML</span>
              <span>Webflow</span>
              <span>Google Analytics</span>
              <span>Amplitude</span>
              <span>GTM</span>
              <span>UI/UX Design</span>
              <span>Figma</span>
              <span>A/B Testing</span>
            </div>
            <div className={styles.skillsCont + ' ' + styles.softSkills}>
          <Image 
                src={SoftSkills}
                alt="A label and arrow pointing to softer skills."
                width={180}
                className={styles.softSkillsImg}
            />
            <motion.div className={styles.softSkillsCont} variants={containerVariants} initial="offscreen" whileInView="onscreen">
              
              <motion.span 
                variants={skillVariants}>
                  Creative
              </motion.span>
  
              <motion.span 
                variants={skillVariants}>
                  Open-minded
              </motion.span>
  
              <motion.span 
                variants={skillVariants}>
                  Resourceful
              </motion.span>
            </motion.div>
            </div>
        </div>

    )
};