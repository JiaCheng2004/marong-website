'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from './navbar';

export default function Home() {

    return (
        <main className={styles.main}>
            <Navbar></Navbar>

            <div className={styles.center}>
                <Image
                    className={styles.charactersImage}
                    src="/games.png"
                    alt="game characters"
                    width={1050}
                    height={749}
                    priority
                />
            </div>

        </main>
    );
}
