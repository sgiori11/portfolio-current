import styles from './page.module.css'
import HeroSection from './components/HeroSection';
import Designs from './components/Designs';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects.js';
import CaseStudies from './components/CaseStudies.js';
import Skills from './components/Skills.js';
import Collage from './components/Collage.js';
import data from './projectsdata.json';
import cases from './cases.json';
import Image from 'next/image';



export default function Home() {
  return (
    <>
      <div>
      <HeroSection />
      <section className={styles.pageContent}>
      <section className={styles.skills}>
      <h2>SKILLS</h2>
        <Skills />
      </section>
        <Sidebar className={styles.sidebar} />
        <section className={styles.caseStudies}>
          <h2>CRO</h2>
          {cases.map((caseStudy => (
            <CaseStudies key={caseStudy.id} caseStudy={caseStudy} />
           )))}
        </section>
        <section className={styles.designs}>
          <h2>DESIGN</h2>
          <Designs />
        </section>
        <section className={styles.projects}>
          <h2>DEVELOPMENT</h2>
          <section className={styles.devCont}>
            {data.map((project => (
              <Projects key={project.id} project={project} />
            )))}
          </section>
        </section>
        <Collage className={styles.collage}/>
        <footer className={styles.footer}>Built in Milan with espresso, Next.js, and<a href="https://www.websitecarbon.com/website/sgiori-xyz/">&nbsp;0.05g of CO2</a>.</footer>
      </section>
        
      </div>
    </>
  )
}
