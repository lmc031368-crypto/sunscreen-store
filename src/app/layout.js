import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oudoman Sports | Professional Sunscreen Tech',
  description: 'Handan Oudoman Sports Technology Co., Ltd. - Professional skin barrier solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
