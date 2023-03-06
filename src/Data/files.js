import { foldersIds } from "./folders";

// HTML/CSS
const TributePage = [
  {
    name: "Tribute Page of Jimmy McGill.html",
    icon: "chrome",
    url: "https://codepen.io/Nitsuga159/full/JjpGBxY",
    type: "html",
  },
  {
    name: "Tribute Page of Jimmy McGill.txt",
    icon: "bloc",
    type: "txt",
  },
  {
    name: "Tribute Page of Jimmy McGill.jpg",
    icon: "image",
    type: "jpg",
  },
];

export const subFolders = {
  [foldersIds.HTML_CSS_ID]: [
    {
      name: "Tribute Page",
      icon: "folder",
      type: "folder",
      current: TributePage,
    },
  ],
  [foldersIds.JAVASCRIPT_ID]: [],
  [foldersIds.REACT_ID]: [],
  [foldersIds.NODEJS_ID]: [],
  [foldersIds.JAVA_ID]: [],
  [foldersIds.C_ID]: [],
};
