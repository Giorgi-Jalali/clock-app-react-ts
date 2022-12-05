import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";

import Main from "./components/Main";

function App() {
  const [nightMode, setNightMode] = useState<boolean>(false);

  useEffect(() => {
    const recentHour = new Date().getHours();
    const setMode = () => {
      if (recentHour > 18 || recentHour < 5) {
        setNightMode(true);
      }
    };
    setMode();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Main nightMode={nightMode} />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: #F2F2F2;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    color: white;
    font-weight: 400;
  }
`;
