import { css } from "@emotion/react";

export const global = css`
  * {
    box-sizing: border-box;
    font-family: inherit;
    font-synthesis: none;
  }
  body {
    font-family: 'Pretendard', 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif;
    background-color: #f5f5f5;
    word-break: break-all;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  html {
    scroll-behavior: smooth;
  }
  input {
    &:focus {
      border: none;
      outline: none;
    }
  }
  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    &:disabled {
      cursor: default;
    }
  }
  textarea {
    resize: none;
    &:focus {
      border: none;
      outline: none;
    }
  }

  @font-face {
  font-family: "Pretendard";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Light.woff2")
    format("woff2");
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: "Pretendard";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Regular.woff2")
    format("woff2");
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Pretendard";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Medium.woff2")
    format("woff2");
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "Pretendard";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-SemiBold.woff2")
    format("woff2");
  font-weight: 600;
  font-display: swap;
}
`;
