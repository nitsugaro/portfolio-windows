import s from "./ToolBar.module.css";
import CurrentDate from "../CurrentDate/CurrentDate";
import LeftSideToolBar from "../LeftSideToolBar/LeftSideToolBar";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MyContext } from "../GlobalContext/GlobalContext";
import Svg from "../SVG/Svg";
import Menu from "../Menu/Menu";

export default function ToolBar() {
  const [openLenguageMenu, setOpenLenguageMenu] = useState(false);
  const { global, setGlobal } = useContext(MyContext);

  const options = useMemo(() => {
    return [
      {
        value: "english",
        name: global.lenguage == "spanish" ? "Inglés" : "English",
        icon: "english",
      },
      {
        value: "spanish",
        name: global.lenguage == "spanish" ? "Español" : "Spanish",
        icon: "spanish",
      },
    ];
  }, [global.lenguage]);

  const onSelect = useCallback((lenguage) => {
    setGlobal((prev) => ({ ...prev, lenguage }));
    localStorage.setItem("lenguage", lenguage);
  }, []);

  useEffect(() => {
    if (
      global.domTarget != null &&
      !global.domTarget.matches("#lenguage-button *")
    )
      setOpenLenguageMenu(false);
  }, [global.domTarget]);

  return (
    <div id="#lenguage-button" className={s["toolbar-container"]}>
      <LeftSideToolBar />
      <div className={s["right-side-toolbar"]}>
        <div
          className={s["lenguage-icon-container"]}
          onClick={() => setOpenLenguageMenu((prev) => !prev)}
        >
          <Svg icon={global.lenguage} className={s["lenguage-icon"]} />
          <Menu
            options={options}
            onSelect={onSelect}
            open={openLenguageMenu}
            s={s}
          />
        </div>
        <CurrentDate />
      </div>
    </div>
  );
}
