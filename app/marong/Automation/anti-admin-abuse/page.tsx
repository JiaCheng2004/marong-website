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
                            <div className={styles.sectiontitlefont}>Slash commands</div>
                                <div className={styles.sectiontitledescription}>Description for marong's slash commands</div>
                                <a className={styles.normal}>Instruction normal text for marong's slash commands</a>
                            <div className={styles.horizontalbar}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}