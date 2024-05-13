'use client'
import Navbar from '../../../navbar';
import Footer from '../../../footer';
import styles from '../../page.module.css';

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
                            <div className={styles.sectiontitlefont}>Automation/Automoderation</div>
                            <div className={styles.sectiontitledescription}>Utilize marong's automation and automoderation features to streamline your server management and ensure a positive community experience.</div>
                            <div className={styles.sectioncontent}>
                                <p className={styles.paragraph}>Marong offers a range of automation and automoderation tools designed to simplify server administration and foster a welcoming environment for all users. Below are some key features and instructions on how to use them:</p>
                                <div className={styles.subsection}>
                                    <div className={styles.subsectiontitlefont}>Auto-Moderation</div>
                                    <p className={styles.paragraph}>Marong's automoderation features empower server administrators to automatically manage undesirable behavior and enforce community guidelines. Here's how to set it up:</p>
                                    <ul className={styles.list}>
                                        <li className={styles.listitem}>1. **Automated Profanity Filter**: Configure marong to automatically delete messages containing profane language or inappropriate content. This helps maintain a respectful and family-friendly environment.</li>
                                        <li className={styles.listitem}>2. **Spam Protection**: Prevent spamming by setting up automatic detection and deletion of repetitive messages or excessive mentions.</li>
                                        <li className={styles.listitem}>3. **Anti-Bot Measures**: Protect your server from bot raids and spam bots by enabling marong's anti-bot measures, which can detect and block unauthorized bot activity.</li>
                                    </ul>
                                </div>
                                <div className={styles.subsection}>
                                    <div className={styles.subsectiontitlefont}>Automation</div>
                                    <p className={styles.paragraph}>In addition to automoderation, marong offers automation tools to streamline routine tasks and enhance server management efficiency. Here's how to leverage them:</p>
                                    <ul className={styles.list}>
                                        <li className={styles.listitem}>1. **Scheduled Messages**: Schedule announcements, reminders, or event notifications to be sent automatically at specified times, ensuring timely communication with your community.</li>
                                        <li className={styles.listitem}>2. **Role Management**: Automate the assignment and removal of roles based on user activity, server events, or predefined criteria, simplifying role management and ensuring accurate role assignments.</li>
                                        <li className={styles.listitem}>3. **Channel Management**: Automatically create, archive, or delete channels based on server activity or predefined triggers, optimizing channel organization and reducing manual intervention.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.horizontalbar}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}