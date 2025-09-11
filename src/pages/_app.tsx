import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
