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
        <section className={styles.grid}>
            <div>
              <p>UX Research Methods</p>
              <span>A/B Testing</span>
              <span>Data Analysis</span>
              <span>Heuristic Evaluations</span>
              <span>Voice of Customer Surveys</span>
              <span>Screen Recordings</span>
              <span>Usability Testing</span>
              <span>Card Sorting</span>
            </div>
            <div>
              <p>Tools</p>
              <span>React + Nextjs</span>
              <span>S(CSS)</span>
              <span>Git</span>
              <span>Figma</span>
              <span>Webflow</span>
              <span>Optimizely</span>
              <span>Google Analytics</span>
              <span>Midjourney</span>
            </div>
            <div>
              <p>Languages</p>
              <span>English (Native)</span>
              <span>Italian (B1 and improving)</span>
              <span>Norwegian (B1 and forgetting)</span>
            </div>
        </section>

    )
};