import Image from 'next/image';
import github from '/public/github.svg';
import twitter from '/public/twitter.svg';
import codepen from '/public/codepen.svg';
import linkedin from '/public/linkedin.svg';

export default function Sidebar({ className }) {
    return (
     <section className={className}>
        <a href="https://github.com/sgiori11" target="_blank" rel="noopener noreferrer">
            <Image 
                src={github}
                alt="Github logo link"
                width={25}
            />
        </a>

        <a href="https://twitter.com/sgiori8" target="_blank" rel="noopener noreferrer">
            <Image 
                src={twitter}
                alt="Twitter logo link"
                width={25}
            />
        </a>

        <a href="https://codepen.io/stephsstar" target="_blank" rel="noopener noreferrer">
            <Image 
                src={codepen}
                alt="CodePen logo link"
                width={25}
            />
        </a>

        <a href="https://www.linkedin.com/in/sgiori119/" target="_blank" rel="noopener noreferrer">
            <Image 
                src={linkedin}
                alt="LinkedIn logo link"
                width={25}
            />
        </a>
    </section>
    )
};