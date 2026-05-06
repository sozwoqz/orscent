import type { Metadata } from 'next'
import '../styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartProvider } from '@/components/layout/CartProvider'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Or-Scent — Parfumerie de Luxe',
  description: 'Découvrez des fragrances d\'exception. Parfums orientaux, arabes et occidentaux sélectionnés pour leur raffinement.',
  keywords: ['parfum', 'luxe', 'oriental', 'arabe', 'fragrance', 'or-scent'],
  openGraph: {
    title: 'Or-Scent — Parfumerie de Luxe',
    description: 'Des fragrances d\'exception pour des esprits raffinés.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1A1A1A',
                color: '#E8E2D9',
                border: '1px solid rgba(201,169,110,0.2)',
                borderRadius: '0',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  )
}
