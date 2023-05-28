import './globals.css'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

 
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
    <Head>
    <title>Stephanie Giori - Frontend Dev & Experimentation Specialist</title>

    <meta name="description" content="Stephanie Giori's frontend development & experimentation portfolio"/>
    <meta name="keywords" content="UI,UX,Design,React,JavaScript,CRO,frontend development,web development,conversion rate optimization, experimentation"/>

    <meta property="og:title" content="Stephanie Giori - Frontend Dev"/>
    <meta property="og:image" content="https://github.com/sgiori11/portfolio-v2/blob/main/public/open-graph.png?raw=true"/>
    <meta property="og:description" content="UI Developer & Experimentation Specialist"/>
    <meta property="og:url" content="https://sgiori.xyz/"/>

    <meta name="twitter:title" content="Stephanie Giori - Frontend Dev"/>
    <meta name="twitter:description" content="UI Developer & Experimentation Specialist"/>
    <meta name="twitter:image" content="https://github.com/sgiori11/portfolio-v2/blob/main/public/twitter-card.png?raw=true"/>
    <meta name="twitter:card" content="summary_large_image"/>

    <link rel="icon" sizes="192x192" href="/smallIcon.png"/>
    <link rel="icon" sizes="512x512" href="/largeIcon.png"/>

    </Head>
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  </>
  )
}
