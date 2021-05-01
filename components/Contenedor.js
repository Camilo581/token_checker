import Head from 'next/head';
import styles from '../estilos.module.css'
const Contenedor = (props) => {
    return (
        <>
        <Head>
            <title>Discord Token Checker</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"/>
        </Head> 
        <div className={styles.contenedor}>{props.children}</div>
        </>
    )
}
export default Contenedor