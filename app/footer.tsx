'using client'
import style from './footer.module.css';
import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
    return (
        <main className={style.main}>
            <br/>
                <div className={style.footerInfo}>
                    <div className={style.logo}>
                        <div className={style.Text}>
                            <div>
                                <Link href="/">AIMS ESPORTS</Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.footerlink}>
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
                            <div className={style.service}>Submitting a Ticket</div>
                            <div className={style.service}>Users Customizations</div>
                            <div className={style.service}>Forum FAQs</div>
                            <div className={style.service}>marong</div>
                        </div>
                        <div className={style.infos}>
                            <div className={style.info}>Contact Us</div>
                            <div className={style.info}>About Us</div>
                            <div className={style.info}>Support Us</div>
                        </div>
                    </div>
                </div>
                
                <div className={style.socialMedias}>
                    <div className={style.discord}>
                        <a href='https://discord.com/'>
                            <Image
                                className={style.icon}
                                src="/assets/social-media-icons/discord.png"
                                alt="discord icon"
                                width={35}
                                height={35}
                                priority
                            />
                        </a>
                    </div>
                    <div className={style.instagram}>
                        <a href='https://www.instagram.com/'>
                            <Image
                                className={style.icon}
                                src="/assets/social-media-icons/instagram.png"
                                alt="instagram icon"
                                width={35}
                                height={35}
                                priority
                            />
                        </a>
                    </div>
                    <div className={style.douyin}>
                        <a href='https://www.douyin.com/'>
                            <Image
                                className={style.icon}
                                src="/assets/social-media-icons/douyin.png"
                                alt="douyin icon"
                                width={35}
                                height={35}
                                priority
                            />
                        </a>
                    </div>
                    <div className={style.youtube}>
                        <a href='https://www.youtube.com/'>
                            <Image
                                className={style.icon}
                                src="/assets/social-media-icons/youtube.png"
                                alt="youtube icon"
                                width={35}
                                height={35}
                                priority
                            />
                        </a>
                    </div>
                    <div className={style.marong}>
                        <a href='https://marongs.com/'>
                            <Image
                                className={style.icon}
                                src="/assets/social-media-icons/marong.png"
                                alt="marong icon"
                                width={35}
                                height={35}
                                priority
                            />
                        </a>
                    </div>
                </div>
            <br/>
            <div className={style.copyright}>
                Copyright © 2024 AIMS ESPORTS All rights reserved.
            </div>
        </main>
    );
}

export default Footer;