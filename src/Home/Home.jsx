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
import Window from "../Window/Window";
import { folders } from "../Data/folders";
import FolderType from "../WindowType/FolderType/FolderType";
import IframeType from "../WindowType/IframeType/IframeType";
import BlocType from "../Window/BlocType/BlocType";
import ImageType from "../Window/ImageType/ImageType";

export default function Home() {
  const homeRef = useRef(null);
  const [foldersOrFiles, setFoldersOrFiles] = useState(folders);
  const [widthFile, setWidthFile] = useState(null);
  const { window } = useContext(MyContext).global;
  const { windowsActive } = useContext(MyContext);

  useEffect(() => {
    if (!homeRef.current) return;
    const { width } = window;
    setWidthFile(width > 1250 ? 100 : width > 900 ? 50 : 20);
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
          />
        ))}
      {windowsActive.map((window) => (
        <Window
          folder={window}
          homeRef={homeRef}
          key={window.id}
          minimized={window.minimized}
          colorNavbar={window.color}
          content={
            window.type == "iframe" ? (
              <IframeType src={window.url} />
            ) : window.type == "bloc" ? (
              <BlocType text={window.text} />
            ) : window.type == "image" ? (
              <ImageType src={window.url} name={window.name} />
            ) : (
              <FolderType name={window.name} />
            )
          }
        />
      ))}
    </div>
  );
}
