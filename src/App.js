import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/system";
import Price from "./Components/Price";
import styled from "@emotion/styled";

function App() {
  const style = {
    mainCon: {
      backgroundColor: "hsl(204, 43%, 93%)",
      width : "100vw",
      height : "100vh"
    },
  };
  return (
    <Box sx={style.mainCon}>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </header>

      <Price />
    </Box>
  );
}

export default App;
