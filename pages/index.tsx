import type { NextPage } from "next"
import { lazy } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Layout from "@src/layout"

//code-splitting
const Card = lazy(() => import("@components/card"))

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>A Robust Nextjs App Preconfigured for you</title>
        <meta name="description" content="Preconfigured Nextjs Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to Akachukwus Next.js Template
          </h1>

          <Card />
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by <h1>Akachukwu</h1> and Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </Layout>
    </div>
  )
}

export default Home
