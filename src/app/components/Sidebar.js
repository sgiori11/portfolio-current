import Image from 'next/image';
import styles from '../styles/Sidebar.module.css';
import github from '/public/github.svg';
import twitter from '/public/twitter.svg';
import codepen from '/public/codepen.svg';
import linkedin from '/public/linkedin.svg';

export default function Sidebar() {
    return (
     <section className={styles.container}>
        <Image 
            src={github}
            alt="Github logo link"
            width={25}
        />

        <Image 
            src={twitter}
            alt="Twitter logo link"
            width={25}
        />

        <Image 
            src={codepen}
            alt="CodePen logo link"
            width={25}
        />

        <Image 
            src={linkedin}
            alt="LinkedIn logo link"
            width={25}
        />
    </section>
    )
};