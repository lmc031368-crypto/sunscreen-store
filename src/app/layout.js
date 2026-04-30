import './globals.css'

export const metadata = {
  title: 'PURE.DEFENSE | Premium Sunscreen',
  description: 'High-performance SPF 50+ sunscreen for global wholesale.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}