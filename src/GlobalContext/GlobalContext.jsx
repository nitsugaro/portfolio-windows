import { createContext, useEffect, useState, useCallback } from "react";

export const MyContext = createContext();

export function MyProvider({ children }) {
  const [global, setGlobal] = useState({
    domTarget: null,
    power: true,
    lenguage: "english",
    window: { width: window.innerWidth, height: window.innerHeight },
  });
  const [homeBounds, setHomeBounds] = useState({
    width: window.innerWidth,
    height: window.innerHeight - 45,
  });
  const [folders, setFolders] = useState([]);
  const [windowsActive, setWindowsActive] = useState([]);
  const [windowSelected, setWindowSelected] = useState("");

  const addWindowActive = useCallback((folderActive) => {
    setWindowsActive((prevFolders) => [...prevFolders, folderActive]),
      setWindowSelected(folderActive.id);
  }, []);

  const removeWindowActive = useCallback(
    (id) =>
      setWindowsActive((prevFolders) =>
        prevFolders.filter((folder) => folder.id != id)
      ),
    []
  );

  useEffect(() => {
    const cbPress = ({ target }) =>
      setGlobal((prev) => ({ ...prev, domTarget: target }));

    document.addEventListener("mousedown", cbPress);

    const cbResize = () => {
      setGlobal((prev) => ({
        ...prev,
        window: { width: window.innerWidth, height: window.innerHeight },
      }));

      setHomeBounds({
        width: window.innerWidth,
        height: window.innerHeight - 45,
      });
    };

    window.addEventListener("resize", cbResize);

    return () => {
      document.removeEventListener("mousedown", cbPress);
      window.removeEventListener("resize", cbResize);
    };
  }, []);

  return (
    <MyContext.Provider
      value={{
        global,
        setGlobal,
        homeBounds,
        setHomeBounds,
        folders,
        setFolders,
        windowsActive,
        setWindowsActive,
        addWindowActive,
        removeWindowActive,
        setWindowSelected,
        windowSelected,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
