import React from 'react';
import style from './Projets.module.scss';
import {useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Projets = () => {
    const { t } = useTranslation();
    const projects = [
        {name: "WordPress Photographie",tags:[{name: "WordPress", color: "#21759B"}] ,image: "./projet_3.png", Date: "2021",linkGit: "", },
        {name: "Jeux-flex",tags: [{name:"CSS", color: "#1572B6"},{name: "React.js", color: "#61DBFB"},{name : "Symfony", color: "#000000"}, {name: "Mysql", color: "#4479A1"}],image: "./projet_2.png", Date: "2023" ,linkGit: "https://github.com/thomas370/jeux-flex"},
        {name: "Starbuks",tags: [{name:"CSS", color: "#1572B6"},{name:"HTML", color: "#E34F26"}, {name:"Javascript",color: "#F7DF1E"}],image: "./projet_1.png", Date: "2020",linkGit: "https://github.com/thomas370/starbucks"},
        {name: "BikeBeer",tags: [{name:"scss", color: "#CC6699"},{name: "React.js", color: "#61DBFB"},{name: "Mysql", color: "#4479A1"},{name:"express", color: "#000000"}],image: "./projet_4.png", Date: "2023",linkGit: "https://github.com/thomas370/bikebeer"},
    ];
    return (
        <section className={style.projets} id={"Projets"}>
            <h2>{t('projects.name')}</h2>
            <div className={style.projetsCards}>
                {projects.map((project) => (
                    <div
                        className={style.projetsCard}
                        key={project.name}
                        style={{backgroundImage: `url(${project.image})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
                        <div className={style.text}>
                            <p>{project.Date}</p>
                            <h3>{project.name}</h3>
                            <a href={project.linkGit} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                        <div className={style.image}>
                            <img src={project.image} alt={project.name}/>
                        </div>
                        <div className={style.tags}>
                            {project.tags.map((tag) => (
                                <div className={style.tag} key={tag.name}>
                                    <p>{tag.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projets;