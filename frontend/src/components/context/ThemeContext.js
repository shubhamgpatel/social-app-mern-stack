// ThemeContext.js
// mui theme change
import { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeProviderWithToggle = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(() => ({toggleColorMode: () => setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),[]
  );

  const theme = useMemo(() =>
      createTheme({palette: {mode },  }),[mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
