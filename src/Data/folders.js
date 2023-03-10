import CVSpanish from "../assets/CV-AgustinRomero.pdf";
import javascript from "./javascript.js";
import html_css from "./html_css.js";
import react from "./react.js";
import fullstack from "./fullstack.js";
import java from "./java.js";
import c from "./c.js";
import freecodecamp from "./freecodecamp";
import henry from "./henry";

const aboutMe = [
  {
    name: "Who I am.txt",
    icon: "bloc",
    text: {
      english: `Hey there! 👋👋 I'm Agustín Romero, Full Stack Developer, with experience in technolies as JavaScript, React, NodeJS, among others. It has been approximately over a year since I have been pushing forward my career as a programmer, whether it is by working on personal projects or taking courses where I can gain more knowledge and improve my skills in development.

One of my most fundamental studies was at the 'SoyHenry' bootcamp, where I was able to see a large part of how a web application is built from scratch, managing to create one individually and another one as part of a group project, which you can find in this portfolio 😉.

Currently, I am in search of my next IT opportunity to apply these skills. I am always committed to any project I participate in and I like to give my best effort.

At the moment, I have great experience in the JavaScript language along with its frameworks and environments that come with it, but I plan to expand my stack by exploring other languages such as Java. That's why I am already working on projects with that language, one of which is chess ♟.`,
      spanish: `Hey qué tal! 👋👋 Soy Agustín Romero, Full Stack Developer, con experiencia en tecnologías como JavaScript, React, NodeJS, entre otros. Hace aproximadamente más de un año que vengo impulsando mi carrera como programador, ya sea realizando proyectos propios o cursos en los que pueda adquirir mayor conocimiento y mejorar mis habilidades para desarrollar.

      Uno de mis estudios más fundamentales fue en el bootcamp 'SoyHenry', donde pude ver gran parte de cómo se conforma una aplicación web desde cero, logrando crear una misma en un proyecto individual y otra de manera grupal, las cuales podrás encontrar en este portafolio 😉.

      Actualmente me encuentro en la buscada de mi próxima oportunidad IT para desempeñar estos conocimientos. Siempre estoy comprometido ante cualquier proyecto en el que sea participe, y me gusta dar lo mejor de mí.
      
      Por el momento tengo gran experiencia en el lenguaje JavaScript junto a sus Frameworks y entornos que lo acompañan, pero pienso expandir mi stack pasando por otros lenguajes como Java. Por ello ya me encuentro realizando proyectos con ese lenguaje, siendo uno de esos el ajedrez ♟.`,
    },
    color: "white",
    type: "bloc",
  },
];

const desktop = [
  {
    name: "Projects",
    icon: "code",
    type: "folder",
    color: "black",
    current: [fullstack, react, java, javascript, html_css, c],
    position: { top: 15, left: 15 },
  },
  {
    name: "About Me",
    icon: "folder",
    type: "folder",
    color: "black",
    position: { top: 15, left: 115 },
    current: aboutMe,
  },
  {
    name: "Education",
    icon: "folder",
    type: "folder",
    color: "black",
    position: { top: 315, left: 115 },
    current: [henry, freecodecamp],
  },
  {
    name: "CV-Spanish.pdf",
    icon: "pdf",
    type: "iframe",
    color: "black",
    url: CVSpanish,
    position: { top: 115, left: 15 },
  },
  {
    name: "CV-English.pdf",
    icon: "pdf",
    type: "iframe",
    color: "black",
    url: CVSpanish,
    position: { top: 115, left: 115 },
  },
];

export default desktop;
