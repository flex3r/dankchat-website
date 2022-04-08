import type { NextPage } from 'next'
import Head from 'next/head'
import { CfImage } from '../components/cf-image.'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DankChat</title>
        <meta name="description" content="FeelsDankMan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/flex3r/dankchat">DankChat</a>
        </h1>

        <p className={styles.description}>
            <CfImage src={"/gtKk7.png"} width={500} height={500}/>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/flex3r/dankchat"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  )
}

export default Home
