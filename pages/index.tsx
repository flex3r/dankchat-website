import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DankChat</title>
        <meta name="description" content="FeelsDankMan"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/flex3r/dankchat">DankChat</a>
        </h1>

        <div className={styles.description}>
          <img style={{width: "100%", objectFit: "contain"}} src={"/images/gtKk7.png"} width={500} height={500}
               alt={"FeelsDankMan"}/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/flex3r/dankchat"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.flxrs.dankchat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Store
        </a>
        <a
          href="https://f-droid.org/packages/com.flxrs.dankchat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          F-Droid
        </a>
      </footer>
    </div>
  )
}

export default Home
