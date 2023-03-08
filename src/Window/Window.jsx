import { useCallback, useContext, useRef, useState } from "react";
import s from "./Window.module.css";
import { MyContext } from "../GlobalContext/GlobalContext";
import useMove from "../Hooks/useMove";
import WindowNavBar from "./WindowNavBar/WindowNarBar";

export default function Window({
  folder,
  homeRef,
  minimized,
  content,
  colorNavbar,
}) {
  const { width, height } = useContext(MyContext).homeBounds;
  const { setWindowSelected, windowSelected } = useContext(MyContext);

  const windowRef = useRef(null);

  const position = {
    left: width / 4 + "px",
    top: height / 4 + "px",
  };

  const { setMousePressed, mousePressed } = useMove(
    homeRef,
    windowRef,
    position
  );

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
        windowSelected === folder.id ? s.selected : ""
      } ${minimized ? s.minimized : ""}`.trim()}
      tabIndex={0}
      onMouseDown={() => setWindowSelected(folder.id)}
    >
      <WindowNavBar
        handleMousePressed={handleMousePressed}
        handleMouseUp={handleMouseUp}
        windowRef={windowRef.current}
        folder={folder}
        color={colorNavbar}
      />
      <div style={{ height: "calc(100% - 30px)" }}>{content}</div>
    </div>
  );
}
