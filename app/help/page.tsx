import Navbar from '../navbar';
import Footer from '../footer';
import styles from './page.module.css';

export default function Help() {
    return (
        <main className={styles.main}>
            <Navbar></Navbar>

            <Footer></Footer>
        </main>
    );
}