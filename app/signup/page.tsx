'use client'
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from "next/image";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Your Firebase configuration object
};

initializeApp(firebaseConfig);

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Redirect to the dashboard or desired page after successful sign-up
    } catch (error) {
      setError('Failed to sign up. Please try again.');
    }
  };

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

      <div className={styles.signUpContainer}>
        <h1>Sign Up</h1>
        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleEmailSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <p className={styles.signInLink} onClick={() => router.push('/signin')}>
          Already have an account? Sign In
        </p>
      </div>
    </main>
  );
}