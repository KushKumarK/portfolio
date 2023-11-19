import './globals.css'
import { inter } from './fonts'
import NavBar from '@/components/navbar'
import Providers from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
      <NavBar/>
      {children}
      </Providers>
      </body>
    </html>
  )
}
