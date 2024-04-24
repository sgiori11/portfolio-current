
import Image from 'next/image';
import trivitalize from '/public/trivitalize.png';
import sji from '/public/sji.png';
import styles from '../styles/Designs.module.css';

export default function Designs() {
    return(
        <section className={styles.container}>
            <a href="">
                <div className={styles.imgCont}>
                    <Image 
                        className={styles.img}
                        src={trivitalize}
                        alt="Hero section for TriVitalize brand"
                        width={400}
                    />  
                </div>
                <p>Nextup.Monks x Cannes Lions (Shortlisted)
                    <br></br>
                <span>2024</span>
                </p>
           </a>

           <a href="https://www.behance.net/gallery/196749457/Startup-Jobs-Italia/modules/1114253727" target='_blank'>
             <div className={styles.imgCont}>
                <Image 
                    className={styles.img}
                    src={sji}
                    alt="Hero section for Startup Jobs Italia"
                    width={400}
                />  
            </div>
             <p>Startup Jobs Italia
             <br></br>
             <span>2023</span>
             </p>
           </a>
        </section>


    )
};