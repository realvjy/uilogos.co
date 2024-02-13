"use client";
import styled from "styled-components";
import { DownloadIcon, FigmaIcon, GithubIcon, TwitterIcon, UILogosHeart, CopyIcon } from "./icons";

import { Container, Seprator, BoxEm, BoxSeprator, BoxButton } from "@/styles/ReuseableStyle";
export default function LogoBox(props) {

  console.log(props);
  const someButton = () => {
    console.log('Button clicked');
  }
  const colorType = props.data.style === "black" ? "-black" : "";
  return (
    <LogoSection>
      <LogoItem className={props.isLastInRow ? "" : "border-right"}>
        <LogoWrap>
          <Content>
            <img src={"logos/" + `${props.data.type}` + "/" + `${props.data.name}` + colorType + ".png"} />
          </Content>
          <Overlay>
            <h5>CLICK TO COPY</h5>
            <DownloadGroup className="copy-btn">
              <BoxButton onClick={someButton}><CopyIcon height={16} width={16} /> SVG</BoxButton>
              <BoxButton><CopyIcon height={16} width={16} /> PNG</BoxButton>
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
    height: 40px;
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
    transform: translateY(-20px);
    opacity: 0;
    transition: all 0.3s ease;
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
    }
    .copy-btn{
      transform: translateY(0px);
      opacity: 1;
    }
  }
`