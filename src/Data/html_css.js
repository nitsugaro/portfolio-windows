const tributePage = [
  {
    name: "Tribute Page.html",
    date: "01/05/2022 04:15 p. m.",
    icon: "chrome",
    url: "https://codepen.io/nitsugaro/full/JjpGBxY",
    color: "white",
    type: "iframe",
  },
  {
    name: "Tribute Page.txt",
    date: "01/05/2022 04:55 p. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: `Biography of a television series character, Jimmy McGill. Layout designed using HTML/CSS.`,
      spanish: `Biografía de un personaje de una serie de televisión, Jimmy McGill. Maquetado hecho con HTML/CSS`,
    },
  },
];

const formPage = [
  {
    name: "Form Page.html",
    date: "10/05/2022 08:15 a. m.",
    icon: "chrome",
    url: "https://codepen.io/nitsugaro/full/MWQeJZX",
    color: "white",
    type: "iframe",
  },
  {
    name: "Form Page.txt",
    date: "10/05/2022 10:09 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: `Breaking Bad form created using HTML and styled with CSS, adding text inputs, check boxes, and radio buttons.`,
      spanish: `Formulario de Breaking Bad creado con HTML y estilizado con CSS, agregando inputs de texto, casillas check y radio buttons.`,
    },
  },
];

const technicalDocumentation = [
  {
    name: "Technical Documentation.html",
    date: "20/05/2022 09:07 a. m.",
    icon: "chrome",
    url: "https://codepen.io/nitsugaro/full/poargLJ",
    color: "white",
    type: "iframe",
  },
  {
    name: "Technical Documentation.txt",
    date: "20/05/2022 11:29 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: `Technical documentation on how to create a palindrome checker in JavaScript, with a navbar that segments each section or step to follow. HTML for structure and CSS for design.`,
      spanish: `Documentación técnica sobre cómo crear un comprobador de palíndromos en JavaScript, con un navbar el cual tiene segmentado cada sección o paso a seguir. HTML para la estructura y CSS para el diseño.`,
    },
  },
];

export default {
  name: "HTML/CSS",
  icon: "folder-html",
  type: "folder",
  color: "black",
  current: [
    {
      name: "Tribute Page",
      icon: "folder",
      type: "folder",
      color: "black",
      date: "01/05/2022 04:15 p. m.",
      current: tributePage,
    },
    {
      name: "Form Page",
      icon: "folder",
      type: "folder",
      color: "black",
      date: "10/05/2022 08:15 p. m.",
      current: formPage,
    },
    {
      name: "Technical Documentation Page",
      icon: "folder",
      type: "folder",
      color: "black",
      date: "20/05/2022 09:07 a. m.",
      current: technicalDocumentation,
    },
  ],
};
