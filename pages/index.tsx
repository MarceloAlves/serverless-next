import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>

        <ul className={styles.list}>
          <li>
            <Link href="/server-rendered">Server Rendered</Link>
          </li>
          <li>
            <Link href="/client-rendered">Client Rendered</Link>
          </li>
          <li>
            <Link href="/api-request">API Request</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
