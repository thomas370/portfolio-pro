import React, { useState } from 'react';
import style from './Contact.module.scss';
import { useTranslation } from "react-i18next";
import axios from "axios";

const Contact = () => {
    const { t } = useTranslation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('0');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/mailer', {
            name: name,
            email: email,
            subject: subject,
            message: message
        })
        .then(res => {
            console.log(res);
            setEmailSent(true);

            setName('');
            setEmail('');
            setSubject('0');
            setMessage('');
        })
    };
    return (
        <section className={style.contact} id="contact">
            <h2>{t('contact.name')}</h2>
            <p>{t('contact.about1')}</p>
            <div className={style.contactForm}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder={t('contact.Prenom')}  value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <select value={subject} onChange={e => setSubject(e.target.value)}>
                        <option value="0">Sujet</option>
                        <option value="1">{t('contact.option1')}</option>
                        <option value="2">{t('contact.option2')}</option>
                        <option value="3">{t('contact.option3')}</option>
                        <option value="4">{t('contact.option4')}</option>
                        <option value="5">{t('contact.option5')}</option>
                    </select>
                    <textarea placeholder={t('contact.message')} value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <button type="submit">{t('contact.button')}</button>
                    {emailSent ? (
                        <p className={style.success}>{t('contact.success')}</p>
                    ) : null}
                </form>
            </div>
        </section>
    );
};

export default Contact;