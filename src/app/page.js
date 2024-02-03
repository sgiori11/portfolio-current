import styles from './page.module.css'
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import data from './projectsdata.json';
import Image from 'next/image';
import monstera from '/public/monstera.svg';



export default function Home() {
  return (
    <>
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

        <section className={styles.skills}>
          <h2>Skills</h2>
          <Skills />
        </section>

        <section className={styles.timeline}>
          <h2>Work Experience</h2>
          <section className={styles.timelineContainer}>
            <Timeline />
          </section>
        </section>

        <section className={styles.about}>
          <h2>About 
            <span>
              <Image 
                 src={monstera}
                 alt="A hand-drawn monstera plant."
                 width={50}
              />
            </span>
          </h2>
          <p>
          Hi! My name is Stephanie, and I’m a <span>27-year-old Californian</span> currently living in Milan, Italy :)
            <br></br>
            <br></br>
          After graduating from UC Davis with a <span>B.Sc. in Global Disease Biology</span>, I realized that I’d rather build stuff on my computer than dissect the dead.
          <br></br>
          <br></br>
          Thankfully, my biology degree has never held me back from technical or creative spaces. As an <span>experimentation specialist</span>, I get to use both my creative and scientific competencies to design, develop, and optimize websites and apps for clients.
          <br></br>
          <br></br>
          When I’m not working, I enjoy <span><a href="https://www.layoverinitaly.com/" target="_blank">blogging</a></span>, <span>traveling around Italy</span>, and staring in admiration at my many <span>plants</span>—some of which can be found scattered around this site. I also take daily walks along the Navigli to compensate for my addiction to Italian cuisine.
          </p>
        </section>

        <footer className={styles.footer}>Built in Milan with Next.js and hand-drawn doodles.</footer>
      </section>
        
      </div>
    </>
  )
}
