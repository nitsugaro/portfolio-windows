import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Folder from "../Folder/Folder";
import s from "./Home.module.css";
import { MyContext } from "../GlobalContext/GlobalContext";
import Window from "../Window/Window";
import Project from "../Data/folders";
import FolderType from "../WindowType/FolderType/FolderType";
import IframeType from "../WindowType/IframeType/IframeType";
import BlocType from "../Window/BlocType/BlocType";
import ImageType from "../Window/ImageType/ImageType";
import License from "../License/License";

export default function Home() {
  const homeRef = useRef(null);
  const [foldersOrFiles, setFoldersOrFiles] = useState(Project);
  const [widthFile, setWidthFile] = useState(null);
  const { window } = useContext(MyContext).global;
  const { windowsActive } = useContext(MyContext);
  const [openLicense, setOpenLicense] = useState(false);

  useEffect(() => {
    if (!homeRef.current) return;
    const { width } = window;
    setWidthFile(width > 900 ? 100 : 80);

    if (openLicense) return;

    const cbActiveLicense = () => setOpenLicense(true);

    homeRef.current.addEventListener("click", cbActiveLicense);

    return () => homeRef.current.removeEventListener("click", cbActiveLicense);
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
            key={folder.name}
            folder={folder}
            widthFile={widthFile}
            boundsHome={window}
            foldersOrFiles={foldersOrFiles}
            handleFolders={handleFolders}
            homeRef={homeRef}
          />
        ))}
      {windowsActive.map((window, index) => (
        <Window
          folder={window}
          homeRef={homeRef}
          key={window.id}
          minimized={window.minimized}
          colorNavbar={window.color}
          content={
            window.type == "iframe" ? (
              <IframeType src={window.url} key={index} />
            ) : window.type == "bloc" ? (
              <BlocType text={window.text} key={index} />
            ) : window.type == "image" ? (
              <ImageType src={window.url} name={window.name} key={index} />
            ) : (
              <FolderType folder={window} key={index} />
            )
          }
        />
      ))}
      {openLicense && <License />}
    </div>
  );
}
