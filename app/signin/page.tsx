'use client'
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Image from "next/image";
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Your Firebase configuration object
};

initializeApp(firebaseConfig);

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleDiscordSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard'); // Redirect to the dashboard or desired page after successful sign-in
    } catch (error) {
      setError('Failed to sign in with Discord. Please try again.');
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Redirect to the dashboard or desired page after successful sign-in
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleForgotPassword = async () => {
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent. Please check your inbox.');
    } catch (error) {
      setError('Failed to send password reset email. Please try again.');
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

      <div className={styles.signInContainer}>
        <h1>Sign In</h1>
        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.discordButton} onClick={handleDiscordSignIn}>
          Sign In with Discord
        </button>

        <form onSubmit={handleEmailSignIn}>
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
          <button type="submit">Sign In</button>
        </form>

        <p className={styles.forgotPassword} onClick={handleForgotPassword}>
          Forgot Password?
        </p>
      </div>
    </main>
  );
}