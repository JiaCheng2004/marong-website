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
                            <div className={styles.sectiontitlefont}>Automation and Anti-Admin Abuse</div>
                            <div className={styles.sectiontitledescription}>Utilize marong's automation features to streamline tasks and prevent admin abuse</div>
                            <div className={styles.horizontalbar}></div>
                            <div className={styles.subsection}>
                                <div className={styles.subsectiontitlefont}>Auto-Moderation</div>
                                <div className={styles.subsectiontitledescription}>Keep your server safe and welcoming with marong's automated moderation tools.</div>
                                <a className={styles.normal}>Instructions on setting up auto-moderation filters and triggers.</a>
                            </div>
                            <div className={styles.subsection}>
                                <div className={styles.subsectiontitlefont}>Role Management</div>
                                <div className={styles.subsectiontitledescription}>Effortlessly manage roles within your server with marong's role management capabilities.</div>
                                <a className={styles.normal}>Learn how to automate role assignments and revoke permissions.</a>
                            </div>
                            <div className={styles.subsection}>
                                <div className={styles.subsectiontitlefont}>Audit Logs</div>
                                <div className={styles.subsectiontitledescription}>Stay informed about server changes and actions with marong's comprehensive audit logging system.</div>
                                <a className={styles.normal}>Discover how to set up and review audit logs for effective server management.</a>
                            </div>
                            <div className={styles.subsection}>
                                <div className={styles.subsectiontitlefont}>Anti-Spam Measures</div>
                                <div className={styles.subsectiontitledescription}>Combat spam and protect your server's integrity with marong's anti-spam features.</div>
                                <a className={styles.normal}>Instructions on configuring spam filters and prevention strategies.</a>
                            </div>
                            <div className={styles.subsection}>
                                <div className={styles.subsectiontitlefont}>Command Restrictions</div>
                                <div className={styles.subsectiontitledescription}>Prevent misuse of commands and maintain server order with marong's command restriction capabilities.</div>
                                <a className={styles.normal}>Learn how to limit command usage based on roles or permissions.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}