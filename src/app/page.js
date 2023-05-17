import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';
import Project from './components/Project';

export default function Home() {
  return (
  <div>
   <HeroSection />
   <section className={styles.pageContent}>
    <Sidebar className={styles.sidebar} />

    <section className={styles.projects}>
      <h2>projects</h2>
      <Project />
    </section>
    
    <h2 className={styles.skills}>Skills</h2>
    <h2 className={styles.about}>About</h2>

   </section>

     
   </div>
  )
}
