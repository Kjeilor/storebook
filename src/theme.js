import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

//Color Design Tockens

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        tealAccent: {
          100: "#d4eee7",
          200: "#a9ddcf",
          300: "#7fcdb7",
          400: "#54bc9f",
          500: "#29ab87",
          600: "#21896c",
          700: "#196751",
          800: "#104436",
          900: "#08221b",
        },

        primary: {
          100: "#d4d4d4",
          200: "#a8a8a8",
          300: "#7d7d7d",
          400: "#515151",
          500: "#262626",
          600: "#1e1e1e",
          700: "#171717",
          800: "#0f0f0f",
          900: "#080808",
        },

        white: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },

        redAccent: {
          100: "#ffcccc",
          200: "#ff9999",
          300: "#ff6666",
          400: "#ff3333",
          500: "#ff0000",
          600: "#cc0000",
          700: "#990000",
          800: "#660000",
          900: "#330000",
        },

        blueAccent: {
          100: "#ccccff",
          200: "#9999ff",
          300: "#6666ff",
          400: "#3333ff",
          500: "#0000ff",
          600: "#0000cc",
          700: "#000099",
          800: "#000066",
          900: "#000033",
        },

        greenAccent: {
          100: "#ccffcc",
          200: "#99ff99",
          300: "#66ff66",
          400: "#33ff33",
          500: "#00ff00",
          600: "#00cc00",
          700: "#009900",
          800: "#006600",
          900: "#003300",
        },
      }
    : {
        tealAccent: {
          100: "#08221b",
          200: "#104436",
          300: "#196751",
          400: "#21896c",
          500: "#29ab87",
          600: "#54bc9f",
          700: "#7fcdb7",
          800: "#a9ddcf",
          900: "#d4eee7",
        },

        primary: {
          100: "#080808",
          200: "#0f0f0f",
          300: "#171717",
          400: "#1e1e1e",
          500: "#262626",
          600: "#515151",
          700: "#7d7d7d",
          800: "#a8a8a8",
          900: "#d4d4d4",
        },

        white: {
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#cccccc",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
        },

        redAccent: {
          100: "#330000",
          200: "#660000",
          300: "#990000",
          400: "#cc0000",
          500: "#ff0000",
          600: "#ff3333",
          700: "#ff6666",
          800: "#ff9999",
          900: "#ffcccc",
        },

        blueAccent: {
          100: "#000033",
          200: "#000066",
          300: "#000099",
          400: "#0000cc",
          500: "#0000ff",
          600: "#3333ff",
          700: "#6666ff",
          800: "#9999ff",
          900: "#ccccff",
        },

        greenAccent: {
          100: "#003300",
          200: "#006600",
          300: "#009900",
          400: "#00cc00",
          500: "#00ff00",
          600: "#33ff33",
          700: "#66ff66",
          800: "#99ff99",
          900: "#ccffcc",
        },
      }),
});

//mui theme settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.tealAccent[500],
            },
            neutral: {
              dark: colors.white[700],
              main: colors.white[500],
              light: colors.white[500],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.tealAccent[500],
            },
            neutral: {
              dark: colors.white[700],
              main: colors.white[500],
              light: colors.white[500],
            },
            background: {
              default: "#fcfcfc,",
            },
          }),
    },
    typography: {
      fontFamily: ["Arial", "Helvetica", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Arial", "Helvetica", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Arial", "Helvetica", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Arial", "Helvetica", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Arial", "Helvetica", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Arial", "Helvetica", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Arial", "Helvetica", "sans-serif"].join(","),
        fontSize: 14,
      }
    },
  };
};

// Context for color mode

export const ColorModeContext  = createContext({
    toggleColorMode: () => {}
});

export  const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode : () =>
            setMode((prev) => (prev === 'light' ? 'dark' : 'light' )),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}