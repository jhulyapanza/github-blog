import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router";
import {defaultTheme} from "./styles/theme/defaultTheme";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./styles/global";


export function App() {
  return (
    <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles/>
            <Router/>
        </ThemeProvider>
    </BrowserRouter>
  )
}
