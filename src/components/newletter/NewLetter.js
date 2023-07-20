import React from 'react';
import style from './NewLetter.module.scss';
const NewLetter = () => {
    return (
        <section className={style.newLetter}>
            <h2>Newsletter</h2>
            <div className={style.newLetterText}>
                <p>Vous voulez faire la différence dans votre domaine ?</p>
                <p>Inscrivez-vous à notre newsletter et découvrez comment nous pouvons transformer vos rêves en réalité en créant un site Web personnalisé qui vous aidera à surpasser la concurrence.</p>
            </div>
            <div className={style.newLetterForm}>
                <input type="text" placeholder="Votre email"/>
                <button>S'inscrire</button>
            </div>
        </section>
    );
};

export default NewLetter;