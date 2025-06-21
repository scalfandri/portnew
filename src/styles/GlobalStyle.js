import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #fff;
    --fg: #222;
    --accent: #0066ff;
    --border: #eee;
    --font-main: 'Inter', system-ui, sans-serif;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    background: var(--bg);
    color: var(--fg);
    font-family: var(--font-main);
    font-size: 18px;
    line-height: 1.7;
    min-height: 100vh;
    letter-spacing: 0.01em;
  }
  a {
    color: var(--accent);
    text-decoration: none;
    transition: opacity 0.2s;
  }
  a:hover {
    opacity: 0.7;
  }
`;

export default GlobalStyle;