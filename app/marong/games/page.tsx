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
                            <div className={styles.sectiontitlefont}>Games</div>
                            <div className={styles.sectiontitledescription}>Explore marong's gaming features and commands</div>
                            <a className={styles.normal}>Below is a list of marong's gaming-related commands:</a>
                            <div className={styles.command}>
                                <div className={styles.commandname}>1. !create-team</div>
                                <div className={styles.commanddescription}>Create a new team for a specific game.</div>
                            </div>
                            <div className={styles.command}>
                                <div className={styles.commandname}>2. !join-team</div>
                                <div className={styles.commanddescription}>Join an existing team for a specific game.</div>
                            </div>
                            <div className={styles.command}>
                                <div className={styles.commandname}>3. !leave-team</div>
                                <div className={styles.commanddescription}>Leave a team for a specific game.</div>
                            </div>
                            <div className={styles.command}>
                                <div className={styles.commandname}>4. !list-teams</div>
                                <div className={styles.commanddescription}>List all available teams for a specific game.</div>
                            </div>
                            <div className={styles.command}>
                                <div className={styles.commandname}>5. !match</div>
                                <div className={styles.commanddescription}>Initiate a match between two teams for a specific game.</div>
                            </div>
                            <div className={styles.command}>
                                <div className={styles.commandname}>6. !report-result</div>
                                <div className={styles.commanddescription}>Report the result of a match for a specific game.</div>
                            </div>
                            <div className={styles.command}>
                                <div className={styles.commandname}>7. !leaderboard</div>
                                <div className={styles.commanddescription}>Display the leaderboard for a specific game.</div>
                            </div>
                            <div className={styles.command}>
                                <div className={styles.commandname}>8. !game-info</div>
                                <div className={styles.commanddescription}>Display information about a specific game.</div>
                            </div>
                            <div className={styles.command}>
                                <div className={styles.commandname}>9. !help</div>
                                <div className={styles.commanddescription}>Get help with using marong's gaming features.</div>
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