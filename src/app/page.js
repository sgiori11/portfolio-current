import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects.js';
import data from './projectsdata.json';



export default function Home() {

  return (
  <div>
   <HeroSection />
   <section className={styles.pageContent}>
    <Sidebar className={styles.sidebar} />

    <section className={styles.projects}>
      <h2>Public Projects</h2>
      
      {data.map((project => (
        <Projects key={project.id} project={project} />
      )))}
     
    </section>

    <h2 className={styles.skills}>Skills</h2>
    <h2 className={styles.about}>About</h2>

   </section>

     
   </div>
  )
}
