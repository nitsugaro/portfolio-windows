import { useContext, useEffect, useState } from "react";
import s from "./IframeType.module.css";
import { MyContext } from "../../GlobalContext/GlobalContext";

export default function IframeType({ src }) {
  const { domTarget } = useContext(MyContext).global;
  const [isActive, setIsActive] = useState(false);
  const [id] = useState("-" + crypto.randomUUID());

  useEffect(() => {
    setIsActive(domTarget.matches(`#${id}`));
  }, [domTarget]);

  return (
    <div id={id} className={s["container-iframe"]}>
      <iframe
        style={{
          zIndex: isActive ? 1 : -1,
        }}
        src={src}
        className={s["chrome-iframe"]}
      />
    </div>
  );
}
