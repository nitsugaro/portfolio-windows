import { useState, useEffect } from "react";

export default function useMove(container, target, initPosition) {
  const [mousePressed, setMousePressed] = useState(false);
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
      if (prevMove) {
        const difX = e.clientX - prevMove.x;
        const difY = e.clientY - prevMove.y;
        const { top, left } = currentTarget.getBoundingClientRect();
        const x = left + difX + "px";
        const y = top + difY + "px";

        currentTarget.style.top = y;
        currentTarget.style.left = x;
      }

      prevMove = { x: e.clientX, y: e.clientY };
    };

    currentContainer.addEventListener("mousemove", cbMouseMove);

    return () => currentContainer.removeEventListener("mousemove", cbMouseMove);
  }, [mousePressed, actualPosition, currentContainer, currentTarget]);

  return {
    setMousePressed,
    setActualPosition,
    mousePressed,
    actualPosition,
  };
}
