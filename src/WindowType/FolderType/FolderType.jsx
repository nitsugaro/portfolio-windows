import s from "./FolderType.module.css";
import { subFolders } from "../../Data/files";
import Svg from "../../SVG/Svg";
import { useCallback, useContext, useState } from "react";
import { MyContext } from "../../GlobalContext/GlobalContext";

export default function FolderType({ name }) {
  const { addWindowActive } = useContext(MyContext);
  const [chain, setChain] = useState([subFolders[name]]);
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

      addWindowActive({ ...item, id: crypto.randomUUID(), minimized: false });
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
