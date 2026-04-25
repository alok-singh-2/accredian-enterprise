import './globals.css'

export const metadata = {
  title: 'Accredian Enterprise — Upskill Your Workforce at Scale',
  description: 'India\'s most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams with curated programs, live mentorship, and real-time analytics.',
  keywords: 'enterprise learning, upskilling, IIT, IIM, data science, AI, ML, corporate training',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
