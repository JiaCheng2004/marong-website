'using client'
import style from './footer.module.css';
import Image from "next/image";

const Footer = () => {
    return (
        <main className={style.main}>
            <br/>
                <div className={style.footerInfo}>
                    <div className={style.logo}>
                        <div className={style.Text}>
                        AIMS ESPORTS
                        </div>
                    </div>
                    <div className={style.popularQuestions}>
                        <div className={style.question}>Question A</div>
                        <div className={style.question}>Question B</div>
                        <div className={style.question}>Question C</div>
                        <div className={style.question}>Question D</div>
                        <div className={style.question}>Question E</div>
                    </div>
                    <div className={style.allevents}>
                        <div className={style.events}>Event A</div>
                        <div className={style.events}>Event B</div>
                        <div className={style.events}>Event C</div>
                        <div className={style.events}>Event D</div>
                        <div className={style.events}>Event E</div>
                    </div>
                    <div className={style.services}>
                        <div className={style.service}>Discord Bot marong</div>
                        <div className={style.service}>Submit a Ticket</div>
                        <div className={style.service}>Forum FAQ</div>
                    </div>
                    <div className={style.infos}>
                        <div className={style.info}>Contact Us</div>
                        <div className={style.info}>About Us</div>
                        <div className={style.info}>Support Us</div>
                    </div>
                </div>
                
                <div className={style.socialMedias}>
                    <div className={style.discord}>
                        <Image
                            className={style.icon}
                            src="/assets/social-media-icons/discord.png"
                            alt="discord icon"
                            width={35}
                            height={35}
                            priority
                        />
                    </div>
                    <div className={style.instagram}>
                        <Image
                            className={style.icon}
                            src="/assets/social-media-icons/instagram.png"
                            alt="instagram icon"
                            width={35}
                            height={35}
                            priority
                        />
                    </div>
                    <div className={style.douyin}>
                        <Image
                            className={style.icon}
                            src="/assets/social-media-icons/douyin.png"
                            alt="douyin icon"
                            width={35}
                            height={35}
                            priority
                        />
                    </div>
                    <div className={style.youtube}>
                        <Image
                            className={style.icon}
                            src="/assets/social-media-icons/youtube.png"
                            alt="youtube icon"
                            width={35}
                            height={35}
                            priority
                        />
                    </div>
                    <div className={style.marong}>
                        <Image
                            className={style.icon}
                            src="/assets/social-media-icons/marong.png"
                            alt="marong icon"
                            width={35}
                            height={35}
                            priority
                        />
                    </div>
                </div>
            <br/>
        </main>
    );
}

export default Footer;