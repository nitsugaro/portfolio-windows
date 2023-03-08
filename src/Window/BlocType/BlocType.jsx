import { useContext } from "react";
import s from "./BlocType.module.css";
import { MyContext } from "../../GlobalContext/GlobalContext";

export default function BlocType({ text }) {
  const { lenguage } = useContext(MyContext).global;

  return (
    <textarea
      className={s["bloc-container"]}
      defaultValue={text[lenguage]}
    ></textarea>
  );
}
