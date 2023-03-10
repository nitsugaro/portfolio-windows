import chessImage1 from "../assets/screenshot-chess1.webp";
import chessImage2 from "../assets/screenshot-chess2.webp";
import chessImage3 from "../assets/screenshot-chess3.webp";

//JAVA
const chess = [
  {
    name: "Chess.html",
    date: "23/02/2023 09:10 a. m.",
    icon: "chrome",
    url: "https://www.youtube.com/embed/hdqwPzuOvjY",
    color: "white",
    type: "iframe",
  },
  {
    name: "Chess.txt",
    date: "23/02/2023 09:10 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: `Chess game developed in Java with the native Swing package for the creation of the graphical user interface. 
      
Object-oriented programming and logical development for a good gaming experience.`,
      spanish: `Ajedrez realizado en Java junto al paquete nativo Swing, para la creación de la interfaz gráfica. 
      
Programación orientada a objetos y desarrollo lógica para una buena experiencia de juego en el mismo. 
      `,
    },
  },
  {
    name: "Chess.github",
    date: "23/02/2023 09:10 a. m.",
    icon: "github",
    url: "https://github.com/Nitsuga159/Chess-Java",
    color: "black",
    type: "anchor",
  },
  {
    name: "ChessImages",
    date: "23/02/2023 09:10 a. m.",
    icon: "folder",
    color: "black",
    type: "folder",
    current: [
      {
        name: "Chess1.jpg",
        date: "23/02/2023 09:10 a. m.",
        icon: "image",
        url: chessImage1,
        color: "black",
        type: "image",
      },
      {
        name: "Chess2.jpg",
        date: "23/02/2023 09:10 a. m.",
        icon: "image",
        url: chessImage2,
        color: "black",
        type: "image",
      },
      {
        name: "Chess3.jpg",
        date: "23/02/2023 09:10 a. m.",
        icon: "image",
        url: chessImage3,
        color: "black",
        type: "image",
      },
    ],
  },
];

export default {
  name: "Java",
  icon: "folder",
  type: "folder",
  color: "black",
  current: [
    {
      name: "Chess",
      icon: "folder",
      type: "folder",
      date: "23/02/2023 09:10 a. m.",
      current: chess,
    },
  ],
};
