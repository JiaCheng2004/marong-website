'use client'
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from "next/image";
import Navbar from '../navbar';

export default function SignUp() {
    const router = useRouter();

    return (
        <main className={styles.main}>
            
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

            <div className={styles.signupwindow}>
                <div className={styles.title}>SignUp</div>
                <div className={styles.signups}>
                    <div className={styles.userpassword}>
                        <div className={styles.inputbox}></div>
                        <div className={styles.inputbox}></div>
                    </div>
                    <div className={styles.authentication}>
                        <div className={styles.discord}>SignUp</div>
                    </div>
                </div>
            </div>
        </main>
    );
}