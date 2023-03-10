import { useCallback, useContext, useRef } from "react";
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

  const { setMousePressed } = useMove(homeRef, windowRef, position);

  const handleMousePressed = useCallback(() => setMousePressed(true), []);
  const handleMouseUp = useCallback(() => setMousePressed(false), []);

  const isIframe = folder.type == "iframe";
  return (
    <div
      ref={windowRef}
      style={{
        width: isIframe ? "100%" : width / 2 + "px",
        height: isIframe ? "100%" : height / 2 + "px",
        maxWidth: width,
        maxHeight: height,
        top: isIframe ? 0 : position.top,
        left: isIframe ? 0 : position.left,
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
