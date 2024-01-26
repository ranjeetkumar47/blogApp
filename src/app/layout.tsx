import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import initializeServerI18n from '@/i18n/i18n.server'
import { cookies } from 'next/headers'
import { configuration } from '@/lib/siteConfiguration'
import classNames from 'clsx'
import { I18N_COOKIE_NAME } from '@/i18n/i18n.settings'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My name is Ranjeet kumar',
  description: 'My name is Ranjeet kumar'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const i18n = await initializeServerI18n(getLanguageCookie())
  console.log('i18n', i18n)
  return (
    <html lang={i18n.language} className={getClassName()}>
      {/* <Fonts />
      <ThemeSetter /> */}
      <body>{children}</body>
    </html>
  )
}

function getClassName() {
  const themeCookie = cookies().get('theme')?.value
  const theme = themeCookie ?? configuration.theme
  const dark = theme === 'dark'

  return classNames({
    dark
  })
}

function getLanguageCookie() {
  return cookies().get(I18N_COOKIE_NAME)?.value
}
