import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import Header from "../../components/header/Header";
import Presentation from "../../components/presentation/Presentation";
import Skills from "../../components/skills/Skills";
import Projets from "../../components/projets/Projets";
import Footer from "../../components/footer/Footer";
import Xp from "../../components/xp/Xp";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://www.thomasbortolato.fr/" />
            </Helmet>
            <NavBar />
            <Header />
            <Presentation />
            <Xp />
            <Skills />
            <Projets />
            <Footer />
        </div>
    );
};

export default Home;