import './globals.css'
import { Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


export const metadata = {
  title: "Stephanie Giori - Frontend Dev & Experimentation Specialist",
  description: "A CRO, UXR, and development portfolio",
  keywords: ["UX", "Design", "React", "JavaScript", "CRO", "frontend development", "web development", "conversion rate optimization", "experimentation"],
  openGraph: {
    title: 'Stephanie Giori - Frontend Dev',
    description: 'UI Developer & Experimentation Specialist',
    image: "https://github.com/sgiori11/portfolio-v2/blob/main/public/open-graph.png?raw=true"
  },
  icons: {
    icon: '/icon.png',
    other: {
      rel: '/icon.png',
      url: '/icon.png',
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stephanie Giori - Frontend Dev',
    description: 'UI Developer & Experimentation Specialist',
    images: ['https://github.com/sgiori11/portfolio-v2/blob/main/public/twitter-card.png?raw=true'],
  },
};
 
 
const font = Lato({
  style: ['normal'],
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});
 

export default function RootLayout({ children }) {
  return ( <>
    <html lang="en">
      <body className={font.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  </>
  )
}
