import responsiveImage from "../assets/screenshot-responsive.webp";
import structuresImage from "../assets/screenshot-structures.webp";
import frontendImage from "../assets/screenshot-frontend.webp";

const responsive = {
  name: "Responsive Design.jpg",
  icon: "image",
  type: "image",
  url: responsiveImage,
  color: "black",
};

const structures = {
  name: "JavaScript Algorithms and Data Structures.jpg",
  icon: "image",
  type: "image",
  url: structuresImage,
  color: "black",
};

const frontend = {
  name: "Frontend Development Libraries.jpg",
  icon: "image",
  type: "image",
  url: frontendImage,
  color: "black",
};

export default {
  name: "FreeCodeCamp",
  icon: "folder",
  type: "folder",
  color: "black",
  current: [responsive, structures, frontend],
};
