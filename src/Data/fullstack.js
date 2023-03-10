import pokeAPI1 from "../assets/screenshot-poke1.webp";
import pokeAPI2 from "../assets/screenshot-poke2.webp";
import pokeAPI3 from "../assets/screenshot-poke3.webp";
import campy1 from "../assets/screenshot-campy1.webp";
import campy2 from "../assets/screenshot-campy2.webp";
import campy3 from "../assets/screenshot-campy3.webp";
import campy4 from "../assets/screenshot-campy4.webp";
import campy5 from "../assets/screenshot-campy5.webp";
import campy6 from "../assets/screenshot-campy6.webp";
import campy7 from "../assets/screenshot-campy7.webp";
import campy8 from "../assets/screenshot-campy8.webp";

const pokemon = [
  {
    name: "PokeAPI.html",
    date: "11/11/2022 10:32 a. m.",
    icon: "chrome",
    url: "https://www.youtube.com/embed/bRl2bdfjqGE",
    color: "white",
    type: "iframe",
  },
  {
    name: "PokeAPI.txt",
    date: "11/11/2022 10:32 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "PokeAPI.github",
    date: "11/11/2022 10:32 a. m.",
    icon: "github",
    url: "https://github.com/Nitsuga159/API-POKEMON",
    color: "black",
    type: "anchor",
  },
  {
    name: "PokeAPIImages",
    date: "11/11/2022 10:32 a. m.",
    icon: "folder",
    color: "black",
    type: "folder",
    current: [
      {
        name: "PokeAPI1.jpg",
        date: "11/11/2022 10:32 a. m.",
        icon: "image",
        url: pokeAPI1,
        color: "black",
        type: "image",
      },
      {
        name: "PokeAPI2.jpg",
        date: "11/11/2022 10:32 a. m.",
        icon: "image",
        url: pokeAPI2,
        color: "black",
        type: "image",
      },
      {
        name: "PokeAPI3.jpg",
        date: "11/11/2022 10:32 a. m.",
        icon: "image",
        url: pokeAPI3,
        color: "black",
        type: "image",
      },
    ],
  },
];

const campy = [
  {
    name: "Campy.html",
    date: "11/11/2022 10:32 a. m.",
    icon: "chrome",
    url: "https://www.youtube.com/embed/MEfaH_a-R10",
    color: "white",
    type: "iframe",
  },
  {
    name: "Campy.txt",
    date: "11/11/2022 10:32 a. m.",
    icon: "bloc",
    color: "white",
    type: "bloc",
    text: {
      english: "",
      spanish: "",
    },
  },
  {
    name: "CampyGithub",
    date: "11/11/2022 10:32 a. m.",
    icon: "folder",
    color: "black",
    type: "folder",
    current: [
      {
        name: "Backend.github",
        date: "11/11/2022 10:32 a. m.",
        icon: "github",
        url: "https://github.com/javierleandromontenegro/Campy-backend",
        color: "black",
        type: "anchor",
      },
      {
        name: "Frontend.github",
        date: "11/11/2022 10:32 a. m.",
        icon: "github",
        url: "https://github.com/ACRUNO/Campy-frontend",
        color: "black",
        type: "anchor",
      },
    ],
  },
  {
    name: "CampyImages",
    date: "11/11/2022 10:32 a. m.",
    icon: "folder",
    color: "black",
    type: "folder",
    current: [
      campy1,
      campy2,
      campy3,
      campy4,
      campy5,
      campy6,
      campy7,
      campy8,
    ].map((url, i) => ({
      name: `Campy${i + 1}.jpg`,
      date: "11/11/2022 10:32 a. m.",
      icon: "image",
      url,
      color: "black",
      type: "image",
    })),
  },
];

export default {
  name: "FullStack",
  icon: "folder",
  type: "folder",
  color: "black",
  current: [
    {
      name: "Campy",
      icon: "folder",
      type: "folder",
      date: "11/11/2022 10:32 a. m.",
      current: campy,
    },
    {
      name: "PokeAPI",
      icon: "folder",
      type: "folder",
      date: "11/11/2022 10:32 a. m.",
      current: pokemon,
    },
  ],
};
