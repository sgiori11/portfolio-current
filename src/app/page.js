import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
  <div>
   <HeroSection />
   <section className={styles.pageContent}>
    <Sidebar className={styles.sidebar} />
    <h2 className={styles.projects}>projects
      <span style={{fontSize: "10px", fontWeight: "200"}}>In this example, justify-content: flex-end; in the .pageContent class will align the sidebar (child elements) to the right side. The width: 100%; ensures that the .pageContent section spans the full width of the viewport.

This solution assumes that your layout allows the pageContent to stretch the full width of the viewport. If there are other constraints in your layout preventing this, you may need a different solution. If that's the case, please provide more context and I'll be happy to help further.</span>
    </h2>
    <h2 className={styles.skills}>Skills</h2>
    <h2 className={styles.about}>About</h2>

   </section>

     
   </div>
  )
}
