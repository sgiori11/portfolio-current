import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';

export default function Home() {
  return (
  <div>
   <HeroSection />
   <Sidebar />

     
   </div>
  )
}
