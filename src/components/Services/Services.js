import React from 'react';
import style from './Services.module.scss';
import {useTranslation} from "react-i18next";
const Services = () => {
    const { t } = useTranslation();
    return (
        <div className={style.courseSection} id="Services">
            <h2>{t('services.name')}</h2>
            <div className={style.courseContainer}>
                <div className={style.courseCard}>
                    <h3>{t('services.titre1')}</h3>
                    <p>{t('services.phrase1')}</p>
                    <p>{t('services.phrase2')}</p>
                    <p>{t('services.phrase3')}</p>
                </div>
                <div className={style.courseCard}>
                    <h3>{t('services.titre2')}</h3>
                    <p>{t('services.phrase4')}</p>
                    <p>{t('services.phrase5')}</p>
                    <p>{t('services.phrase6')}</p>
                </div>
                <div className={style.courseCard}>
                    <h3>{t('services.titre3')}</h3>
                    <p>{t('services.phrase8')}</p>
                </div>
            </div>
            <div className={style.contactInfo}>
                <p>{t('services.phraseLast')}</p>
            </div>
        </div>
    );
};


export default Services;