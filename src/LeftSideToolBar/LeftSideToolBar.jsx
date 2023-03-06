import s from "./LeftSideToolBar.module.css";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Menu from "../Menu/Menu";
import { MyContext } from "../GlobalContext/GlobalContext";
import Svg from "../SVG/Svg";

export default function LeftSideToolBar() {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  const { domTarget, lenguage } = useContext(MyContext).global;
  const {
    foldersActive,
    setFoldersActive,
    folderSelected,
    setFolderSelected,
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

  const handleFoldersMinimized = useCallback((id) => {
    setFoldersActive((prevFolders) =>
      prevFolders.map((folder) => {
        if (folder.id != id) return folder;
        folder.minimized = false;
        return folder;
      })
    );
  }, []);

  return (
    <div className={s["left-side-container"]}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={s["windows-button"]}
        id="windows-button"
      >
        <Svg icon="windows" className={s["toolbar-windows-svg"]} />
        <Menu
          options={options}
          onSelect={onSelect}
          open={open}
          setOpen={setOpen}
          s={s}
        />
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
        <div className={s["item-container"]}>
          <Svg className={s["item"]} icon="gmail" />
        </div>
        <div className={s["item-container"]}>
          <Svg className={s["item"]} icon="github" />
        </div>
        <div className={s["item-container"]}>
          <Svg className={s["item"]} icon="linkedin" />
        </div>
        <div className={s["item-container"]}>
          <Svg className={s["item"]} icon="whatsapp" />
        </div>

        <div className={s["item-container"]}>
          <Svg className={s["item"]} icon="discord" />
        </div>
        <div className={s["item-container"]}>
          <Svg className={s["item"]} icon="skype" />
        </div>
        <div className={s["item-container"]}>
          <Svg className={s["item"]} icon="reddit" />
        </div>

        {foldersActive.map(({ icon, id, minimized }) => (
          <div
            className={`${s["item-container"]} ${s["item-active"]} ${
              folderSelected === id ? s["item-selected"] : ""
            }`.trim()}
            key={id}
            onClick={() => {
              minimized && handleFoldersMinimized(id);
              setFolderSelected(id);
            }}
          >
            <Svg className={s["item"]} icon={icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
