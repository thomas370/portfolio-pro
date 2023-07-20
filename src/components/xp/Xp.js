import React from 'react';
import style from './Xp.module.scss';
import {useTranslation} from "react-i18next";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faBriefcase,faGraduationCap, faBrain} from "@fortawesome/free-solid-svg-icons";

const Xp = () => {
    const {t} = useTranslation();

        const experiences = [
            {
                id:1,
                title:t('xp.experience1.title1'),
                date:t('xp.experience1.date1'),
                location:t('xp.experience1.location1'),
                description:t('xp.experience1.description1'),
                type:"work",
                color:"#E3AB27FF"
            },
            {
                id:2,
                title:t('xp.experience2.title2'),
                date:t('xp.experience2.date2'),
                location:t('xp.experience2.location2'),
                description:t('xp.experience2.description2'),
                type:"education",
                color:"#e37c27"
            },
            {
                id:3,
                title:t('xp.experience3.title3'),
                date:t('xp.experience3.date3'),
                location:t('xp.experience3.location3'),
                description:t('xp.experience3.description3'),
                type:"education",
                color:"#e37c27"
            },
            {
                id:4,
                title:t('xp.experience4.title4'),
                date:t('xp.experience4.date4'),
                location:t('xp.experience4.location4'),
                description:t('xp.experience4.description4'),
                type:"internship",
                color:"#e5501b"
            },
            {
                id:5,
                title:t('xp.experience5.title5'),
                date:t('xp.experience5.date5'),
                location:t('xp.experience5.location5'),
                description:t('xp.experience5.description5'),
                type:"internship",
                color:"#e5501b"
            }
        ];

        return (
            <section className={style.xp} id='xp'>
                <h2>{t('xp.name')}</h2>
                <div>
                    <VerticalTimeline>
                        {experiences.map((experience) => {
                            let icon;
                            switch (experience.type) {
                                case "work":
                                    icon = <FontAwesomeIcon icon={faBriefcase}/>;
                                    break;
                                case "education":
                                    icon = <FontAwesomeIcon icon={faGraduationCap}/>;
                                    break;
                                case "internship":
                                    icon = <FontAwesomeIcon icon={faBrain}/>;
                                    break;
                                default:
                                    icon = <FontAwesomeIcon icon={faStar}/>;
                                    break;
                            }

                            return (
                                <VerticalTimelineElement
                                    key={experience.id}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{
                                        background:experience.color,
                                        color:'#fff',
                                        fontFamily:'Roboto, sans serif'
                                    }}
                                    contentArrowStyle={{borderRight:`7px solid ${experience.color}`}}
                                    date={experience.date}
                                    iconStyle={{background:experience.color,color:'#fff'}}
                                    icon={icon}
                                >
                                    <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
                                    <p>
                                        {experience.description}
                                    </p>
                                </VerticalTimelineElement>
                            );
                        })}
                    </VerticalTimeline>
                </div>
            </section>
        );
    };

export default Xp;