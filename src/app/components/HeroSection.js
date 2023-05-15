import Image from 'next/image';
import fernPic from '/public/fern.png';
import pothos from '/public/pothos.png';
import arrow from '/public/arrow.svg';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
    return (
      <section className={styles.container}>
        <Image 
            src={fernPic}
            alt="A hand-drawn fern"
            width={300}
            className={styles.fern}
        />
        <div className={styles.headingCont}>
            <h1 className={styles.h1}>Hi, I'm 
                <span className={styles.span}> Steph! </span>
            I develop and optimize digital products.
            </h1>
            <Image 
                src={arrow}
                alt="An arrow pointing downwards"
                width={40}
                className={styles.arrow}
            />
        </div>
       
        <Image 
            src={pothos}
            alt="A hand-drawn pothos"
            width={250}
            className={styles.pothos}
        />
     </section>
    )
}