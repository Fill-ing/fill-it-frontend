import { ThemeProvider } from "@emotion/react";
import "./styles/global.css";
import GlobalStyle from "./styles/globalStyles";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h2>app</h2>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
