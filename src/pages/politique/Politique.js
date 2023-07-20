import React from 'react';
import style from './Politique.module.scss';
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import {useTranslation} from "react-i18next";
const Politique = () => {
        const { t } = useTranslation();
    return (
        <section className={style.politique}>
            <NavBar />
                <div className={style.politiqueText}>
                    <h2>{t('politique.name')}</h2>
                    <p>{t('politique.about1')}</p>
                    <p>{t('politique.about2')}</p>
                    <p>{t('politique.about3')}</p>
                    <p>{t('politique.about4')}</p>
                    <h2>{t('politique.about5')}</h2>
                    <p>{t('politique.about6')}</p>
                    <p>{t('politique.about7')}</p>
                    <p>{t('politique.about8')}</p>
                    <p>{t('politique.about9')}</p>
                    <p>{t('politique.about10')}</p>
                </div>
            <Footer />
        </section>
    );
};

export default Politique;