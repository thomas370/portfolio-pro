import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './Header.module.scss';

const Header = () => {
    const { t } = useTranslation();

    const scroll = () => {
        window.scrollTo({
            top: 4000,
            behavior: 'smooth'
        });
    }

    return (
        <section className={style.header}>
            <div className={style.backgroundLogos}>
                <img src="/images/React.png" className={style.logo} alt="React" />
                <img src="/images/express.png" className={style.logo} alt="express" />
                <img src="/images/Figma.png" className={style.logo} alt="Figma" />
                <img src="/images/github.png" className={style.logo} alt="GitHub" />
                <img src="/images/MYsql.png" className={style.logo} alt="MySQL" />
                <img src="/images/nodeJS.png" className={style.logo} alt="Node.js" />
                <img src="/images/NoSQL.png" className={style.logo} alt="Redux" />
                <img src="/images/sass.png" className={style.logo} alt="sass" />
            </div>
            <div className={style.headerText}>
                <h1>{t('header.name')}</h1>
                <h2>{t('header.title')} <span>{t('header.titleDetail')}</span></h2>
                <button onClick={scroll}> {t('header.button')}</button>
            </div>
        </section>
    );
};

export default Header;