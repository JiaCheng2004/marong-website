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

                    <div className={style.verticalBar}></div>

                    <div className={style.footerlinks}>
                        <div className={style.footercol}>
                            <div className={style.footerlink}><Link href="/">Question A</Link></div>
                            <div className={style.footerlink}><Link href="/">Question B</Link></div>
                            <div className={style.footerlink}><Link href="/">Question C</Link></div>
                            <div className={style.footerlink}><Link href="/">Question D</Link></div>
                            <div className={style.footerlink}><Link href="/">Question E</Link></div>
                        </div>
                        <div className={style.footercol}>
                            <div className={style.footerlink}><Link href="/">Event 1</Link></div>
                            <div className={style.footerlink}><Link href="/">Event 2</Link></div>
                            <div className={style.footerlink}><Link href="/">Event 3</Link></div>
                            <div className={style.footerlink}><Link href="/">Event 4</Link></div>
                            <div className={style.footerlink}><Link href="/">Event 5</Link></div>
                        </div>
                        <div className={style.footercol}>
                            <div className={style.footerlink}><Link href="/">Tickets</Link></div>
                            <div className={style.footerlink}><Link href="/">Users</Link></div>
                            <div className={style.footerlink}><Link href="/">Forum FAQs</Link></div>
                            <div className={style.footerlink}><Link href="/">marong</Link></div>
                        </div>
                        <div className={style.footercol}>
                            <div className={style.footerlink}><Link href="/">Contact Us</Link></div>
                            <div className={style.footerlink}><Link href="/">About Us</Link></div>
                            <div className={style.footerlink}><Link href="/">Support Us</Link></div>
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