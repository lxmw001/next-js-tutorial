import Head from "next/head";
import styles from '../../styles/Ninjas.module.css';
import Link from "next/link";

export const getStaticProps = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();

    return {
        props: {
            ninjas: data,
        }
    }
}

const Ninjas = ({ ninjas }: any) => {
    return (
        <>
            <Head>
                <title>Ninja List | All</title>
                <meta name="keywords" content="ninja" />
            </Head>
            <div>
                All ninjas
                {ninjas.map((ninja: any) => {
                    return (
                        <Link key={ninja.id} className={styles.single} href={`/ninjas/${ninja.id}`}>
                            <h3>{ninja.name}</h3>
                        </Link>
                    )
                })}
            </div>
        </>
    );
}

export default Ninjas;