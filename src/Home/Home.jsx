import {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Folder from "../Folder/Folder";
import s from "./Home.module.css";
import { MyContext } from "../GlobalContext/GlobalContext";
import WindowFolder from "../WindowFolder/WindowFolder";
import folders from "../Data/folders";

const currentFoldersOrFiles = [
  {
    name: "HTML/CSS",
    icon: "folder-html",
    position: { top: 15, left: 15 },
  },
  {
    name: "JavaScript",
    icon: "folder-js",
    position: { top: 115, left: 15 },
  },
  {
    name: "React",
    icon: "folder-react",
    position: { top: 115, left: 115 },
  },
  {
    name: "NodeJS",
    icon: "folder-nodejs",
    position: { top: 15, left: 315 },
  },
  {
    name: "Java",
    icon: "folder",
    position: { top: 15, left: 415 },
  },
  {
    name: "C",
    icon: "folder",
    position: { top: 115, left: 315 },
  },
];

export default function Home() {
  const homeRef = useRef(null);
  const [mouseInHome, setMouseInHome] = useState(false);
  const [foldersOrFiles, setFoldersOrFiles] = useState(currentFoldersOrFiles);
  const [widthFile, setWidthFile] = useState(null);
  const { window } = useContext(MyContext).global;
  const { foldersActive } = useContext(MyContext);

  useEffect(() => {
    if (!homeRef.current) return;
    const { width } = window;
    setWidthFile(width > 1250 ? 100 : width > 900 ? 50 : 20);

    const domHome = homeRef.current;

    const cbMouseLeave = () => setMouseInHome(false);
    const cbMouseEnter = () => setMouseInHome(true);

    domHome.addEventListener("mouseleave", cbMouseLeave);
    domHome.addEventListener("mouseenter", cbMouseEnter);

    return () => {
      domHome.removeEventListener("mouseleave", cbMouseLeave);
      domHome.removeEventListener("mouseenter", cbMouseEnter);
    };
  }, [homeRef, window]);

  const handleFolders = useCallback(
    (position, name) => {
      const newFoldersOrFiles = foldersOrFiles.map((item) => {
        if (item.name != name) return item;

        item.position = position;
        return item;
      });

      setFoldersOrFiles(newFoldersOrFiles);
    },
    [foldersOrFiles]
  );

  return (
    <div className={s["home-container"]} ref={homeRef}>
      {widthFile &&
        homeRef.current &&
        foldersOrFiles.map((folder) => (
          <Folder
            key={folder.id}
            folder={folder}
            widthFile={widthFile}
            boundsHome={window}
            foldersOrFiles={foldersOrFiles}
            handleFolders={handleFolders}
            homeRef={homeRef}
            mouseInHome={mouseInHome}
          />
        ))}
      {foldersActive.map((folder) => (
        <WindowFolder
          name={folder.name}
          icon={folder.icon}
          homeRef={homeRef}
          id={folder.id}
          key={folder.id}
          minimized={folder.minimized}
        />
      ))}
    </div>
  );
}
