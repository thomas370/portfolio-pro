import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import style from './Skills.module.scss';

const Skills = () => {
    const { t } = useTranslation();
    const skills = [
        {id: 1, name: "React.js", logo: "./react.png", color: "#61DBFB"},
        {id: 2, name: "Node.js", logo: "./node.png", color: "#339933"},
        {id: 3, name: "MySQL", logo: "./sql.png", color: "#4479A1"},
        {id: 4, name: "Symfony", logo: "./symfony.png", color: "#000000"},
        {id: 5, name: "HTML5", logo: "./html.png", color: "#E34F26"},
        {id: 6, name: "CSS3", logo: "./css.png", color: "#1572B6"},
        {id: 7, name: "JavaScript", logo: "./javascript.png", color: "#F7DF1E"},
        {id: 8, name: "PHP", logo: "./php.png", color: "#777BB4"},
        {id: 9, name: "WordPress", logo: "./wordpress.png", color: "#21759B"},
        {id: 10, name: "Sass", logo: "./sass.png", color: "#CC6699"},
        {id: 11, name: "GitHub", logo: "./github.png", color: "#F05032"},
        {id: 12, name: "Express", logo: "./express.png", color: "#000000"},
    ];

    return (
        <section className={style.skills} id={"competences"}>
            <h2>{t('competences.name')}</h2>
            <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
            >
                {skills.map((skill) => (
                    <SwiperSlide key={skill.id}>
                        <div className={style.skill} style={{border: `2px solid ${skill.color}`, boxShadow: `0 0px 10px ${skill.color}`}}>
                            <img src={skill.logo} alt={skill.name}/>
                            <p>{skill.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Skills;