"use client";
import styled from "styled-components";
import { DownloadIcon, FigmaIcon, GithubIcon, TwitterIcon, UILogosHeart, CopyIcon } from "./icons";
import React, { useState, useEffect } from 'react';

import { Container, Seprator, BoxEm, BoxSeprator, BoxButton } from "@/styles/ReuseableStyle";

function getNonCachedImageUrl(url) {
  return `${url}?i=${new Date().getTime()}`;
}


export default function LogoBox(props) {

  const [infoText, setInfoText] = useState('CLICK TO COPY');
  const [isCopy, setIsCopy] = useState(false);
  const colorType = props.data.style === "black" ? "-black" : "";
  const imgUrl = "https://pub-e63b17b4d990438a83af58c15949f8a2.r2.dev"
  const svgSrc = `${imgUrl}/${props.data.type}/${props.data.name}${colorType}.svg`;
  const pngSrc = `${imgUrl}/${props.data.type}/${props.data.name}${colorType}.png`;
  // const pngSrc = `${imgUrl}/logos/${props.data.type}/${props.data.name}${colorType}.png`;

  const handleCopySvg = () => {
    fetch(getNonCachedImageUrl(svgSrc))
      .then(response => response.text())
      .then(svgCode => {
        navigator.clipboard.writeText(svgCode)
          .then(() => {
            setInfoText('SVG COPIED');
            setIsCopy(true);
            setTimeout(() => {
              setInfoText('CLICK TO COPY');
              setIsCopy(false);
            }, 1400);
          })
          .catch((error) => {
            console.error('Unable to copy SVG code to clipboard:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching SVG:', error);
      });
  };

  const handleCopyPng = async () => {
    try {
      const response = await fetch(getNonCachedImageUrl(pngSrc));
      const blob = await response.blob();

      const item = new ClipboardItem({ 'image/png': blob });
      await navigator.clipboard.write([item]);

      setInfoText('PNG COPIED');
      setIsCopy(true);
      setTimeout(() => {
        setInfoText('CLICK TO COPY');
        setIsCopy(false);
      }, 1400);
    } catch (error) {
      console.error('Unable to copy image to clipboard:', error);
    }
  };

  return (
    <LogoSection>
      <LogoItem className={props.isLastInRow ? "" : "border-right"}>
        <LogoWrap>
          <Content>
            <img src={pngSrc} />
          </Content>
          <Overlay>
            <h5 className={isCopy ? "copied" : ""}>{infoText}</h5>
            <DownloadGroup className="copy-btn">
              <BoxButton onClick={handleCopySvg}><CopyIcon height={16} width={16} /> SVG</BoxButton>
              <BoxButton onClick={handleCopyPng}><CopyIcon height={16} width={16} /> PNG</BoxButton>
            </DownloadGroup>
          </Overlay>
        </LogoWrap>
        <BoxSeprator className={props.isFirstInRow ? "absolute left" : props.isLastInRow ? "absolute right" : "absolute"} />
        <BoxEm className={props.isFirstInRow ? "left-right" : "right"} />
        {props.isLastRow && <BoxEm className={props.isFirstInRow ? "left-right-bottom" : "right-bottom"} />}
      </LogoItem>
    </LogoSection>
  )
}

const LogoSection = styled.div`

`


const LogoItem = styled.div`
  position: relative;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* Prevent shrinking */
  transition: all 0.3s ease;
  &:hover{
    background: var(--box-hover);
  }
  @media screen and (max-width: 768px) {
    min-height: 140px;
  }
`

const LogoWrap = styled.div`
  width: 100%;
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  position: relative;
  padding: 12px;
  width: 100%;
  display: flex;
  min-height: inherit;
  align-items: center;
  
  justify-content: center;
  img{
    height: 36px;
    @media screen and (max-width: 768px) {
      height: 30px;
    }
  }
`

const DownloadGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  h5{
    font-size: 12px;
    letter-spacing: 1.8px;
    font-weight: 500;
    color: var(--main-black-a2);
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
    transition: all 0.3s ease;
    &.copied{
      color: var(--blue);
    }
  }
  .copy-btn{
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.3s ease;
  }
  &:hover{
    h5{
      transform: translateY(0px);
      opacity: 1;
      &.copied{
        color: var(--blue);
        transform: translateY(0px) scale(1.1);
      }
    }
    .copy-btn{
      transform: translateY(0px);
      opacity: 1;
    }
  }
`