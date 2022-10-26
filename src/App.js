import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
// import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Menubar from "./scenes/global/Menubar";
// import { Route } from "react-router-dom";
// import Updates from "./scenes/updates";
// import General from "./scenes/general";
// import Explore from "./scenes/explore";
// import Storefront from "./scenes/storefront";
// import Teams from "./scenes/teams";
// import Marketing from "./scenes/marketing";
// import SupplyDock from "./scenes/supplydock";
// import Docs from "./scenes/docs";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Box display="flex">
            <Menubar />
            <main className="content">
              <Topbar />
            </main>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
