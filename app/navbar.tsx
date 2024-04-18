'use client'
import { useState } from 'react';
import Link from 'next/link'
import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className={styles.navbar}>
                
        <div className={styles.wordlogo}>
            <Link href="/">AIMS ESPORTS</Link>
        </div>

        <div className={styles.menu}>
            <div>
                <Link href="/help">Help</Link>
            </div>
            <div>
                <Link href="/marong">marong</Link>
            </div>
            {( true ) ? (
                <>
                <div>
                    <Link href="/signup">SignUp</Link>
                </div>
                <div>
                    <Link href="/signin">SignIn</Link>
                </div>
                </>
            ) : (
            <div onClick={handleDropdownClick}>
                <Image
                    className={styles.userProfile}
                    src="/user.png"
                    alt="default user profile picture"
                    width={20}
                    height={20}
                    priority
                />
            </div>
            )}
        </div>
    </div>
    );
};

export default Navbar;