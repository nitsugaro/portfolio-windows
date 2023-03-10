import snakeImage from "../assets/screenshot-snake.webp";
import ticTacToeImage from "../assets/screenshot-tictactoe.webp";
import quotesImage from "../assets/screenshot-quotes.webp";
import salesImage from "../assets/screenshot-sales.webp";

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
      english: "",
      spanish: "",
    },
  },
  {
    name: "snake.jpg",
    date: "4/11/2022 06:49 p. m.",
    icon: "image",
    url: snakeImage,
    color: "black",
    type: "image",
  },
  {
    name: "snake.github",
    date: "5/11/2022 05:00 p. m.",
    url: "https://github.com/Nitsuga159/Snake-Game",
    icon: "github",
    type: "anchor",
  },
];

const ticTacToe = [
  {
    name: "tic tac toe.html",
    date: "19/08/2022 09:24 a. m.",
    icon: "chrome",
    url: "https://tateti-ar.netlify.app/",
    color: "white",
    type: "iframe",
  },
  {
    name: "tic tac toe.txt",
    date: "19/08/2022 11:24 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "tic tac toe.jpg",
    date: "19/08/2022 01:00 p. m.",
    icon: "image",
    url: ticTacToeImage,
    color: "black",
    type: "image",
  },
];

const randomQuotes = [
  {
    name: "Random Quotes.html",
    date: "25/05/2022 09:24 a. m.",
    icon: "chrome",
    url: "https://codepen.io/Nitsuga159/full/dydgBvx",
    color: "white",
    type: "iframe",
  },
  {
    name: "Random Quotes.txt",
    date: "25/05/2022 11:14 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "Random Quotes.jpg",
    date: "25/05/2022 02:33 p. m.",
    icon: "image",
    url: quotesImage,
    color: "black",
    type: "image",
  },
];

const sales = [
  {
    name: "Sales.html",
    date: "23/08/2022 09:00 a. m.",
    icon: "chrome",
    url: "https://codepen.io/Nitsuga159/full/VwXZLrg",
    color: "white",
    type: "iframe",
  },
  {
    name: "Sales.txt",
    date: "23/08/2022 10:35 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "Sales.jpg",
    date: "23/08/2022 06:36 p. m.",
    icon: "image",
    url: salesImage,
    color: "black",
    type: "image",
  },
];

export default {
  name: "JavaScript",
  icon: "folder-js",
  type: "folder",
  color: "black",
  current: [
    {
      name: "Snake Game",
      icon: "folder",
      type: "folder",
      date: "29/10/2022 03:24 p. m.",
      current: snake,
    },
    {
      name: "Tic-tac-toe",
      icon: "folder",
      type: "folder",
      date: "19/08/2022 09:24 a. m.",
      current: ticTacToe,
    },
    {
      name: "Random Quotes",
      icon: "folder",
      type: "folder",
      date: "25/05/2022 09:24 a. m.",
      current: randomQuotes,
    },
    {
      name: "Sales",
      icon: "folder",
      type: "folder",
      date: "23/08/2022 09:24 a. m.",
      current: sales,
    },
  ],
};
