import { useCallback, useContext, useEffect, useRef, useState } from "react";
import s from "./Folder.module.css";
import Svg from "../SVG/Svg";
import useMove from "../Hooks/useMove";
import { MyContext } from "../GlobalContext/GlobalContext";
import { v4 as uuidv4 } from "uuid";

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
  handleFolders,
  foldersOrFiles,
}) {
  const folderRef = useRef(null);
  const [timeoutOpen, setTimeoutOpen] = useState(null);
  const { addWindowActive, global } = useContext(MyContext);
  const isDesktop = global.window.width > 900;
  const {
    setMousePressed,
    setActualPosition,
    mousePressed,
    actualPosition,
    mouseMove,
  } = useMove(homeRef, folderRef, folder.position);

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

  const handleOpenWindow = useCallback(() => {
    addWindowActive({
      ...folder,
      id: uuidv4(),
      minimized: false,
    });
  }, []);

  useEffect(() => {
    if (mouseMove) clearTimeout(timeoutOpen);
  }, [mouseMove, timeoutOpen]);

  return (
    <div
      tabIndex={0}
      ref={folderRef}
      className={`${s["folder-container"]} ${
        mousePressed ? s.active : ""
      }`.trim()}
      onMouseDown={isDesktop ? () => setMousePressed(true) : undefined}
      onMouseUp={isDesktop ? handleMouseUp : undefined}
      onTouchStart={
        !isDesktop
          ? () => {
              setTimeoutOpen(setTimeout(handleOpenWindow, 1000));
              setMousePressed(true);
            }
          : undefined
      }
      onTouchEnd={
        !isDesktop
          ? () => {
              clearTimeout(timeoutOpen);
              handleMouseUp();
            }
          : undefined
      }
      onBlur={handleMouseUp}
      onDoubleClick={handleOpenWindow}
    >
      <Svg icon={folder.icon} className={s["folder-icon"]} />
      <h3 className={s["folder-name"]}>{folder.name}</h3>
    </div>
  );
}
