import Head from "next/head";
import styles from '../../styles/Ninjas.module.css';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map((ninja: any) => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.id;

    const resp = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await resp.json();

    return {
        props: {
            ninja: data,
        }
    }
}


const Details = ({ ninja }: any) => {
    return (
        <>
            <Head>
                <title>Ninja Detail</title>
                <meta name="keywords" content="ninja" />
            </Head>
            <div>
                <h1>Ninja Detail</h1>
                <p>{ninja.name}</p>
                <p>{ninja.email}</p>
                <p>{ninja.website}</p>
                <p>{ninja.address.city}</p>
            </div>
        </>
    );
}

export default Details;