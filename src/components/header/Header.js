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
            <div className={style.headerText}>
                <h1>{t('header.name')}</h1>
                <h2>{t('header.title')} <span>{t('header.titleDetail')}</span></h2>
                <button onClick={scroll}> {t('header.button')}</button>
            </div>
        </section>
    );
};

export default Header;