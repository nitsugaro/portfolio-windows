import s from "./ToolBar.module.css";
import CurrentDate from "../Date/CurrentDate";
import LeftSideToolBar from "../LeftSideToolBar/LeftSideToolBar";

export default function ToolBar() {
  return (
    <div className={s["toolbar-container"]}>
      <LeftSideToolBar />
      <CurrentDate />
    </div>
  );
}
