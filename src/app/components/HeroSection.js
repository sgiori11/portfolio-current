'use client';

import Image from 'next/image';
import fernPic from '/public/fern.png';
import pothos from '/public/pothos.png';
import arrow from '/public/arrow.svg';
import styles from '../styles/HeroSection.module.css';
import { motion } from "framer-motion";




export default function HeroSection() {

    return (
      <section className={styles.container}>
            <Image 
                className={styles.fern}
                src={fernPic}
                alt="A hand-drawn fern"
                width={350}
            />
        <div className={styles.headingCont}>
            <h1 className={styles.h1}>Hi, I'm <motion.span 
                    className={styles.span}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.4 }}                 
        
                    >Steph!</motion.span> I develop and optimize digital products.
            </h1>
            <div>
            <svg className={styles.arrow} width="77" height="192" viewBox="-6 -6 89 204" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className={styles.arrowPath} d="M23.1837 2.9785C21.515 0.115631 17.8414 -0.852408 14.9785 0.816321C12.1156 2.48505 11.1476 6.15864 12.8163 9.0215L23.1837 2.9785ZM12.1453 186.813C12.8703 190.046 16.0792 192.08 19.3126 191.355L72.0046 179.541C75.238 178.816 77.2715 175.607 76.5466 172.374C75.8217 169.14 72.6128 167.107 69.3793 167.832L22.5421 178.333L12.0412 131.495C11.3162 128.262 8.10734 126.228 4.8739 126.953C1.64046 127.678 -0.393085 130.887 0.331848 134.121L12.1453 186.813ZM18 6C12.8163 9.0215 12.8153 9.01974 12.8145 9.01834C12.8145 9.01834 12.8139 9.01728 12.8139 9.01729C12.8139 9.0173 12.8147 9.01872 12.8163 9.02154C12.8196 9.02719 12.8261 9.03845 12.8358 9.05529C12.8551 9.08896 12.8871 9.1449 12.9311 9.22273C13.019 9.3784 13.155 9.62158 13.3341 9.9492C13.6924 10.6045 14.2228 11.5971 14.8858 12.9025C16.2122 15.5141 18.0668 19.3726 20.1345 24.282C24.2742 34.111 29.2437 48.0945 32.5536 64.6746C39.1768 97.8515 39.0925 141.007 12.932 182.288L23.068 188.712C51.4075 143.993 51.3232 97.3985 44.3214 62.3254C40.8189 44.7805 35.5696 30.014 31.1936 19.6242C29.0035 14.4242 27.0261 10.3062 25.5849 7.46857C24.8641 6.04936 24.2769 4.94921 23.8634 4.19289C23.6566 3.8147 23.4933 3.52235 23.3783 3.31895C23.3208 3.21725 23.2755 3.13777 23.2428 3.0809C23.2265 3.05247 23.2134 3.02969 23.2035 3.0126C23.1985 3.00406 23.1944 2.99694 23.1911 2.99126C23.1895 2.98842 23.1876 2.98522 23.1868 2.9838C23.1851 2.98097 23.1837 2.9785 18 6Z" fill="#211B69"/>
</svg>

            </div>
          
        </div>
        <Image 
            src={pothos}
            alt="A hand-drawn pothos"
            width={300}
            className={styles.pothos}
        />
     </section>
    )
}