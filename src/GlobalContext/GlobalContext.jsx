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
  const [foldersActive, setFoldersActive] = useState([]);
  const [folderSelected, setFolderSelected] = useState("");

  const addFolderActive = useCallback(
    (folderActive) =>
      setFoldersActive((prevFolders) => [...prevFolders, folderActive]),
    []
  );

  const removeFolderActive = useCallback(
    (id) =>
      setFoldersActive((prevFolders) =>
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
        foldersActive,
        setFoldersActive,
        addFolderActive,
        removeFolderActive,
        setFolderSelected,
        folderSelected,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
