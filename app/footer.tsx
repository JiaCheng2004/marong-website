'using client'
import style from './footer.module.css'

const Footer = () => {
    return (
        <main className={style.main}>
            <br/>

                <div className={style.info}>
                    <div className={style.logo}>
                        <div className={style.Text}>
                        AIMS ESPORTS
                        </div>
                    </div>
                    <div className={style.popularQuestion}>
                        
                    </div>
                    <div className={style.faqs}>

                    </div>
                    <div className={style.events}>

                    </div>
                    <div className={style.contacts}>

                    </div>
                </div>
                
                <div className={style.socialMedias}>

                </div>

            <br/>
        </main>
    );
}

export default Footer;