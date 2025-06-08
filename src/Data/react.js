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
    url: "https://nitsugaro.github.io/catalogos/",
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
      english: `Famous movies and series billboard consulted through an IMDB API. They can be searched, see their details such as box office, release date, and synopsis, as well as being added to favorites and consulted in their corresponding section, along with the ability to filter them by name.

Developed with HTML, CSS, and JavaScript, all through the React framework and Redux to maintain global states.`,
      spanish: `Cartelera de películas y series famosas consultadas a través de una API de IMDB. Se pueden buscar, ver detalle de las mismas como su recaudación, estreno y sinopsis, cómo también ser agregada a favoritos y consultarla en su apartado correspondiente, junto a la capacidad de filtrarlos por nombre.

Realizado con HTML, CSS y JavaScript, todo eso a través del Framework React y Redux para mantener estados globales.
      `,
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
    url: "https://github.com/nitsugaro/catalogos",
    color: "black",
    type: "anchor",
  },
];

const markdownEditor = [
  {
    name: "Markdown Editor.html",
    date: "13/06/2022 11:20 a. m.",
    icon: "chrome",
    url: "https://codepen.io/nitsugaro/full/qBxQpPZ",
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
      english: `Real-time Markdown editor. You can format your own document in the editor section and as soon as it's processed by the program, it will appear with a result in the output. You can even write HTML code and it will be rendered as such.

Tech Stack: HTML, CSS, JavaScript, React.`,
      spanish: `Editor Markdown en tiempo real. Puedes maquetar tu propio documento en el apartado de editor y tan pronto sea procesado por el programa, éste saldrá con un resultado en sálida. Se puede incluso escribir código HTML y será renderizado como tal. 

Tech Stack: HTML, CSS, JavaScript, React.
      `,
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
    url: "https://codepen.io/nitsugaro/full/vYdRvLM",
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
      english: `Web application where you can enter a text and a key to encrypt it in the style of Julius Caesar, resulting in an encrypted text with the key. Similarly, a text can be decrypted on the same page, if the correct key is available.

Tech Stack: HTML, CSS, JavaScript, React.`,
      spanish: `Aplicación web donde se podrá colocar un texto y una clave para hacer un cifrado al estilo Julio César, dando por resultado un texto encriptado con la clave. De la misma manera, se puede desencriptar un texto, si se tiene la clave correcta, en la misma página.

Tech Stack: HTML, CSS, Javascript, React.
      `,
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
      english: `Weather app, where you can search for a location and get the temperature for that location.

Tech Stack: HTML, CSS, JavaScript, React.`,
      spanish: `App de clima, donde se podrá buscar una locación y obtener los grados que hay en las mismas.

Tech Stack: HTML, CSS, JavaScript, React.
      `,
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
    url: "https://codepen.io/nitsugaro/full/oNEEQqP",
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
      english: `Fully functional calculator made entirely in React.`,
      spanish: `Calculadora funcional hecha 100% en React.`,
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
    url: "https://codepen.io/nitsugaro/full/vYdvMKN",
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
      english: `Sound player made in React, with the ability to handle two sound tracks, control the volume, turn it on or off, and control it from the keyboard or by clicking on the buttons.`,
      spanish: `Reproductor de sonidos hecho en React, con capacidad de dos bandas de sonidos, capacidad de manejar el volumen del mismo, apagar o encender y manejar desde el teclado o presionando en los botones.`,
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
    url: "https://codepen.io/nitsugaro/full/NWyJqQm",
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
      english: `5 + 25 timer, with the ability to add or decrease time for the break or the count.`,
      spanish: `Cronómetro 5 + 25, con capacidad de agregar o disminuir tiempo en el descando o el conteo del mismo.
      `,
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
