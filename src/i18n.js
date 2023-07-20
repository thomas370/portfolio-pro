import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        es: {
            translations: {
                header: {
                    name: 'Thomas BORTOLATO',
                    title: 'Desarrollador Web',
                    titleDetail: 'Full-Stack',
                    button: 'Realice su proyecto',
                },
                presentation: {
                    heading: '¿Quién soy yo?',
                    about1: 'Me llamo Thomas BORTOLATO, tengo 21 años y soy desarrollador web Full-Stack.',
                    about2: 'Apasionado por la creación de aplicaciones web intuitivas, aporto mi experiencia en el desarrollo de experiencias de usuario de alta calidad. Buscando nuevos y emocionantes proyectos, estoy disponible para discutir su proyecto.',
                    button: 'Ver mi CV',
                },
                xp: {
                    name: 'Mi experiencia',
                     experience1:{
                        title1: 'Desarrollador web Full-Stack',
                        date1: '2020 - Actualidad',
                         location1: 'La tour du pin, Francia',
                        description1: 'Desarrollo de una interfaz de administración para MobileBoost. Utilizando tecnologías como HTML, CSS, JavaScript y PHP/MySQL.',
                     },
                    experience2:{
                        title2: 'Ganador del concurso de descifrado de códigos',
                        date2: 'De abril de 2022 a julio de 2022',
                        location2: '3W Academy télé présentiel',
                        description2: 'Formación acelerada de desarrollador web HTML, CSS, JS, PHP, SQL. Desarrollador Full Stack, especializado en React y Symfony. 3 semanas en empresa / 1 semana en academia',
                    },
                    experience3:{
                        title3: 'BTS Sistemas Digitales opción A Informática y redes',
                        date3: 'De septiembre de 2020 a mayo de 2021',
                        location3: 'Lycée du Grésivaudan meylan Meylan, Francia',
                        description3: "Formación en sistemas digitales con especialización en informática y redes",
                    },
                    experience4:{
                        title4: 'Técnico informático en prácticas',
                        date4: 'Mayo 2017',
                        location4: 'MAGASIN D\'USINE - ROSSIGNOL MOIRANS Moirans, Francia',
                        description4: 'Mantenimiento informático. Observación del funcionamiento de los servidores de la empresa',
                    },
                    experience5:{
                        title5: 'Técnico informático en prácticas',
                        date5: 'Enero de 2016',
                        location5: 'CENTRO HOSPITALARIO DE TULLINS Tullins, Francia',
                        description5: 'Mantenimiento informático. Observación del funcionamiento de los servidores de la empresa',
                    }
                },
                competences: {
                    name: 'Mis Competencias',
                },
                projects: {
                    name: 'Mis Proyectos',
                },
                contact: {
                    name: 'Contacto',
                    Prenom: 'Nombre y apellido',
                    message: 'Mensaje',
                    about1: '¿Tiene un proyecto? ¿Quiere contactarme? ¡No dude en enviarme un mensaje!',
                    option1: 'Presupuesto de software de gestión',
                    option2: 'Presupuesto de sitio web',
                    option3: 'Propuesta comercial',
                    option4: 'solicitud de información',
                    option5: 'Otros',
                    button: 'Enviar',
                    success: '¡Mensaje enviado!',
                },
                footer: {
                    heading: 'Contacto',
                    link: 'Política de privacidad',
                },
                politique: {
                    name: 'Política de privacidad :',
                    about1: 'Política de Privacidad',
                    about2: 'Thomas BORTOLATO respeta su privacidad. Toda la información personal que nos proporciona se trata con cuidado y confidencialidad.',
                    about3: 'Los datos que recopilamos, como su nombre, dirección de correo electrónico y otra información personal cuando utiliza el formulario de contacto, se utilizan únicamente para responder a sus solicitudes y nunca se venderán, intercambiarán o alquilarán a terceros.',
                    about4: 'Si desea eliminar sus datos personales de nuestra base de datos, puede enviarnos un correo electrónico a la siguiente dirección:',
                    about5: 'Cookies',
                    about6: 'Las cookies son pequeños archivos de texto que se almacenan en su computadora cuando visita un sitio web. Se utilizan para garantizar que el sitio web funcione correctamente, para recopilar estadísticas y para permitir que el sitio web recuerde sus preferencias.',
                    about7: 'Este sitio web utiliza cookies para mejorar su experiencia mientras navega por el sitio web. De estas cookies, las cookies que se clasifican según sea necesario se almacenan en su navegador, ya que son esenciales para el funcionamiento de las funcionalidades básicas del sitio web.',
                    about8: 'También utilizamos cookies de terceros que nos ayudan a analizar y comprender cómo utiliza este sitio web. Estas cookies se almacenarán en su navegador solo con su consentimiento. También tiene la opción de darse de baja de estas cookies. Pero la exclusión voluntaria de algunas de estas cookies puede afectar su experiencia de navegación.',
                    about9: 'Las cookies necesarias son absolutamente esenciales para que el sitio web funcione correctamente. Esta categoría solo incluye cookies que garantizan funcionalidades básicas y características de seguridad del sitio web. Estas cookies no almacenan ninguna información personal.',
                    about10: 'Las cookies que pueden no ser particularmente necesarias para que el sitio web funcione y se utilizan específicamente para recopilar datos personales del usuario a través de análisis, anuncios y otros contenidos integrados se denominan cookies no necesarias. Es obligatorio obtener el consentimiento del usuario antes de ejecutar estas cookies en su sitio web.',
                },
            },
        },
        fr: {
            translations: {
                header: {
                    name: 'Thomas BORTOLATO',
                    title: 'Développeur Web',
                    titleDetail: 'Full-Stack',
                    button: 'Réalisé votre Projet',
                },
                presentation: {
                    heading: 'Qui suis-je ?',
                    about1: 'Je m\'appelle Thomas BORTOLATO, j\'ai 21 ans et je suis développeur web Full-Stack.',
                    about2: 'Passionné par la création d\'applications web intuitives, j\'apporte mon expertise pour développer des expériences utilisateur de qualité. À la recherche de nouveaux projets stimulants, je suis disponible pour discuter de votre projet.',
                    button: 'Voir mon CV',
                },
                xp: {
                    name: 'Mon expérience',
                        experience1:{
                           title1: 'Développeur fullstack',
                            date1: '2022 - a ce jour',
                            location1: 'La tour du pin, Rhone-Alpes, france',
                            description1: 'Développement d\'une interface admin pour MobileBoost. Utilisation de technologies telles que HTML, CSS, JavaScript et PHP/MySQL.',
                        },
                        experience2:{
                            title2: 'Lauréat du Concours qui Casse les Codes',
                            date2: 'D\'avril 2022 à juillet 2022',
                            location2: '3W Academy télé présentiel',
                            description2: 'Formation développeur web accélérée HTML, CSS, JS, PHP, SQL. Full Stack Developer, Spécialisation React, Symfony. 3 semaines en entreprise / 1 semaine en école.',
                        },
                        experience3:{
                             title3: 'BTS Systèmes numériques option A informatique et réseaux',
                            date3: 'De septembre 2020 à mai 2021',
                            location3: 'Lycée du Grésivaudan meylan Meylan, France',
                            description3: 'Formation en systèmes numériques avec une spécialisation en informatique et réseaux.',
                        },
                        experience4:{
                            title4: 'Stage Technicien informatique',
                            date4: 'Mai 2017',
                            location4: 'MAGASIN D\'USINE - ROSSIGNOL MOIRANS Moirans, France',
                            description4: 'Maintenance informatique. Observation du fonctionnement des serveurs de l\'entreprise.',
                        },
                        experience5:{
                            title5: 'Stage Technicien informatique',
                            date5: 'Janvier 2016',
                            location5: 'CENTRE HOSPITALIER DE TULLINS Tullins, France',
                            description5: 'Maintenance informatique. Observation du fonctionnement des serveurs de l\'entreprise.',
                        }
                },
                competences: {
                    name: 'Mes Compétences',
                },
                projects: {
                    name: 'Mes Projets',
                },
                contact: {
                    name: 'Contact',
                    Prenom: 'Nom et Prénom',
                    message: 'Message',
                    about1: 'Vous avez un projet ? N\'hésitez plus !',
                    option1: 'Devis pour un Logiciel de gestions',
                    option2: 'Devis pour un Site Web',
                    option3: 'Proposition commerciale',
                    option4: 'demande d\'information',
                    option5: 'Autres',
                    button: 'Envoyer',
                    success: 'Votre message a bien été envoyé !',
                },
                footer: {
                    heading: 'Contact',
                    link: 'Politique de confidentialité',
                },
                politique: {
                    name: 'Politique de confidentialité :',
                    about1: 'Politique de Confidentialité',
                    about2: 'Thomas BORTOLATO respecte votre vie privée. Toutes les informations personnelles que vous nous fournissez sont traitées avec soin et confidentialité.',
                    about3: 'Les données que nous recueillons, telles que votre nom, adresse e-mail, et d\'autres informations personnelles lors de l\'utilisation du formulaire de contact, sont utilisées uniquement pour répondre à vos demandes et ne seront jamais vendues, échangées ou louées à des tiers.',
                    about4: 'Pour plus d\'informations sur la manière dont nous traitons vos données, veuillez nous contactez.',
                    about5: 'Conditions d\'Utilisation :',
                    about6: 'Conditions d\'Utilisation',
                    about7: 'L\'utilisation de ce site web est soumise aux conditions suivantes :',
                    about8: 'En accédant à ce site web, vous acceptez ces conditions. Si vous n\'êtes pas d\'accord avec ces conditions, veuillez ne pas utiliser ce site.',
                    about9: 'Le contenu de ce site web est pour votre information générale et votre usage personnel uniquement. Il est sujet à changement sans préavis.',
                    about10: 'Des liens vers d\'autres sites web peuvent être inclus pour votre commodité. Ils ne signifient pas que nous approuvons ces sites web. Nous n\'avons aucune responsabilité pour le contenu des sites web liés.',
            },
        },
    },
    },
    lng: "fr",
    fallbackLng: "fr",
    ns: ["translations"],
    defaultNS: "translations",
});

export default i18n;
