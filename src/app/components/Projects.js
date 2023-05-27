'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import { motion } from "framer-motion";

const cardVariants = {
    offscreen: {
      x: -300,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.25,
        duration: 1,
        delay: 0.2
      }
    }
  };

export default function Projects({ project }) {
    return (
        <motion.div 
            className={styles.gridCont}
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            viewport={{ once: true }}
                    >
            <a className={styles.projectLinkCont} href={project.link} target="_blank" rel="noopener noreferrer">
                <h3 className={styles.projectTitle}>
                    {project.name}
                <span className={styles.svg}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.939347 20.9791C0.353557 21.5649 0.353551 22.5147 0.939334 23.1004C1.52512 23.6862 2.47486 23.6862 3.06065 23.1005L0.939347 20.9791ZM23.54 2.00001C23.54 1.17158 22.8685 0.500005 22.04 0.5L8.54005 0.499918C7.71163 0.499913 7.04005 1.17148 7.04004 1.99991C7.04004 2.82834 7.71161 3.49991 8.54003 3.49992L20.54 3.49999L20.54 15.5C20.54 16.3284 21.2115 17 22.0399 17C22.8684 17 23.54 16.3284 23.54 15.5L23.54 2.00001ZM3.06065 23.1005L23.1007 3.06067L20.9794 0.939333L0.939347 20.9791L3.06065 23.1005Z" fill="#6F00FD"/>
                    </svg>
                </span>
                </h3>
                <div className={styles.tags}>
                    <span>{project.tags[0]}</span>
                    <span>{project.tags[1]}</span>
                    <span>{project.tags[2]}</span>
                    <span>{project.tags[3]}</span>
                </div>
                <p className={styles.projectSummary}>
                    {project.description}
                </p>
                <div className={styles.projectImg}>
                    <Image 
                        src={project.image}
                        alt={project.alt}
                        width={250}
                        height={150}
                    />
               </div>
            </a>
        </motion.div>
    )
}