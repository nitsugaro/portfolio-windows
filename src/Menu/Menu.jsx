import { useCallback } from "react";
import Svg from "../SVG/Svg";

export default function Menu({ options, onSelect, open, s }) {
  const handleSelect = useCallback((value) => onSelect(value), []);

  return (
    <div className={`${s["menu-container"]} ${open ? s.active : ""}`.trim()}>
      {open ? (
        options.map(({ value, name, icon }, i) => (
          <div
            onMouseDown={() => handleSelect(value)}
            className={`${s["menu-option"]}`}
            key={i}
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
