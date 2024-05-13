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
                            <div className={styles.sectiontitlefont}>Customization</div>
                                <div className={styles.sectiontitledescription}>Tailor marong to suit your community's needs</div>
                                <a className={styles.normal}>With marong, customization is key to enhancing your community's Discord experience. Below, you'll find a comprehensive guide on how to personalize marong to fit the unique dynamics of your AIMS ESPORTS community:</a>
                                <div className={styles.subsectiontitlefont}>1. Role Assignments</div>
                                    <div className={styles.subsectiontitledescription}>Empower your members with tailored roles</div>
                                        <a className={styles.normal}>One of marong's key features is its ability to manage roles within your Discord server. By assigning specific roles to users, you can streamline access to channels, features, and privileges based on individual roles or ranks within your community.</a>
                                        <a className={styles.normal}>To set up role assignments:</a>
                                            <ul className={styles.normal}>
                                                <li>Create custom roles within your Discord server.</li>
                                                <li>Define the permissions and access levels for each role.</li>
                                                <li>Use marong's intuitive commands to assign roles to users based on criteria such as activity, participation, or specific commands.</li>
                                            </ul>
                                <div className={styles.subsectiontitlefont}>2. Command Customization</div>
                                    <div className={styles.subsectiontitledescription}>Personalize marong's commands to match your community's preferences</div>
                                        <a className={styles.normal}>Marong comes equipped with a range of pre-defined commands tailored to enhance your Discord server experience. However, you have the flexibility to customize these commands to align with the specific needs and preferences of your community.</a>
                                        <a className={styles.normal}>To customize commands:</a>
                                            <ul className={styles.normal}>
                                                <li>Review marong's command list to identify commands that require customization.</li>
                                                <li>Modify command names, aliases, or functionalities to better suit your community's terminology or requirements.</li>
                                                <li>Test the customized commands to ensure they function as intended within your server environment.</li>
                                            </ul>
                                <div className={styles.subsectiontitlefont}>3. Message Responses</div>
                                    <div className={styles.subsectiontitledescription}>Craft personalized responses to user interactions</div>
                                        <a className={styles.normal}>Enhance user engagement and interaction by customizing marong's message responses. Whether it's welcoming new members, acknowledging commands, or providing information, personalized responses add a unique touch to your Discord server.</a>
                                        <a className={styles.normal}>To customize message responses:</a>
                                            <ul className={styles.normal}>
                                                <li>Identify key interactions or commands that warrant personalized responses.</li>
                                                <li>Create custom response templates or messages tailored to specific scenarios.</li>
                                                <li>Configure marong to trigger these custom responses based on predefined conditions or triggers.</li>
                                            </ul>
                            <div className={styles.horizontalbar}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    );
}