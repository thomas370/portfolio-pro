import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import style from './NavBar.module.scss';
import { Link } from "react-router-dom";
import spain from "../../assets/images/spain.png";
import france from "../../assets/images/france.png";

import { useTranslation } from "react-i18next";

const NavBar = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'es' ? 'fr' : 'es');
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            toggleNav(); // Fermer la navigation mobile après le clic
        }
    };

    return (
        <header>
            <nav className={style.wrapper}>
                <div className={style.barre}>
                    <Link to='/'>Thomas BORTOLATO</Link>
                    <span className={style.icon} onClick={toggleNav}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </span>
                </div>
                <div className={isOpen ? style.navbarCollapse : style.navbarCollapseHidden}>
                    <ul className={style.navbarNav}>
                        <li className={style.navItem}>
                            <span onClick={() => scrollToSection('competences')}>Compétences</span>
                        </li>
                        <li className={style.navItem}>
                            <span onClick={() => scrollToSection('xp')}>Expériences</span>
                        </li>
                        <li className={style.navItem}>
                            <span onClick={() => scrollToSection('Projets')}>Projets</span>
                        </li>
                        <li className={style.navItem}>
                            <span onClick={() => scrollToSection('contact')}>Contact</span>
                        </li>
                        <li className={style.navIcon}>
                            <a href="https://github.com/thomas370" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href={"https://www.linkedin.com/in/thomas-bortolato/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href={"https://www.malt.fr/profile/thomasbortolato"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStar} /></a>
                            <a onClick={toggleLanguage}>
                                <img src={i18n.language === 'es' ? france : spain} alt={i18n.language} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
