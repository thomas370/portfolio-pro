import React from 'react';
import style from './Home.module.scss';
import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import Presentation from "../../components/presentation/Presentation";
import Skills from "../../components/skills/Skills";
import Projets from "../../components/projets/Projets";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import Xp from "../../components/xp/Xp";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <Presentation />
            <Skills />
            <Xp />
            <Projets />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;