'use client'
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: var(--max-container-width);
  margin: 0 auto;
  overflow: visible;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
`;


export const Seprator = styled.div`
    height: 1px;
    background: var(--seprator-color-a01);
    position: relative;
    &.absolute{
        left: 50%;
        max-width: var(--max-container-width);
        position: absolute;
        transform: translateX(-50%);
        /* width: calc(100% - var(--container-margin-x)*2); */
    }
    &::before{
        bottom: 0;
        content: "";
        height: inherit;
        position: absolute;
        width: 300px;
        right: 100%;
        background: linear-gradient(-90deg, var(--seprator-color-a01) 0%, var(--seprator-color-a0) 100%);
    }
    &::after{
        bottom: 0;
        content: "";
        height: inherit;
        position: absolute;
        width: 300px;
        left: 100%;
        background: linear-gradient(90deg, var(--seprator-color-a01) 0%, var(--seprator-color-a0) 100%);
    }
    em{
        
        &::before{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -4px;
            width: 9px;
            left: -4px;
            z-index: 999;
        }
        &::after{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -4px;
            width: 9px;
            right: -4px;
            z-index: 999;
        }
    }
`;

export const BoxEm = styled.em`

    &.left-right{
        &::before{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -5px;
            width: 9px;
            left: -4px;
            z-index: 999;
        }
        &::after{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -5px;
            width: 9px;
            right: -4px;
            z-index: 999;
        }
    }
    &.right{
        &::after{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -5px;
            width: 9px;
            right: -4px;
            z-index: 999;
        }
    }
    &.right-bottom{
        &::after{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            bottom: -4px;
            width: 9px;
            right: -5px;
            z-index: 999;
        }
    }
    &.left-bottom{
        &::before{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            bottom: -4px;
            width: 9px;
            left: -5px;
            z-index: 999;
        }
    }
    &.left-right-bottom{
        &::after{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            bottom: -4px;
            width: 9px;
            right: -4px;
            z-index: 999;
        }
        &::before{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            bottom: -4px;
            width: 9px;
            left: -5px;
            z-index: 999;
        }
    }
    &.left{
        &::before{
            background: var(--seprator-color-a04);
            content: "";
            height: 9px;
            -webkit-mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            mask-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA5IDknPjxnIGZpbGw9JyMyMTIxMjEnPjxwYXRoIGQ9J000IDBoMXY5SDR6Jy8+PHBhdGggZD0nTTkgNHYxSDBWNHonLz48L2c+PC9zdmc+);
            position: absolute;
            top: -5px;
            width: 9px;
            left: -4px;
            z-index: 999;
        }
    }
`;

export const BoxSeprator = styled.div`
    height: 1px;
    background: var(--seprator-color-a01);
    position: relative;
    &.absolute{
        left: 50%;
        width: 100%;
        position: absolute;
        transform: translateX(-50%);
        bottom: 0;
        /* width: calc(100% - var(--container-margin-x)*2); */
    }
    &.left{
        &::before{
        bottom: 0;
        content: "";
        height: inherit;
        position: absolute;
        width: 300px;
        right: 100%;
        background: linear-gradient(-90deg, var(--seprator-color-a01) 0%, var(--seprator-color-a0) 100%);
        }
    }
    &.right{
        &::after{
            bottom: 0;
            content: "";
            height: inherit;
            position: absolute;
            width: 300px;
            left: 100%;
            background: linear-gradient(90deg, var(--seprator-color-a01) 0%, var(--seprator-color-a0) 100%);
        }
    }
`;



export const LinkButton = styled.a`
  padding: 12px 24px;
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.1px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  @media screen and (max-width: 768px) {
     min-width: 220px;
     justify-content: center;
  }
  &.blue-btn{
    background: var(--blue);
    color: var(--white);
    box-shadow: 0px 0px 0px 1px #264DDB, 0px 1px 3px rgba(20, 52, 135, 0.6), inset 0px -3px 0.4px #234DE2;
    &:hover{
        opacity: 0.8;
        box-shadow: 0px 0px 0px 1px #264DDB, 0px 1px 3px rgba(20, 52, 135, 0.6), inset 0px -1px 0.4px #234DE2;
    }
  }
  &.white-btn{
      background: var(--white);
      color: var(--main-black);
      box-shadow: 0px 0px 0px 1px #EBEBEB, 0px 1px 3px rgba(143, 143, 143, 0.3), inset 0px -3px 0.4px rgba(62, 62, 62, 0.05);
      &:hover{
        opacity: 0.8;
        box-shadow: 0px 0px 0px 1px #EBEBEB, 0px 1px 3px rgba(143, 143, 143, 0.3), inset 0px -1px 0.4px rgba(62, 62, 62, 0.05);
      }
    }
`;

export const BoxButton = styled.a`
  padding: 8px 16px;
  line-height: 14px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--white);
  color: var(--main-black);
  box-shadow: 0px 0px 0px 1px #EBEBEB, 0px 1px 3px rgba(143, 143, 143, 0.3), inset 0px -2px 0.4px rgba(62, 62, 62, 0.04);
  &:hover{
      opacity: 0.8;
      box-shadow: 0px 0px 0px 1px #EBEBEB, 0px 1px 3px rgba(143, 143, 143, 0.3), inset 0px 0px 0.4px rgba(62, 62, 62, 0.04);
    }
` 