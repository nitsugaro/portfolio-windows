import { useState, useEffect, useContext } from "react";
import { MyContext } from "../GlobalContext/GlobalContext";

export default function useMove(container, target, initPosition) {
  const { global } = useContext(MyContext);
  const isDesktop = global.window.width > 900;
  const [mousePressed, setMousePressed] = useState(false);
  const [mouseMove, setMouseMove] = useState(false);
  const [actualPosition, setActualPosition] = useState(initPosition);

  const currentContainer = container.current;
  const currentTarget = target.current;

  let prevMove = null;

  useEffect(() => {
    if (currentContainer == null || currentTarget == null) return;

    currentTarget.style.top = initPosition.top + "px";
    currentTarget.style.left = initPosition.left + "px";
  }, [currentContainer, currentTarget]);

  useEffect(() => {
    if (currentContainer == null || currentTarget == null || !mousePressed)
      return;

    const cbMouseMove = (e) => {
      const { clientX, clientY } =
        e.type === "touchmove" ? e.targetTouches[0] : e;

      setMouseMove(true);

      if (prevMove) {
        const difX = clientX - prevMove.x;
        const difY = clientY - prevMove.y;
        const { top, left } = currentTarget.getBoundingClientRect();
        const x = left + difX + "px";
        const y = top + difY + "px";

        currentTarget.style.top = y;
        currentTarget.style.left = x;
      }

      prevMove = { x: clientX, y: clientY };
    };

    isDesktop && currentContainer.addEventListener("mousemove", cbMouseMove);
    !isDesktop && currentContainer.addEventListener("touchmove", cbMouseMove);

    return () => {
      setMouseMove(false);
      isDesktop &&
        currentContainer.removeEventListener("mousemove", cbMouseMove);
      !isDesktop &&
        currentContainer.removeEventListener("touchmove", cbMouseMove);
    };
  }, [mousePressed, actualPosition, currentContainer, currentTarget]);

  return {
    setMousePressed,
    setActualPosition,
    mousePressed,
    actualPosition,
    mouseMove,
  };
}
