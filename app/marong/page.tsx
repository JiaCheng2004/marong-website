import Navbar from '../navbar';
import Footer from '../footer';
import styles from './page.module.css';

export default function marong() {
    return (
        <main className={styles.main}>
            <Navbar></Navbar>
            <div className={styles.manual}>
                <div className={styles.topics}>

                </div>
                <div className={styles.instructions}>

                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}