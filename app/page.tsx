'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
      setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
    };

    return (
        <main className={styles.main}>
            <div className={styles.navbar}>
                
                <div className={styles.wordlogo}>
                    AIMS ESPORTS
                </div>

                <div className={styles.menu}>
                    <div className={styles.menuItems}><Link href="/help">Help</Link></div>
                    <div className={styles.menuItems}><Link href="/marong">marong</Link></div>
                    {( true ) ? (
                        <>
                        <div className={styles.menuItems}><Link href="/signup">SignUp</Link></div>
                        <div className={styles.menuItems}><Link href="/signin">SignIn</Link></div>                   
                        </>
                    ) : (
                        <div onClick={handleDropdownClick}>
                            <Image
                                className={styles.charactersImage}
                                src="/user.png"
                                alt="default user profile picture"
                                width={30}
                                height={30}
                                priority
                            />
                        </div>
                    )}
                </div>
            </div>

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
