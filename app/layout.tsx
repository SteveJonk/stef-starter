import Head from 'next/head'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import LayoutWrapper from '@/components/wrappers/LayoutWrapper'
import { AnimatePresence } from 'framer-motion'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <title>My App</title>
      </Head>
      <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          <LayoutWrapper>
            <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scroll(0, 0)}>
              <div>{children}</div>
            </AnimatePresence>
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
