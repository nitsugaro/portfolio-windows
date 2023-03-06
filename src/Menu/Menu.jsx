import { useCallback } from "react";
import Svg from "../SVG/Svg";

export default function Menu({ options, onSelect, open, setOpen, s }) {
  const handleSelect = useCallback((value) => {
    setOpen(false);
    onSelect(value);
  }, []);

  return (
    <div className={`${s["menu-container"]} ${open ? s.active : ""}`.trim()}>
      {open ? (
        options.map(({ value, name, icon }) => (
          <div
            onClick={() => handleSelect(value)}
            className={`${s["menu-option"]}`}
            key={value}
          >
            <Svg icon={icon} className={s["menu-icon"]} />
            <h4 className={`${s["menu-label"]}`}>{name}</h4>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
