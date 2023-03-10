import { useContext, useEffect, useState } from "react";
import s from "./BlocType.module.css";
import { MyContext } from "../../GlobalContext/GlobalContext";

export default function BlocType({ text }) {
  const { lenguage } = useContext(MyContext).global;
  const [valueText, setValueText] = useState(text[lenguage]);

  useEffect(() => setValueText(text[lenguage]), [lenguage]);

  return (
    <textarea
      className={s["bloc-container"]}
      value={valueText}
      onChange={(e) => setValueText(e.target.value)}
      spellCheck={false}
    ></textarea>
  );
}
