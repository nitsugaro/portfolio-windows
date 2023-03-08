import { foldersIds } from "./folders";
import perfilMe from "../assets/perfil-me.jpg";

// HTML/CSS
const tributePage = [
  {
    name: "Tribute Page.html",
    date: "01/05/2022 04:15 p. m.",
    icon: "chrome",
    url: "https://codepen.io/Nitsuga159/full/JjpGBxY",
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
      english: "",
      spanish: "",
    },
  },
  {
    name: "Tribute Page.jpg",
    date: "01/05/2022 05:36 p. m.",
    icon: "image",
    url: "",
    color: "black",
    type: "image",
  },
];

const formPage = [
  {
    name: "Form Page.html",
    date: "10/05/2022 08:15 a. m.",
    icon: "chrome",
    url: "https://codepen.io/Nitsuga159/full/JjpGBxY",
    color: "white",
    type: "iframe",
  },
  {
    name: "Form Page.txt",
    date: "10/05/2022 10:09 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
  },
  {
    name: "Form Page.jpg",
    date: "10/05/2022 01:43 p. m.",
    icon: "image",
    url: "",
    color: "black",
    type: "image",
  },
];

const technicalDocumentation = [
  {
    name: "Technical Documentation.html",
    date: "20/05/2022 09:07 a. m.",
    icon: "chrome",
    url: "https://codepen.io/Nitsuga159/full/JjpGBxY",
    color: "white",
    type: "iframe",
  },
  {
    name: "Technical Documentation.txt",
    date: "20/05/2022 11:29 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
  },
  {
    name: "Technical Documentation.jpg",
    date: "20/05/2022 04:43 p. m.",
    icon: "image",
    url: "",
    color: "black",
    type: "image",
  },
];

const landingPage = [
  {
    name: "Landing.html",
    date: "21/05/2022 08:24 a. m.",
    icon: "iframe",
    url: "https://codepen.io/Nitsuga159/full/JjpGBxY",
    color: "white",
    type: "html",
  },
  {
    name: "Landing.txt",
    date: "21/05/2022 10:44 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
  },
  {
    name: "Landing.jpg",
    date: "21/05/2022 03:49 p. m.",
    icon: "image",
    url: "",
    color: "black",
    type: "image",
  },
];

//JAVASCRIPT
const snake = [
  {
    name: "snake.html",
    date: "29/10/2022 03:24 p. m.",
    icon: "chrome",
    url: "https://nitsuga159.github.io/Snake-Game/",
    color: "white",
    type: "iframe",
  },
  {
    name: "snake.txt",
    date: "2/11/2022 12:24 p. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "Hola qué tal",
      spanish: "Hi, how are you ?",
    },
  },
  {
    name: "snake.jpg",
    date: "4/11/2022 06:49 p. m.",
    icon: "image",
    url: perfilMe,
    color: "black",
    type: "image",
  },
];

export const subFolders = {
  [foldersIds.HTML_CSS]: [
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
    {
      name: "Landing Page",
      date: "21/05/2022 08:24 a. m.",
      icon: "folder",
      type: "folder",
      color: "black",
      current: landingPage,
    },
  ],
  [foldersIds.JAVASCRIPT]: [
    {
      name: "Snake Game",
      icon: "folder",
      type: "folder",
      color: "black",
      date: "29/10/2022 03:24 p. m.",
      current: snake,
    },
  ],
  [foldersIds.REACT]: [],
  [foldersIds.NODE_JS]: [],
  [foldersIds.JAVA]: [],
  [foldersIds.C]: [],
};
