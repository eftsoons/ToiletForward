import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  postEvent,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
} from "@telegram-apps/sdk-react";
import { AppRoot, List, Tabbar } from "@telegram-apps/telegram-ui";
import { useEffect, useState } from "react";

import Icons from "./components/icon";
import { Main, Constructor, Cabinet, Info } from "./panels";

function App() {
  const [panels, setpanels] = useState("main");

  const list = [
    { name: "Туалет PRO MAX", img: "toilet3.png" },
    { name: "Туалет PRO MAX2", img: "toilet4.png" },
    { name: "Туалет PRO MAX3", img: "toilet5.png" },
    { name: "Туалет PRO MAX4", img: "toilet7.png" },
    { name: "Туалет PRO MAX5", img: "toilet6.png" },
  ];

  const [typetoilet, settypetoilet] = useState(0);

  const lp = useLaunchParams();
  const miniApp = useMiniApp();
  const themeParams = useThemeParams();
  const viewport = useViewport();

  useEffect(() => {
    miniApp.ready();
    postEvent("web_app_expand");

    miniApp.setHeaderColor("bg_color");
  }, []);

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  return (
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <List>
        {panels == "main" ? (
          <Main />
        ) : panels == "constructor" ? (
          <Constructor
            list={list}
            typetoilet={typetoilet}
            settypetoilet={settypetoilet}
            setpanels={setpanels}
          />
        ) : panels == "cabinet" ? (
          <Cabinet />
        ) : (
          <Info list={list} typetoilet={typetoilet} setpanels={setpanels} />
        )}
      </List>

      <Tabbar
        style={{
          zIndex: "1",
          paddingBottom: ["macos", "ios"].includes(lp.platform)
            ? "1.5rem"
            : "0",
        }}
      >
        <Tabbar.Item
          id="main"
          text={"Главная"}
          selected={panels == "main"}
          onClick={() => setpanels("main")}
        >
          {Icons("main")}
        </Tabbar.Item>
        <Tabbar.Item
          id="call"
          text={"Конструктор"}
          selected={panels == "constructor"}
          onClick={() => setpanels("constructor")}
        >
          {Icons("constructor")}
        </Tabbar.Item>
        <Tabbar.Item
          id="call"
          text={"Кабинет"}
          selected={panels == "cabinet"}
          onClick={() => setpanels("cabinet")}
        >
          {Icons("cabinet")}
        </Tabbar.Item>
      </Tabbar>
    </AppRoot>
  );
}

export default App;
