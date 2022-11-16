import '../styles/globals.css'
import type { AppProps } from 'next/app'

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import postReducer from '../store/reducers'
// const store = createStore(postReducer)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex justify-center min-h-screen gap-6 mx-auto debug-screens bg-slate-100'>
      <div className='sm:w-80 md:w-6/12'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import { wrapper } from "../store/store";

// function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default wrapper.withRedux(App);
