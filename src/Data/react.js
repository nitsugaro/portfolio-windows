import cinemaImage from "../assets/screenshot-cinema.webp";
import markdownImage from "../assets/screenshot-markdown.webp";
import cipherImage from "../assets/screenshot-cipher.webp";
import weatherImage from "../assets/screenshot-weather.webp";
import calculatorImage from "../assets/screenshot-calculator.webp";
import reproductorImage from "../assets/screenshot-reproductor.webp";
import cronometerImage from "../assets/screenshot-cronometer.webp";

const cinema = [
  {
    name: "Cinema.html",
    date: "13/10/2022 11:20 a. m.",
    icon: "chrome",
    url: "https://nitsuga159.github.io/catalogos/",
    color: "white",
    type: "iframe",
  },
  {
    name: "Cinema.txt",
    date: "13/10/2022 12:25 p. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "Cinema.jpg",
    date: "13/10/2022 01:20 p. m.",
    icon: "image",
    url: cinemaImage,
    color: "black",
    type: "image",
  },
  {
    name: "Cinema.github",
    date: "13/10/2022 01:20 p. m.",
    icon: "github",
    url: "https://github.com/Nitsuga159/catalogos",
    color: "black",
    type: "anchor",
  },
];

const markdownEditor = [
  {
    name: "Markdown Editor.html",
    date: "13/06/2022 11:20 a. m.",
    icon: "chrome",
    url: "https://codepen.io/Nitsuga159/full/qBxQpPZ",
    color: "white",
    type: "iframe",
  },
  {
    name: "Markdown Editor.txt",
    date: "13/06/2022 10:10 p. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "Markdown Editor.jpg",
    date: "13/06/2022 10:10 p. m.",
    icon: "image",
    url: markdownImage,
    color: "black",
    type: "image",
  },
];

const cesarCipher = [
  {
    name: "Cesar Cipher.html",
    date: "15/07/2022 09:00 a. m.",
    icon: "chrome",
    url: "https://codepen.io/Nitsuga159/full/vYdRvLM",
    color: "white",
    type: "iframe",
  },
  {
    name: "Cesar Cipher.txt",
    date: "15/07/2022 09:00 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "Cesar Cipher.jpg",
    date: "15/07/2022 09:00 a. m.",
    icon: "image",
    url: cipherImage,
    color: "black",
    type: "image",
  },
];

const weather = [
  {
    name: "Weather App.html",
    date: "26/09/2022 09:24 a. m.",
    icon: "chrome",
    url: "https://weatherappar.netlify.app/",
    color: "white",
    type: "iframe",
  },
  {
    name: "Weather App.txt",
    date: "26/09/2022 09:24 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "Weather App.jpg",
    date: "26/09/2022 09:24 a. m.",
    icon: "image",
    url: weatherImage,
    color: "black",
    type: "image",
  },
];

const calculator = [
  {
    name: "Calculator.html",
    date: "01/08/2022 12:45 p. m.",
    icon: "chrome",
    url: "https://codepen.io/Nitsuga159/full/oNEEQqP",
    color: "white",
    type: "iframe",
  },
  {
    name: "Calculator.txt",
    date: "01/08/2022 12:45 p. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "Calculator.jpg",
    date: "01/08/2022 12:45 p. m.",
    icon: "image",
    url: calculatorImage,
    color: "black",
    type: "image",
  },
];

const soundReproductor = [
  {
    name: "Sound Reproductor.html",
    date: "12/08/2022 07:10 a. m.",
    icon: "chrome",
    url: "https://codepen.io/Nitsuga159/full/vYdvMKN",
    color: "white",
    type: "iframe",
  },
  {
    name: "Sound Reproductor.txt",
    date: "12/08/2022 07:10 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "Sound Reproductor.jpg",
    date: "12/08/2022 07:10 a. m.",
    icon: "image",
    url: reproductorImage,
    color: "black",
    type: "image",
  },
];

const cronometer = [
  {
    name: "Cronometer.html",
    date: "03/08/2022 11:03 a. m.",
    icon: "chrome",
    url: "https://codepen.io/Nitsuga159/full/NWyJqQm",
    color: "white",
    type: "iframe",
  },
  {
    name: "Cronometer.txt",
    date: "03/08/2022 11:03 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "Cronometer.jpg",
    date: "03/08/2022 11:03 a. m.",
    icon: "image",
    url: cronometerImage,
    color: "black",
    type: "image",
  },
];

export default {
  name: "React",
  icon: "folder-react",
  type: "folder",
  color: "black",
  current: [
    {
      name: "Cinema",
      icon: "folder",
      type: "folder",
      date: "13/10/2022 11:20 a. m.",
      current: cinema,
    },
    {
      name: "Markdown Editor",
      icon: "folder",
      type: "folder",
      date: "13/06/2022 11:20 a. m.",
      current: markdownEditor,
    },
    {
      name: "Cesar Cipher",
      icon: "folder",
      type: "folder",
      date: "15/07/2022 09:00 a. m.",
      current: cesarCipher,
    },
    {
      name: "Weather App",
      icon: "folder",
      type: "folder",
      date: "26/09/2022 09:24 a. m.",
      current: weather,
    },
    {
      name: "Calculator",
      icon: "folder",
      type: "folder",
      date: "01/08/2022 12:45 p. m.",
      current: calculator,
    },
    {
      name: "Sound Reproductor",
      icon: "folder",
      type: "folder",
      date: "12/08/2022 07:10 a. m.",
      current: soundReproductor,
    },
    {
      name: "Cronometer",
      icon: "folder",
      type: "folder",
      date: "03/08/2022 11:03 a. m.",
      current: cronometer,
    },
  ],
};
