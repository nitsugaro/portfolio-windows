import s from "./LeftSideToolBar.module.css";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Menu from "../Menu/Menu";
import { MyContext } from "../GlobalContext/GlobalContext";
import Svg from "../SVG/Svg";

export default function LeftSideToolBar() {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  const { domTarget, lenguage } = useContext(MyContext).global;
  const {
    windowsActive,
    setWindowsActive,
    windowSelected,
    setWindowSelected,
    setGlobal,
    global,
  } = useContext(MyContext);

  const handleSearch = useCallback(({ target }) => setSearch(target.value), []);

  const onSelect = useCallback((value) => {
    if (value === "reload") window.location.reload();

    if (value === "poweroff") setGlobal((prev) => ({ ...prev, power: false }));
  }, []);

  const options = useMemo(() => {
    return [
      {
        value: "reload",
        name: global.lenguage == "spanish" ? "Reiniciar" : "Restart",
        icon: "reload",
      },
      {
        value: "poweroff",
        name: global.lenguage == "spanish" ? "Apagar" : "Shut down",
        icon: "shutdown",
      },
    ];
  }, [global.lenguage]);

  useEffect(() => {
    if (domTarget != null && !domTarget.matches("#windows-button *"))
      setOpen(false);
  }, [domTarget]);

  const handleFoldersMinimized = useCallback(
    (id, isSelected) => {
      setWindowsActive(
        windowsActive.map((folder) => {
          if (folder.id != id) return folder;
          folder.minimized = isSelected;
          return folder;
        })
      );
    },
    [windowsActive]
  );

  const handleAnchor = useCallback((value) => window.open(value, "_blank"), []);

  return (
    <div className={s["left-side-container"]}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={s["windows-button"]}
        id="windows-button"
      >
        <Svg icon="windows" className={s["toolbar-windows-svg"]} />
        <Menu options={options} onSelect={onSelect} open={open} s={s} />
      </div>
      <div
        className={`${s["toolbar-input-container"]} ${
          focus ? s["toolbar-input-container-focus"] : ""
        }`.trim()}
      >
        <Svg
          icon="search"
          className={`${s["toolbar-search-icon"]} ${
            focus ? s["toolbar-search-icon-focus"] : ""
          }`.trim()}
        />
        <input
          value={search}
          onChange={handleSearch}
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setFocus(false);
            setSearch("");
          }}
          placeholder={lenguage == "spanish" ? "Buscar" : "Search"}
          className={`${s["toolbar-input"]} ${
            focus ? s["toolbar-input-focus"] : ""
          }`.trim()}
        />
      </div>
      <div className={s["container-items"]}>
        <div
          className={s["item-container"]}
          onClick={() =>
            handleAnchor(
              "https://mail.google.com/mail/u/0/?fs=1&to=agusromero0815@gmail.com&tf=cm"
            )
          }
        >
          <Svg className={s["item"]} icon="gmail" />
        </div>
        <div
          className={s["item-container"]}
          onClick={() => handleAnchor("https://github.com/nitsugaro")}
        >
          <Svg className={s["item"]} icon="github" />
        </div>
        <div
          className={s["item-container"]}
          onClick={() =>
            handleAnchor(
              "https://www.linkedin.com/in/agust%C3%ADn-romero-33919b24b/"
            )
          }
        >
          <Svg className={s["item"]} icon="linkedin" />
        </div>
        <div
          className={s["item-container"]}
          onClick={() => handleAnchor("https://walink.co/ab523e")}
        >
          <Svg className={s["item"]} icon="whatsapp" />
        </div>

        {windowsActive.map(({ icon, id, minimized }) => (
          <div
            className={`${s["item-container"]} ${s["item-active"]} ${
              windowSelected === id ? s["item-selected"] : ""
            }`.trim()}
            key={id}
            onClick={() => {
              const isSelected = id === windowSelected && !minimized;
              handleFoldersMinimized(id, isSelected);
              setWindowSelected(isSelected ? null : id);
            }}
          >
            <Svg className={s["item"]} icon={icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
