import 'bootstrap/scss/bootstrap.scss'
import '../styles/globals.css'
import 'nes.css/css/nes.css'
import Layout from '../components/layout/Layout'
import {Provider} from "react-redux"
import {initStore} from "../store"

const defaultState = {

}

function MyApp({ Component, pageProps }) {
  
  const store = initStore(defaultState)
  console.log(store)

  return (
    <Provider store={store}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>
    )
    
}

export default MyApp
