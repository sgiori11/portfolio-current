'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/CaseStudies.module.css';
import plusIcon from '/public/plus.svg'; 
import { motion } from "framer-motion";

export default function CaseStudies({ caseStudy }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <section className={styles.container}>
            <h3 onClick={toggleOpen}>
                {caseStudy.name}
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    <Image 
                        src={plusIcon}
                        alt={isOpen ? 'Close' : 'Open'}
                        width={20}
                        height={20}
                    />
                </span>
            </h3>
            {isOpen && (
                <div className={styles.caseCont}>
                    <Image 
                        src={caseStudy.image}
                        alt={caseStudy.alt}
                        width={300}
                        height={300}
                    />
                    <div className={styles.caseCopy}>
                        <p>
                            <span>Case: </span>
                            {caseStudy.case}
                        </p>
                        <p>
                            <span>Research and Development: </span>
                            {caseStudy.description}
                        </p>
                        <p>
                        <span>Results: </span>
                            {caseStudy.results}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
