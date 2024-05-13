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
                            <div className={styles.sectiontitlefont}>Automation / Blacklist</div>
                            <div className={styles.sectiontitledescription}>Utilize marong's automation and blacklist functionalities for seamless moderation.</div>
                            <a className={styles.normal}>
                                Marong offers powerful automation features to streamline moderation tasks within your server. With the blacklist functionality, you can easily manage unwanted behaviors and keep your server environment healthy and safe for all members.
                            </a>
                            <div className={styles.subsection}>
                                <div className={styles.subtitlefont}>Slash Commands:</div>
                                <div className={styles.subtitledescription}>Access marong's automation and blacklist commands with ease.</div>
                                <a className={styles.normal}>
                                    - `/automod [on/off]`: Toggle the automation features on or off.
                                    - `/blacklist add [user] [reason]`: Add a user to the blacklist with a specified reason.
                                    - `/blacklist remove [user]`: Remove a user from the blacklist.
                                    - `/blacklist list`: View the list of blacklisted users.
                                </a>
                            </div>
                            <div className={styles.subsection}>
                                <div className={styles.subtitlefont}>Usage:</div>
                                <div className={styles.subtitledescription}>Learn how to effectively utilize marong's automation and blacklist functionalities.</div>
                                <a className={styles.normal}>
                                    1. To activate automation features, simply use the `/automod on` command. Marong will now enforce specified rules automatically.
                                    2. Add users to the blacklist by typing `/blacklist add [user] [reason]`. Provide a clear reason for better moderation.
                                    3. Remove users from the blacklist using `/blacklist remove [user]`.
                                    4. Check the current blacklist entries by executing `/blacklist list`.
                                </a>
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