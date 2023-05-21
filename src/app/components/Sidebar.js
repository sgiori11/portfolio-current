import Image from 'next/image';
import Link from 'next/link';
/*import styles from '../styles/Sidebar.module.css';*/
import github from '/public/github.svg';
import twitter from '/public/twitter.svg';
import codepen from '/public/codepen.svg';
import linkedin from '/public/linkedin.svg';

export default function Sidebar({ className }) {
    return (
     <section className={className}>
        <Link href="https://github.com/sgiori11">
            <Image 
                src={github}
                alt="Github logo link"
                width={25}
            />
        </Link>

        <Link href="https://twitter.com/sgiori8">
            <Image 
                src={twitter}
                alt="Twitter logo link"
                width={25}
            />
        </Link>

        <Link href="https://codepen.io/stephsstar">
            <Image 
                src={codepen}
                alt="CodePen logo link"
                width={25}
            />
        </Link>

        <Link href="https://www.linkedin.com/in/sgiori119/">
            <Image 
                src={linkedin}
                alt="LinkedIn logo link"
                width={25}
            />
        </Link>
    </section>
    )
};