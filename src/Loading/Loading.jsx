import { useContext, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { CSSTransition } from "react-transition-group";
import s from "./Loading.module.css";
import { MyContext } from "../GlobalContext/GlobalContext";
import usbSound from "../assets/usb-sound-windows.mp3";

export default function Loading({ showLoading }) {
  const { lenguage } = useContext(MyContext).global;
  const [start, setStart] = useState(false);

  return (
    <CSSTransition
      in={!start}
      timeout={300}
      classNames={{
        enter: s.fadeEnter,
        enterActive: s.fadeEnterActive,
        exit: s.fadeExit,
        exitActive: s.fadeExitActive,
      }}
      unmountOnExit
    >
      <div className={s["loading-container"]}>
        {!showLoading ? (
          <button
            className={s["init-button"]}
            onClick={() => {
              setStart(true);
              const audio = document.createElement("audio");
              audio.src = usbSound;
              audio.play();
            }}
          >
            {lenguage === "spanish" ? "Iniciar" : "Start"}
          </button>
        ) : (
          <>
            <Loader />
            <h2 className={s["loading-title"]}>
              {lenguage === "spanish" ? "Cargando..." : "Loading..."}
            </h2>
          </>
        )}

        <h4 className={s["loading-subtitle"]}>
          {lenguage === "spanish"
            ? "Se recomienda seleccionar pantalla completa."
            : "It's recommended to select full screen."}
        </h4>
      </div>
    </CSSTransition>
  );
}
