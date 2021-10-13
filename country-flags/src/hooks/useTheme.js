import { useEffect, useState } from "react";

const LIGHT = "light",
  DARK = "dark";

const themes = {
  [DARK]: {
    background: "hsl(207, 26%, 17%)",
    elements: "hsl(209, 23%, 22%)",
    text: "hsl(0, 0%, 100%)",
    box_shadow: "0px 0px 8px 0px rgb(0 0 0 / 50%) ",
  },

  [LIGHT]: {
    background: "hsl(0, 0%, 98%)",
    elements: "hsl(0, 0%, 100%)",
    text: "hsl(200, 15%, 8%)",
    box_shadow: "0px 0px 10px 0px rgb(59 59 59 / 8%)",
  },
};

export function useTheme() {
  const [theme, setTheme] = useState(LIGHT);

  const toggleTheme = () => {
    if (theme === LIGHT) {
      setTheme(DARK);
      window.localStorage.setItem(DARK, DARK);
    } else {
      setTheme(LIGHT);
      window.localStorage.setItem(DARK, LIGHT);
    }
  };

  useEffect(() => {
    const theme = window.localStorage.getItem(DARK);
    if (theme !== null) {
      setTheme(theme);
    } else {
      window.localStorage.setItem(DARK, LIGHT);
    }
  }, []);

  return [themes[theme], toggleTheme];
}
