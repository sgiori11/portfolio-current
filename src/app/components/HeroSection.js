import Image from 'next/image';
import styles from '../styles/HeroSection.module.css';
import heroImg from '/public/tree.png';
import logo from '/public/logo.png';

export default function HeroSection() {

    return ( 
      <section className={styles.container}>
       <div className={styles.info}>
            <Image 
                priority={true}
                className={styles.logo}
                src={logo}
                alt="logo"
                width={50} 
            />
            <p>Stephanie Giori</p>
            <p>1996 — Present</p>
       </div>

        <div className={styles.headingCont}>
            <h1 className={styles.h1}>
            I&apos;m an Italian-American designer and developer based in Trento <span className={styles.span}>Oslo</span>. 
            <br></br>
            <br></br>Currently accepting clients while I pursue my master&apos;s degree in Human-Computer Interaction.
            </h1>
            <a className={styles.open} href="mailto:stephaniegiori9@gmail.com">Work with me</a>
         
           
        </div>
        <Image 
                priority={true}
                className={styles.flowers}
                src={heroImg}
                alt="hand-drawn tree"
                width={600}
            />
     </section>
    )
}