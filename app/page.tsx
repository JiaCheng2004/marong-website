'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from './navbar';
import Footer from './footer';

export default function Home() {

    return (<>

        <Navbar></Navbar>
        <main className={styles.main}>
            <div className={styles.center}>
                <div className={styles.mainDisplay}>
                    <div className={styles.mainDisplayFont}>AIMS ESPORTS</div>
                    <Image
                        className={styles.charactersImage}
                        src="/games.png"
                        alt="game characters"
                        width={1050}
                        height={749}
                        priority
                    />
                </div>
            </div>
        </main>
        
        <div className={styles.unit}>
            
        </div>
        <Footer></Footer>
        
    </>);
}
