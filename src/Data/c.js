import hangedImage from "../assets/screenshot-hanged.webp";
import gifTicTacToe from "../assets/tic-tac-toe.gif";

const hangedGame = [
  {
    name: "Hanged Game.jpg",
    icon: "image",
    type: "image",
    date: "03/10/2022 01:24 p. m.",
    url: hangedImage,
  },
  {
    name: "Hanged Game.github",
    icon: "github",
    type: "anchor",
    date: "03/10/2022 01:24 p. m.",
    url: "https://github.com/Nitsuga159/Ahorcado-en-C",
  },
];

const ticTacToe = [
  {
    name: "tic-tac-toe.gif",
    icon: "image",
    type: "image",
    date: "02/02/2022 11:33 a. m.",
    color: "black",
    url: gifTicTacToe,
  },
  {
    name: "tic-tac-toe.github",
    icon: "github",
    type: "anchor",
    color: "black",
    date: "02/02/2022 11:45 a. m.",
    url: "https://github.com/Nitsuga159/TicTacToe-C",
  },
];

export default {
  name: "C",
  icon: "folder",
  type: "folder",
  color: "black",
  current: [
    {
      name: "Hanged Game",
      icon: "folder",
      type: "folder",
      date: "03/10/2022 01:24 p. m.",
      current: hangedGame,
    },
    {
      name: "Tic Tac Toe",
      icon: "folder",
      type: "folder",
      date: "02/02/2022 09:13 a. m.",
      current: ticTacToe,
    },
  ],
};
