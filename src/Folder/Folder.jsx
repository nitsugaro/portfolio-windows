import { useCallback, useContext, useEffect, useRef, useState } from "react";
import s from "./Folder.module.css";
import Svg from "../SVG/Svg";
import useMove from "../Hooks/useMove";
import { MyContext } from "../GlobalContext/GlobalContext";

const checkLimit = (top, left, widthFile, boundsHome) => {
  const { width, height } = boundsHome;

  return (
    top <= 0 ||
    top + widthFile >= height ||
    left <= 0 ||
    left + widthFile >= width
  );
};

const checkAvaible = (foldersOrFiles, top, left) => {
  for (let item of foldersOrFiles) {
    const { position } = item;

    if (top === position.top && left === position.left) return true;
  }

  return false;
};

export default function Folder({
  folder,
  widthFile,
  boundsHome,
  homeRef,
  mouseInHome,
  handleFolders,
  foldersOrFiles,
}) {
  const folderRef = useRef(null);
  const { addFolderActive, setFolderSelected } = useContext(MyContext);
  const { setMousePressed, setActualPosition, mousePressed, actualPosition } =
    useMove(homeRef, folderRef, folder.position);

  useEffect(() => {
    if (!mouseInHome) handleMouseUp();
  }, [mouseInHome]);

  const handleMouseUp = useCallback(() => {
    setMousePressed(false);
    const currentItem = folderRef.current;
    const { top, left } = currentItem.getBoundingClientRect();

    let newTop = Math.round(top / widthFile) * widthFile + 15;
    let newLeft = Math.round(left / widthFile) * widthFile + 15;

    const exceded =
      checkLimit(newTop, newLeft, widthFile, boundsHome) ||
      checkAvaible(foldersOrFiles, newTop, newLeft);

    currentItem.style.top = `${exceded ? actualPosition.top : newTop}px`;
    currentItem.style.left = `${exceded ? actualPosition.left : newLeft}px`;

    if (!exceded) {
      setActualPosition({ top: newTop, left: newLeft });
      handleFolders({ top: newTop, left: newLeft }, folder.name);
    }
  }, [folderRef, actualPosition]);

  return (
    <div
      tabIndex={0}
      ref={folderRef}
      className={`${s["folder-container"]} ${
        mousePressed ? s.active : ""
      }`.trim()}
      onMouseDown={() => setMousePressed(true)}
      onMouseUp={handleMouseUp}
      onBlur={handleMouseUp}
      onDoubleClick={() => {
        let id = crypto.randomUUID();
        addFolderActive({
          ...folder,
          minimized: false,
        });

        setFolderSelected(id);
      }}
    >
      <Svg icon={folder.icon} className={s["folder-icon"]} />
      <h3 className={s["folder-name"]}>{folder.name}</h3>
    </div>
  );
}
