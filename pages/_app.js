import 'bootstrap/scss/bootstrap.scss'
import '../styles/custom-bs-overrides.scss'
import '../styles/globals.css'
import Layout from '../components/Layout'
import {Provider} from "react-redux"
import {useStore} from "../store"


function MyApp({ Component, pageProps }) {
  
  const store = useStore()

  return (
    <Provider store={store}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>)
    
}

export default MyApp
