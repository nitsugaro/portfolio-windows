import { useContext, useEffect, useState } from "react";
import { MyContext } from "../GlobalContext/GlobalContext";
import audioBackgroundWindows from "../assets/background-sound-windows.mp3";
import s from "./License.module.css";

export default function License() {
  const { lenguage } = useContext(MyContext).global;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
      const audio = document.createElement("audio");
      audio.src = audioBackgroundWindows;
      audio.play();
    }, 1500);
  }, []);

  return (
    <div
      style={{
        display: open ? "flex" : "none",
      }}
      className={s["license-background"]}
    >
      <div className={s["license-container"]}>
        <div className={s["license-text"]}>
          <h2 className={s.title}>
            {lenguage == "english"
              ? "Your Windows license will expire soon"
              : "Tu licencia de Windows expirará pronto"}
          </h2>
          <h4 className={s.subtitle}>
            {lenguage == "english"
              ? "You need to activate Windows in Settings"
              : "Tienes que activar Windows en Configuración"}
          </h4>
        </div>
        <div className={s["container-close-button"]}>
          <button className={s["close-button"]} onClick={() => setOpen(false)}>
            {lenguage == "english" ? "Close" : "Cerrar"}
          </button>
        </div>
      </div>
    </div>
  );
}
