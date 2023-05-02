import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p  className={styles.text}>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</p>
      <p  className={styles.text}>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</p>
      <Link href="/ninjas" className={styles.btn}>
        See Ninja Listing
      </Link>
    </div>
  )
}
