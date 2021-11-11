import { DefaultTheme } from "styled-components"

const myLightTheme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    main: "cyan",
    secondary: "magenta",
    background: "white",
    text: "black",
  },
}
const myDarkTheme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    main: "cyan",
    secondary: "magenta",
    background: "black",
    text: "white",
  },
}

const ThemeSwitcher = (colorMode: string) => {
  return colorMode === "light" ? myLightTheme : myDarkTheme
}

export { ThemeSwitcher }
