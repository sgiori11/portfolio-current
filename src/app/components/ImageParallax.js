
import styles from '../styles/Timeline.module.css';
import Image from 'next/image';
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageParallax(props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div className="image-container" ref={ref}>
        <Image 
            src={`/${props.id}.png`}
            alt="A London skyscraper"
            width={300}
            height={400}
            style={{objectFit: "cover"}}
        />
      </div>
      <motion.h2 style={{ y }}>{`#00${props.id}`}</motion.h2>
    </section>
  );
}

export default ImageParallax;
