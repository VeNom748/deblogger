import Navbar from '../components/Navbar'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'


function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <footer className={styles.footer}>
        Copyright &copy; deblogger.com 2022
    </footer>
  </>
}

export default MyApp
