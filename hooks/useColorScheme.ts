import { useState, useEffect } from "react";
import { ThemeSwitcher } from "@styles/theme";

//this should only be used in _app.ts
export const useColorScheme = () => {
  const [selectedColorMode, setSelectedColorMode] = useState<string>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("akas-theme");
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    localTheme
      ? setSelectedColorMode(localTheme)
      : setSelectedColorMode(isDarkMode ? "dark" : "light");
  }, []);

  const setMode = (mode: string, fn: (mode: string) => void) => {
    window.localStorage.setItem("akas-theme", mode);
    fn(mode);
  };

  const themeToggler = () => {
    selectedColorMode === "light"
      ? setMode("dark", setSelectedColorMode)
      : setMode("light", setSelectedColorMode);
  };

  const theme = ThemeSwitcher(selectedColorMode);

  return { theme, themeToggler };
};
