import styles from '../styles/Skills.module.css';

export default function Skills() {
  return (
    <section className={styles.grid}>
       <div>
        {["React + Nextjs", "S(CSS)", "Git", "Figma", "Webflow", "Optimizely", "Google Analytics", "Midjourney"].map((tool, index) => (
          <span key={index}>
            {tool}
          </span>
        ))}
      </div>
      <div>
        {["A/B Testing", "Data Analysis", "Heuristic Evaluations", "Voice of Customer Surveys", "Screen Recordings"].map((skill, index) => (
          <span key={index}>
            {skill}
          </span>
        ))}
      </div>
      <div>
    
        {["English (Native)", "Italian (B1)", "Norwegian (A2)"].map((language, index) => (
          <span key={index}>
            {language}
          </span>
        ))}
      </div>
    </section>
  );
}
