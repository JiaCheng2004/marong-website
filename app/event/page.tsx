import Navbar from '../navbar';
import Footer from '../footer';
import styles from './page.module.css';

export default function EventPage() {
    return (
        <main className={styles.main}>
            <Navbar></Navbar>
            <div className={styles.content}>
                <h1 className={styles.h1}>Upcoming eSports Events</h1>
                <div className={styles.events}>
                    {/*hard-coded events, consider fetching this from your API*/}
                    <div className={styles.event}>
                        <h2 className={styles.h2}>Event 1</h2>
                        <p className={styles.p}>Description of event 1</p>
                    </div>
                    <div className={styles.event}>
                        <h2 className={styles.h2}>Event 2</h2>
                        <p className={styles.p}>Description of event 2</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}