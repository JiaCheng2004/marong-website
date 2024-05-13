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
                            <div className={styles.sectiontitlefont}>Automation/Dynamic Voice Channel</div>
                            <div className={styles.sectiontitledescription}>Automate voice channel creation and management with marong</div>
                            <a className={styles.normal}>Marong offers an efficient way to dynamically manage voice channels within your Discord server. With the automation feature, you can set up rules to create and delete voice channels based on user activity or predefined criteria, ensuring a seamless experience for your community.</a>
                            <div className={styles.horizontalbar}></div>
                            <div className={styles.sectiontitlefont}>Usage</div>
                            <a className={styles.normal}>To utilize the Automation/Dynamic Voice Channel feature, follow these simple steps:</a>
                            <ol className={styles.list}>
                                <li>Create a voice channel category dedicated to dynamic channels. This will serve as the parent category for all dynamically created channels.</li>
                                <li>Configure marong's settings by specifying the criteria for channel creation and deletion. You can define parameters such as minimum and maximum user count, inactivity duration, or specific keywords triggering channel creation.</li>
                                <li>Once configured, marong will continuously monitor the Discord server and dynamically create or delete voice channels based on the specified rules.</li>
                                <li>Users can join and interact in these dynamic channels as usual, and marong will manage their lifecycle automatically.</li>
                            </ol>
                            <div className={styles.horizontalbar}></div>
                            <div className={styles.sectiontitlefont}>Customization</div>
                            <a className={styles.normal}>Marong provides extensive customization options to tailor the automation process according to your community's needs:</a>
                            <ul className={styles.list}>
                                <li>Adjust channel creation thresholds and criteria to match the activity levels of your server.</li>
                                <li>Define naming conventions for dynamically created channels to maintain organization and clarity.</li>
                                <li>Set permissions for who can create, delete, or manage dynamic channels.</li>
                            </ul>
                            <div className={styles.horizontalbar}></div>
                            <div className={styles.sectiontitlefont}>Examples</div>
                            <a className={styles.normal}>Here are some common scenarios where Automation/Dynamic Voice Channel feature can be beneficial:</a>
                            <ul className={styles.list}>
                                <li>Creating temporary voice channels for gaming sessions or events, which automatically close when no longer in use.</li>
                                <li>Managing study groups or project teams with dynamically allocated voice channels, ensuring privacy and organization.</li>
                                <li>Facilitating language-specific channels that activate based on user demand, promoting multilingual communication within the community.</li>
                            </ul>
                            <div className={styles.horizontalbar}></div>
                            <div className={styles.sectiontitlefont}>Troubleshooting</div>
                            <a className={styles.normal}>In case of any issues or unexpected behavior with the Automation/Dynamic Voice Channel feature, consider the following troubleshooting steps:</a>
                            <ol className={styles.list}>
                                <li>Ensure marong has the necessary permissions to create and delete channels within the designated category.</li>
                                <li>Check the configuration settings to verify if the criteria for channel creation align with the intended behavior.</li>
                                <li>Review the Discord server logs for any error messages or notifications related to marong's actions.</li>
                                <li>If problems persist, reach out to marong's support team for assistance and guidance.</li>
                            </ol>
                            <div className={styles.horizontalbar}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}