import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import postReducer from '../store/reducers'
const store = createStore(postReducer)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import { wrapper } from "../store/store";

// function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default wrapper.withRedux(App);
