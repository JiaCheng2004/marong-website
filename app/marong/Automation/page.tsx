'use client'
import Navbar from '../../navbar';
import Footer from '../../footer';
import styles from '../page.module.css';

export default function marong() {

    return (
        <main className={styles.main}>
            <Navbar></Navbar>
            <div className={styles.manual}>
                <div className={styles.topicdiv}>
                    <div className={styles.topics}>
                        <div className={styles.topic}>
                            <div className={styles.horizontalbar}></div>
                            Introduction
                            <a className={styles.smalltopic}>marong</a>
                        </div>
                        <div className={styles.topic}>
                            <div className={styles.horizontalbar}></div>
                            Slash Commands
                            <a className={styles.smalltopic}>gpt</a>
                            <a className={styles.smalltopic}>exp</a>
                            <a className={styles.smalltopic}>initialize</a>
                            <a className={styles.smalltopic}>mine</a>
                            <a className={styles.smalltopic}>music</a>
                            <a className={styles.smalltopic}>set-supertitle</a>
                        </div>
                        <div className={styles.topic}>
                            <div className={styles.horizontalbar}></div>
                            Games
                            <a className={styles.smalltopic}>Mafia</a>
                            <a className={styles.smalltopic}>Who's the Impostor</a>
                        </div>
                        <div className={styles.topic}>
                            <div className={styles.horizontalbar}></div>
                            Automation
                            <a className={styles.smalltopic}>Dynamic Voice Channel</a>
                            <a className={styles.smalltopic}>Auto Moderation</a>
                            <a className={styles.smalltopic}>Auto Scrim</a>
                        </div>
                        <div className={styles.topic}>
                            <div className={styles.horizontalbar}></div>
                            Customization
                            <a className={styles.smalltopic}>Self Music Channel</a>
                            <a className={styles.smalltopic}>Customized Scrims</a>
                        </div>
                        <div className={styles.topic}>
                            <div className={styles.horizontalbar}></div>
                            Levels and XP
                            <a className={styles.smalltopic}>What is Levels and XP</a>
                            <a className={styles.smalltopic}>How to level up</a>
                            <a className={styles.smalltopic}>How to gain XP</a>
                        </div>
                    </div>
                    <div className={styles.topicscrollbar}>
                    </div>
                </div>
                <div className={styles.instructions}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <div className={styles.titlefont}>MARONG</div>
                            <div className={styles.titledescription}>A Discord bot specially built for the AIMS ESPORTS community</div>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.horizontalbar}></div>
                            <div className={styles.sectiontitlefont}>Automation</div>
                            <div className={styles.sectiontitledescription}>Automate tasks and enhance your server management with marong's automation features.</div>
                            <a className={styles.normal}>1. Role Management:</a>
                            <p className={styles.paragraph}>Efficiently manage roles within your server with marong's role management commands. Assign roles to users automatically based on specific criteria or commands triggered by certain events. Keep your server organized and ensure members have access to the appropriate channels and features.</p>
                            <a className={styles.normal}>2. Channel Management:</a>
                            <p className={styles.paragraph}>Streamline your channel management process with marong's automation capabilities. Automatically create, delete, or modify channels based on predefined conditions or triggers. Customize permissions, topics, and other channel settings to optimize your server structure and enhance user experience.</p>
                            <a className={styles.normal}>3. Welcome Messages:</a>
                            <p className={styles.paragraph}>Welcome new members to your server with personalized messages using marong's automation features. Set up automated welcome messages to greet new users as they join, providing them with important information, rules, and guidelines. Create a warm and welcoming environment for your community members.</p>
                            <a className={styles.normal}>4. Moderation Tasks:</a>
                            <p className={styles.paragraph}>Simplify moderation tasks and ensure a safe and friendly environment for your community with marong's automation tools. Automatically detect and act upon rule violations, spam, or inappropriate behavior. Implement automated warnings, kicks, or bans to enforce server rules and maintain order.</p>
                            <a className={styles.normal}>5. Scheduled Events:</a>
                            <p className={styles.paragraph}>Plan and organize events for your community with marong's scheduling capabilities. Set up automated reminders, notifications, and announcements for upcoming events, tournaments, or meetings. Keep your members informed and engaged, ensuring maximum participation and attendance.</p>
                            <div className={styles.horizontalbar}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}