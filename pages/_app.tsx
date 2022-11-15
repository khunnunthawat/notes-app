import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex justify-center min-h-screen gap-6 mx-auto debug-screens bg-slate-100'>
      <div className='sm:w-80 md:w-6/12'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
