
import Image from 'next/image'; 
import styles from '../styles/Projects.module.css';


export default function Projects({ project }) {

    return (
            <a className={styles.projectLinkCont} href={project.link} target="_blank" rel="noopener noreferrer"
            >
                <div className={styles.imgCont}>
                    <Image 
                        className={styles.img}
                        src={project.image}
                        alt={project.alt}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '400px', height: 'auto' }}
                    />  
                </div>
                <p className={styles.projectTitle}>
                    {project.name}
                </p>
                <div className={styles.tags}>
                    {project.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
           </a> 
    );
}
