const HTML_CSS_ID = crypto.randomUUID();
const JAVASCRIPT_ID = crypto.randomUUID();
const REACT_ID = crypto.randomUUID();
const NODEJS_ID = crypto.randomUUID();
const JAVA_ID = crypto.randomUUID();
const C_ID = crypto.randomUUID();

export const folders = [
  {
    name: "HTML/CSS",
    icon: "folder-html",
    position: { top: 15, left: 15 },
    id: HTML_CSS_ID,
  },
  {
    name: "JavaScript",
    icon: "folder-js",
    position: { top: 115, left: 15 },
    id: JAVASCRIPT_ID,
  },
  {
    name: "React",
    icon: "folder-react",
    position: { top: 115, left: 115 },
    id: REACT_ID,
  },
  {
    name: "NodeJS",
    icon: "folder-nodejs",
    position: { top: 15, left: 315 },
    id: NODEJS_ID,
  },
  {
    name: "Java",
    icon: "folder",
    position: { top: 15, left: 415 },
    id: JAVA_ID,
  },
  {
    name: "C",
    icon: "folder",
    position: { top: 115, left: 315 },
    id: C_ID,
  },
];

export const foldersIds = {
  HTML_CSS_ID,
  JAVASCRIPT_ID,
  REACT_ID,
  NODEJS_ID,
  JAVA_ID,
  C_ID,
};
