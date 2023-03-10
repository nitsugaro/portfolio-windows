import henryImage from "../assets/screenshot-certificado.webp";
import henryDestacadoImage from "../assets/screenshot-certificado-destacado.webp";

const henry = {
  name: "Full Stack Developer.jpg",
  icon: "image",
  type: "image",
  url: henryImage,
  color: "black",
};

const henryDestacado = {
  name: "Alumno destacado.jpg",
  icon: "image",
  type: "image",
  url: henryDestacadoImage,
  color: "black",
};

export default {
  name: "SoyHenry - Bootcamp",
  icon: "folder",
  type: "folder",
  color: "black",
  current: [henry, henryDestacado],
};
