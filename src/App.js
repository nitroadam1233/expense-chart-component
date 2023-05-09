import { ThemeProvider, createTheme } from "@mui/material";
import Parent from "./components/Parent/Parent";
import "./App.css"

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['DM Sans', 'sans-serif'].join(","),
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Parent />
    </ThemeProvider>
  );
}

export default App;
