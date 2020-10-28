import { createGlobalStyle } from "styled-components";
import { mediaQueries } from "./mediaQueries";
export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    background-color: #fff;
    position: relative;
    overflow-x: hidden;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }

p,
a,
ul,
li {
  text-decoration: none;
  list-style: none;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  margin-top: 30px;
    line-height: 1.7;
    max-width: 42em;
    ${mediaQueries("md")`
      font-size: 17px;
    `}
}
a {
  cursor: pointer;
  margin-top: 0px;
}

img {
  width: 100%;
}



`;
