import {
  Suspense,
  lazy,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import Loading from "./Loading/Loading";
import { MyContext } from "./GlobalContext/GlobalContext";
import Off from "./Off/Off";
import License from "./License/License";

const Home = lazy(() => import("./Home/Home"));
const ToolBar = lazy(() => import("./ToolBar/ToolBar"));

function App() {
  const appRef = useRef(null);
  const { global, setGlobal } = useContext(MyContext);

  useEffect(() => {
    document.addEventListener("mouseleave", () =>
      setGlobal((prev) => ({ ...prev, isFullScreen: false }))
    );

    window.addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);

  return (
    <div className="app" ref={appRef}>
      {global.power && (
        <Suspense fallback={<Loading showLoading={true} />}>
          <Loading showLoading={false} />
          <Home />
          <ToolBar />
        </Suspense>
      )}
      <Off />
      {!global.isFullScreen && (
        <div
          onClick={() => {
            setGlobal((prev) => ({ ...prev, isFullScreen: true }));
            document.body.requestFullscreen();
          }}
          className="fullscreen-off"
        ></div>
      )}
    </div>
  );
}

export default App;
