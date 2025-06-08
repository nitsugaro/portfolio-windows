import CV from "../assets/cv-agustin-romero.pdf";
import imageMe from "../assets/perfil-me.jpg";
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
      english: `👋 I'm Agustín Romero, an IT professional with a focus on security, digital identity, and software development. I'm passionate about building scalable, secure, and user-oriented solutions by combining both the technical and functional perspectives of each project.

I have over 2 years of experience implementing Identity and Access Management (IAM/CIAM) solutions, actively participating in architectural decisions, technical design, and development.

I’ve worked with tools such as ForgeRock, Ping One Identity, Keycloak, MidPoint, Transmit Security, among others, across projects of varying scale and complexity.

In addition, I bring a strong technical background in software development, including:

SDK and API integration

Implementation of authentication and authorization protocols such as OAuth2, OpenID Connect (OIDC), and handling of JWT tokens

Development of web applications and microservices, with a strong focus on secure system integration`,
      spanish: `👋 Soy Agustín Romero, profesional del área IT con enfoque en seguridad, identidad digital y desarrollo de software. Me apasiona construir soluciones escalables, seguras y orientadas al usuario, integrando tanto la visión técnica como funcional de los proyectos.

Cuento con más de 2 años de experiencia en la implementación de soluciones de Manejo de Acceso e Identidad (IAM/CIAM), participando activamente en definiciones de arquitectura, diseño técnico y desarrollo.

He trabajado con herramientas como ForgeRock, Ping One Identity, Keycloak, MidPoint, Transmit Security, entre otras, en proyectos de distinta escala y complejidad.

Además, tengo un sólido background técnico en desarrollo de software, incluyendo:

Integración de SDKs y APIs.

Implementación de protocolos de autenticación/autorización como OAuth2, OpenID Connect (OIDC), y manejo de tokens JWT.

Desarrollo de aplicaciones web y microservicios, enfocándome en la integración segura entre sistemas.

Esta combinación de experiencia me permite abordar desafíos de identidad digital desde un enfoque integral, garantizando seguridad, rendimiento y una experiencia de usuario fluida.`,
    },
    color: "white",
    type: "bloc",
  },
  {
    name: "My skills.txt",
    icon: "bloc",
    text: {
      english: `
        Languages: HTML, CSS, JavaScript, Typescript, NodeJS, Java, MySQL, PostgreSQL.

        Frameworks: React-Redux, MaterialUI, Angular, Express, NestJS, Sequelize.

        Others: OAuth2.0, OIDC, Linux, SocketIO, JWT, Auth0, Firsebase, Nodemailer, Mercado Pago, Cloudinary.

        Workshop: Git, Github, Trello, Postman, Insomnia, NPM.
      `,
      spanish: `Lenguajes: HTML, CSS, JavaScript, Typescript, NodeJS, Java, MySQL, PostgreSQL.

        Librerías: React-Redux, Angular, Express, NestJS, Sequelize.

        Otros: OAuth2.0, OIDC, JWT, Linux, Auth0, Firsebase, Nodemailer, Mercado Pago, Cloudinary.

        Ambientes de trabajo: Git, Github, Trello, Postman, Insomnia, NPM.`
    },
    color: "white",
    type: "bloc",
  },
  {
    name: "Perfil Image.jpg",
    icon: "image",
    url: imageMe,
    color: "black",
    type: "image",
  },
];

const desktop = [
  {
    name: "cv-agustin-romero.pdf",
    icon: "pdf",
    type: "iframe",
    color: "black",
    url: CV,
    position: { top: 115, left: 15 },
  },
  {
    name: "about-me",
    icon: "folder",
    type: "folder",
    color: "black",
    position: { top: 215, left: 15 },
    current: aboutMe,
  },
  {
    name: "education",
    icon: "folder",
    type: "folder",
    color: "black",
    position: { top: 215, left: 115 },
    current: [henry, freecodecamp],
  },
  {
    name: "my-projects",
    icon: "code",
    type: "folder",
    color: "black",
    current: [fullstack, react, java, javascript, html_css, c],
    position: { top: 315, left: 15 },
  },
];

export default desktop;
