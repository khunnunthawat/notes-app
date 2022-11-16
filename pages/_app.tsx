import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import postReducer from '../store/reducers'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = createStore(postReducer, composeWithDevTools(applyMiddleware()))

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <div className='flex justify-center min-h-screen gap-6 mx-auto bg-slate-100'>
        <div className='sm:w-80 md:w-6/12'>
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  )
}
