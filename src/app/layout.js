import './globals.css'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


export const metadata = {
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
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
 
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});
 

export default function RootLayout({ children }) {
  return ( <>
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  </>
  )
}
