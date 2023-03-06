import { useCallback, useContext, useRef, useState } from "react";
import s from "./WindowFolder.module.css";
import { MyContext } from "../GlobalContext/GlobalContext";
import useMove from "../Hooks/useMove";
import WindowNavBar from "./WindowNavBar/WindowNarBar";
import imgMe from "../assets/perfil-me.jpg";

export default function WindowFolder({ name, icon, id, homeRef, minimized }) {
  const { width, height } = useContext(MyContext).homeBounds;
  const { setFolderSelected, folderSelected } = useContext(MyContext);

  const windowRef = useRef(null);

  const position = {
    left: width / 4 + "px",
    top: height / 4 + "px",
  };

  const { setMousePressed } = useMove(homeRef, windowRef, position);

  const handleMousePressed = useCallback(() => setMousePressed(true), []);
  const handleMouseUp = useCallback(() => setMousePressed(false), []);

  return (
    <div
      ref={windowRef}
      style={{
        width: width / 2 + "px",
        height: height / 2 + "px",
        maxWidth: width,
        maxHeight: height,
        ...position,
      }}
      className={`${s["window-folder-container"]} ${
        folderSelected === id ? s.selected : ""
      } ${minimized ? s.minimized : ""}`.trim()}
      tabIndex={0}
      onMouseDown={() => setFolderSelected(id)}
    >
      <WindowNavBar
        handleMousePressed={handleMousePressed}
        handleMouseUp={handleMouseUp}
        windowRef={windowRef.current}
        name={name}
        icon={icon}
        id={id}
      />
      <img src={imgMe} style={{ height: "calc(100% - 30px)" }} alt="img-file" />
    </div>
  );
}
