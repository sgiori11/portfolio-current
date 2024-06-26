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
            I&apos;m an Italian-American designer and developer based in Milan <span className={styles.span}>Oslo</span>. 
            <br></br>
            <br></br>Currently using my biology degree to optimize websites and apps at <a href="https://media.monks.com/solutions/digital-experience-optimization" target="_blank">Media Monks</a>.
            </h1>
            <span className={styles.open}>
            <a href="mailto:stephaniegiori9@gmail.com">open to collab</a>
            </span>
           
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