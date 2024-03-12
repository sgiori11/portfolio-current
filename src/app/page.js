import styles from './page.module.css'
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects.js';
import CaseStudies from './components/CaseStudies.js';
import Skills from './components/Skills.js';
import data from './projectsdata.json';
import cases from './cases.json';
import Image from 'next/image';



export default function Home() {
  return (
    <>
      <div>
      <HeroSection />
      <Skills />
      <section className={styles.pageContent}>
        <Sidebar className={styles.sidebar} />
        <section className={styles.caseStudies}>
          <h2>Case Studies</h2>
          {cases.map((caseStudy => (
            <CaseStudies key={caseStudy.id} caseStudy={caseStudy} />
           )))}
        </section>
        <section className={styles.projects}>
          <h2>Public Projects</h2>
          {data.map((project => (
            <Projects key={project.id} project={project} />
          )))}
        </section>
        <footer className={styles.footer}>Built in Milan with espresso and Next.js.</footer>
      </section>
        
      </div>
    </>
  )
}
