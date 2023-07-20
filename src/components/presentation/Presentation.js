import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Presentation.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';

// Assurez-vous de faire cela une fois avant de rendre votre application
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root')

const Presentation = () => {
    const { t } = useTranslation();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const closeModal = () => setModalIsOpen(false);
    const openModal = () => setModalIsOpen(true);

    const download = () => {
        const link = document.createElement('a');
        link.href = './CV_Thomas_Bortolato.pdf';
        link.download = 'CV_Thomas_Bortolato.pdf';
        link.click();
    }

    return (
        <section className={style.presentation}>
            <div className={style.presentationText}>
                <h2>{t('presentation.heading')}</h2>
                <p>{t('presentation.about1')}</p>
                <p>{t('presentation.about2')}</p>
                <div className={style.cv}>
                    <a href="./CV_Thomas_Bortolato.pdf" target="_blank"><button  type="button">{t('presentation.button')}</button></a>
                    <button onClick={download}><FontAwesomeIcon icon={faDownload}/></button>
                </div>
            </div>
            <div className={style.presentationImage}>
                <img src="./logo_thomas.png" alt="Thomas BORTOLATO"/>
            </div>
        </section>
    );
};

export default Presentation;
