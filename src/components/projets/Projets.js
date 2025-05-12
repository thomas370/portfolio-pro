import React from 'react';
import style from './Projets.module.scss';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShare } from "@fortawesome/free-solid-svg-icons";

const Projets = () => {
    const { t } = useTranslation();
    const projects = [
        {
            name: "DevPlanTech",
            color: "#e3ab27",
            tags: [
                { name: "SCSS", color: "#CC6699" },
                { name: "Symfony", color: "#000000" },
                { name: "MySQL", color: "#4479A1" }
            ],
            image: "./devplanteck_mokup.png",
            Date: "2024",
            linkGit: "https://github.com/thomas370/DevBlog",
            link: "https://devplantech.com",
            description:  t('projects.projet1')
        },
        {
            name: "hypanas",
            color: "#e3ab27",
            tags: [
                { name: "SCSS", color: "#1572B6" },
                { name: "React.js", color: "#61DBFB" }
            ],
            image: "./hypana.png",
            Date: "2023",
            link: "https://hypana.fr/",
            description:  t('projects.projet2')
        },
    ];

    return (
        <section className={style.projets} id={"Projets"}>
            <h2>{t('projects.name')}</h2>
            <div className={style.projetsCards}>
                {projects.map((project) => (
                    <div className={style.projetsCard} key={project.name}>
                        <div className={style.cardInner}>
                            <div className={style.cardFront}>
                                <div className={style.text}>
                                    <h3>{project.name}</h3>
                                    <p>{project.Date}</p>
                                </div>
                                <img src={project.image} alt={project.name} />
                                <div className={style.tags}>
                                    {project.tags.map((tag) => (
                                        <div className={style.tag} key={tag.name} >
                                            <p style={{ border: `2px solid ${tag.color}` }}>{tag.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={style.cardBack} style={{boxShadow:`0 0px 10px ${project.color}`}}>
                                <div className={style.text}>
                                    <h3>{project.name}</h3>
                                    <p>{project.Date}</p>
                                    <div className={style.icons}>
                                        {project.linkGit && (
                                            <a href={project.linkGit} target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faGithub}/>
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={faShare}/>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                     <div className={style.desc}>
                                        <h4>{t('projects.description')}</h4>
                                        <p>{project.description}</p>
                                    <div/>
                                     </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projets;