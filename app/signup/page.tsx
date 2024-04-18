'use client'
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from "next/image";

export default function SignUp() {
    const router = useRouter();

    return (
        <main className={styles.main}>
            <div className={styles.navbar}>
                <div className={styles.previousParent} onClick={router.back}>
                    <Image
                        className={styles.previous}
                        src="/previous-white.png"
                        alt="previous icon"
                        width={40}
                        height={40}
                        priority
                    />
                </div>
            </div>

            <div></div>
        </main>
    );
}