import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #f6f3ee;
    --bg-soft: #fbf9f6;
    --surface: rgba(255, 255, 255, 0.58);
    --surface-strong: rgba(255, 255, 255, 0.78);
    --border: rgba(255, 255, 255, 0.55);
    --text: #1f1f1c;
    --muted: #6c6a66;
    --accent: #c6a77b;
    --accent-soft: #e6d7c3;
    --shadow: 0 10px 30px rgba(58, 49, 39, 0.08);
    --glow: 0 0 40px rgba(198, 167, 123, 0.18);
    --radius-lg: 24px;
    --radius-xl: 32px;
    --container: 1280px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at top left, rgba(230, 215, 195, 0.55), transparent 32%),
      radial-gradient(circle at top right, rgba(255, 255, 255, 0.95), transparent 26%),
      linear-gradient(180deg, #f8f5f0 0%, #f2eee8 100%);
    color: var(--text);
    min-height: 100vh;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  #root {
    min-height: 100vh;
  }
`;
