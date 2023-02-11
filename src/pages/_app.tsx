import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Space_Mono, Space_Grotesk } from '@next/font/google'
const spaceMono = Space_Mono(
  {
  weight: '700',
  subsets: ['latin']
  }
)
const spaceGrotesk = Space_Grotesk(
  {
  weight: '700',
  subsets: ['latin']
  }
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>
    {`
:root {
  --spaceMono-font: ${spaceMono.style.fontFamily};
  --spaceGrotesk-font: ${spaceGrotesk.style.fontFamily};
}
`}
    </style>
  <Component {...pageProps} />
  </>
  )
}
