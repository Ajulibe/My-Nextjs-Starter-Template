import "../styles/globals.css"
import type { AppProps } from "next/app"
import { MyGlobalStyle } from "@styles/globalStyles"
import { ThemeProvider } from "styled-components"
import { useColorScheme } from "@hooks/useColorScheme"

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, themeToggler } = useColorScheme()

  return (
    <>
      <ThemeProvider theme={theme}>
        <MyGlobalStyle />
        <button onClick={themeToggler}>Click to Toogle</button>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
