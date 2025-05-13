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
            tags: ["SCSS", "Symfony", "MySQL"],
            image: "./devplanteck_mokup.png",
            year: "2024",
            linkGit: "https://github.com/thomas370/DevBlog",
            link: "https://devplantech.com",
            description: t('projects.projet1')
        },
        {
            name: "hypanas",
            tags: ["SCSS", "React.js"],
            image: "./hypana.png",
            year: "2023",
            link: "https://hypana.fr/",
            description: t('projects.projet2')
        },
    ];

    return (
        <section className={style.projets} id="Projets">
            <h2>{t('projects.name')}</h2>
            <div className={style.projectList}>
                {projects.map((project) => (
                    <div className={style.projectCard} key={project.name}>
                        <img src={project.image} alt={project.name} />
                        <div className={style.content}>
                            <h3>{project.name}</h3>
                            <p className={style.year}>{project.year}</p>
                            <p className={style.description}>{project.description}</p>
                            <div className={style.tags}>
                                {project.tags.map((tag) => (
                                    <span key={tag} className={style.tag}>{tag}</span>
                                ))}
                            </div>
                            <div className={style.links}>
                                {project.linkGit && (
                                    <a href={project.linkGit} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faShare} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projets;
