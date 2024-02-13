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
  --text-black2: #626262;
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
  
  .Collapsible{
    font-size: 22px;
    font-weight: 500;
    padding: 20px 0;
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px; /* Set the height of the bottom border */
      background: radial-gradient(50% 50% at 50% 50%, #EBEBEB 0%, rgba(235, 235, 235, 0) 100%);
    }
    &:last-child{
      &::after{
        background: none;
        height: 0;
      }
    }
    .details{
      ul{
        display: flex;
        flex-direction: column;
        li{
          font-size: 16px;
          margin: 8px 0;
          font-weight: 400;
          color: var(--text-black2);
        }
      }
    }
    p{  
        margin-top: 24px;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
        opacity: 0.6;
        color: var(--text-black2);
        span{
          color: var(--white);
          opacity: 0.6;
        }
        @media screen and (max-width: 768px) {
          width: auto;
          font-size: 16px;
        }
    }
    .collapsible-title{
      width: 100%;
      display: flex;
      justify-content: space-between;
      transition: all 0.3s ease;
      span{
        font-size: 20px;
        cursor: pointer;
        font-weight: 500;
        color: var(--text-black2);
        @media screen and (max-width: 768px) {
          width: auto;
          font-size: 18px;
        }
      }
    }
    .Collapsible__trigger{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        .plus-icon{
          color: var(--blue);
          transition: all 0.3s ease;
          transform: scale(0.8);
        }
        &.is-open{
            transition: all 0.3s ease;
            .plus-icon{
                transform: scale(0.8) rotateZ(45deg); 
            }
        }
    }
}
  
`;
export default GlobalStyle;