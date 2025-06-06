import React from 'react';
import style from './Footer.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub,faLinkedin,faTwitter} from "@fortawesome/free-brands-svg-icons";
import {useTranslation} from "react-i18next";
const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={style.footer}>
            <div className={style.footerText}>
                <h2>Thomas BORTOLATO</h2>
                <div className={style.footerCenter}>
                    <h3>{t('footer.heading')}</h3>
                    <p>Thomasbortolato5@gmail.com</p>
                    <p>06 07 46 15 39</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/thomas-bortolato/"><FontAwesomeIcon icon={faLinkedin}/></a>
                        </li>
                        <li><a href="https://github.com/thomas370"><FontAwesomeIcon icon={faGithub}/></a></li>
                        <li><a href="https://twitter.com/toollkyll"><FontAwesomeIcon icon={faTwitter}/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;