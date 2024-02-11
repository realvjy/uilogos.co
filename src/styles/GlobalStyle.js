'use client'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --selection-sky: #00FFFF;
  --selection-pink: #f81ce5;
  /* Variable for size */
  --max-container-width: 1000px;
  --grey-bg: #FBFBFF;
  --bg-gradient: linear-gradient(180deg, #EAE3FF 0%, rgba(247,245,251,0)20%),#FBFBFF;
  --white: #ffffff;
  --seprator-color: rgba(27,32,35,1);
  --seprator-color-a01: rgba(27,32,35,0.04);
  --seprator-color-a04: rgba(27,32,35,0.2);
  --seprator-color-a0: rgba(27,32,35,0.0);
  --box-hover:linear-gradient(180deg, rgba(238, 170, 255, 0.1) 0%, rgba(247,245,251,0)50%), rgba(192,201,220,0.05);
  
  --main-black: #272727;
  --main-black-a2: rgba(39,39,39, 0.25);
  --blue: #3962F5;
}
::selection {
  background: var(--selection-pink);
  color: var(--white);
}

*, :after, :before  {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


.border-left-right{
    &::before{
      content: "";
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
      left: 0;
      background: var(--seprator-color-a01);
    }
    &::after{
      content: "";
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
      right: 0;
      background: var(--seprator-color-a01);
    }
  }
  .border-right{
    &::after{
      content: "";
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
      right: 0;
      background: var(--seprator-color-a01);
    }
  }
  .border-left{
    &::before{
      content: "";
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
      left: 0;
      background: var(--seprator-color-a01);
    }
  }
  

  
`;
export default GlobalStyle;