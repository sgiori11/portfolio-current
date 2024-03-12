'use client';

import { motion } from "framer-motion";
import styles from '../styles/Skills.module.css';
import Image from 'next/image';
import SoftSkills from '/public/softskills.svg';


export default function Skills() {
  const itemVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween", // Using tween for a more controlled duration without spring physics
        duration: 0.5, // Increase duration to slow down the animation
        ease: "easeOut" // This can be any easing function: "linear", "easeIn", "easeOut", "easeInOut", etc.
      }
    }
  };

  return (
    <motion.section className={styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Customize the trigger point
      transition={{ type: "spring", duration: 0.9, bounce: 0.1,  ease: "easeIn" }}
    >
      <motion.div variants={itemVariants}>
        <p>UX Research Methods</p>
        {/* Wrap each item with motion.span and apply the variants */}
        {["A/B Testing", "Data Analysis", "Heuristic Evaluations", "Voice of Customer Surveys", "Screen Recordings", "Usability Testing", "Card Sorting"].map((skill, index) => (
          <motion.span key={index} variants={itemVariants}>
            {skill}
          </motion.span>
        ))}
      </motion.div>
      <motion.div variants={itemVariants}>
        <p>Tools</p>
        {["React + Nextjs", "S(CSS)", "Git", "Figma", "Webflow", "Optimizely", "Google Analytics", "Midjourney"].map((tool, index) => (
          <motion.span key={index} variants={itemVariants}>
            {tool}
          </motion.span>
        ))}
      </motion.div>
      <motion.div variants={itemVariants}>
        <p>Languages</p>
        {["English (Native)", "Italian (B1 and improving)", "Norwegian (B1 and forgetting)"].map((language, index) => (
          <motion.span key={index} variants={itemVariants}>
            {language}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}
