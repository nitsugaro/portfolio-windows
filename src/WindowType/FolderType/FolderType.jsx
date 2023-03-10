import s from "./FolderType.module.css";
import Svg from "../../SVG/Svg";
import { useCallback, useContext, useState } from "react";
import { MyContext } from "../../GlobalContext/GlobalContext";
import { v4 as uuidv4 } from "uuid";

export default function FolderType({ folder }) {
  const { addWindowActive } = useContext(MyContext);
  const [chain, setChain] = useState([folder.current]);
  const [index, setIndex] = useState(0);

  const handleDoubleClick = useCallback(
    (item) => {
      if (item.type == "folder") {
        setChain((prevChain) => [
          ...prevChain.slice(0, index + 1),
          item.current,
        ]);
        setIndex(index + 1);
        return;
      }

      if (item.type == "anchor") {
        window.open(item.url, "_blank");
        return;
      }

      addWindowActive({ ...item, id: uuidv4(), minimized: false });
    },
    [chain, index]
  );

  const handleAddIndex = useCallback(
    () =>
      setIndex((prevIndex) =>
        prevIndex < chain.length - 1 ? prevIndex + 1 : prevIndex
      ),
    [chain]
  );

  const handleSubstractIndex = useCallback(
    () => setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex)),
    []
  );

  return (
    <div className={s["folder-container"]}>
      <div className={s["arrows"]}>
        <div onClick={handleSubstractIndex}>
          <Svg icon="arrow-left" className={s["arrow"]} />
        </div>
        <div onClick={handleAddIndex}>
          <Svg icon="arrow-right" className={s["arrow"]} />
        </div>
      </div>
      {chain[index].map((item, i) => (
        <div
          key={i}
          className={s["item-container"]}
          onDoubleClick={() => handleDoubleClick(item)}
          onTouchStart={() => handleDoubleClick(item)}
        >
          <div className={s["item-left"]}>
            <Svg icon={item.icon} className={s["item-icon"]} />
            <h4 className={s["item-title"]}>{item.name}</h4>
          </div>
          <p className={s["item-date"]}>{item.date}</p>
        </div>
      ))}
    </div>
  );
}
