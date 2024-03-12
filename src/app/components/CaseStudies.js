'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import styles from '../styles/CaseStudies.module.css';
import plusIcon from '/public/plus.svg';

// Variants for the title animation
const titleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Variants for the container that holds the animated content
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Variants for each child (image and paragraphs) that will be animated
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function CaseStudies({ caseStudy }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section className={styles.container}>
      <motion.div 
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        <h3 onClick={toggleOpen}>
          {caseStudy.name}
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
          >
            <Image 
              src={plusIcon}
              alt={isOpen ? 'Close' : 'Open'}
              width={20}
              height={20}
            />
          </motion.span>
        </h3>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className={styles.caseCont}
          >
            <motion.div variants={itemVariants} className={styles.caseImg}>
              <Image 
                src={caseStudy.image}
                alt={caseStudy.alt}
                width={300}
                height={300}
                style={{objectFit: "contain"}}
              />
            </motion.div>
            <motion.p variants={itemVariants} className={styles.features}>
              {caseStudy.features}
            </motion.p>
            <motion.p variants={itemVariants}>
              <span>Case: </span>
              {caseStudy.case}
            </motion.p>
            <motion.p variants={itemVariants}>
              <span>Research and Development: </span>
              {caseStudy.description}
            </motion.p>
            <motion.p variants={itemVariants}>
              <span>Results: </span>
              {caseStudy.results}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
