import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';
import style from './Skills.module.scss';

const Skills = () => {
    const { t } = useTranslation();
    const skills = [
        {id: 1, name: "React.js", logo: "./react.png", color: "#61DBFB"},
        {id: 4, name: "Symfony", logo: "./symfony.png", color: "#000000"},
        {id: 8, name: "PHP", logo: "./php.png", color: "#777BB4"},
        {id: 9, name: "WordPress", logo: "./wordpress.png", color: "#21759B"},
        {id: 10, name: "Sass", logo: "./sass.png", color: "#CC6699"},
        {id: 11, name: "MySQL", logo: "./Mysql.png", color: "#21759B"}
    ];

    return (
        <section className={style.skills} id={"competences"}>
            <h2>{t('competences.name')}</h2>
                <div className={style.row}>
                        {skills.map((skill) => (
                                <div className={style.skill} style={{border: `2px solid ${skill.color}`, boxShadow: `0 0px 10px ${skill.color}`}}>
                                    <img src={skill.logo} alt={skill.name}/>
                                    <p>{skill.name}</p>
                                </div>
                        ))}
                </div>
        </section>
    );
};

export default Skills;