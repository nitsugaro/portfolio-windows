import { useContext, useEffect, useState } from "react";
import s from "./BlocType.module.css";
import { MyContext } from "../../GlobalContext/GlobalContext";

export default function BlocType({ text }) {
  const { lenguage } = useContext(MyContext).global;
  const [fontSize, setFontSize] = useState(16);
  const [valueText, setValueText] = useState(text[lenguage]);

  useEffect(() => setValueText(text[lenguage]), [lenguage]);

  return (
    <textarea
      className={s["bloc-container"]}
      value={valueText}
      onChange={(e) => setValueText(e.target.value)}
      spellCheck={false}
      style={{ fontSize: fontSize }}
      onWheel={(e) => {
        e.preventDefault();
        setFontSize((prevFontSize) => {
          if (e.deltaY > 0 && prevFontSize > 16) return prevFontSize - 8;

          if (e.deltaY < 0 && prevFontSize < 64) return prevFontSize + 8;

          return prevFontSize;
        });
      }}
    ></textarea>
  );
}
