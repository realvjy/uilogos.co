"use client";
import styled from "styled-components";
import { CopyIcon, TwitterIcon, UILogosHeart } from "./icons";
import { Container, Seprator, BoxEm, BoxSeprator, BoxButton } from "@/styles/ReuseableStyle";
import Image from "next/image";
import LogoBox from "./logo-box";

export default function Logos() {
  const someButton = () => {
    console.log('Button clicked');
  }
  return (
    <LogosSection>
      <Container>
        <LogosWrap className="border-left-right">
          <ToggleBar>
            <ToggleWrap>
              <Toggle className="active">All</Toggle>
              <Toggle >Logomark</Toggle>
              <Toggle >Logotype</Toggle>
            </ToggleWrap>
          </ToggleBar>
          <Seprator >
          </Seprator>
          <LogoGrid>
            <LogoBox cross1="left-right" cross2="left-bottom" seprator="absolute right" imgSrc="/logos/radiyal-m-c.png" />
            <LogoBox cross1="left-right" cross2="left-bottom" seprator="absolute left" imgSrc="/logos/radiyal-t-c.png" />
            <LogoBox cross1="left-right" cross2="left-bottom" seprator="absolute left" imgSrc="/logos/radiyal-m-c.png" />
            <LogoItem className="border-right">
              <LogoWrap>
                <Content>
                  <img src="/logos/radiyal-m-c.png" />
                </Content>
                <Overlay>
                  <h5>CLICK TO COPY</h5>
                  <DownloadGroup className="copy-btn">
                    <BoxButton onClick={someButton}><CopyIcon height={16} width={16} /> SVG</BoxButton>
                    <BoxButton><CopyIcon height={16} width={16} /> PNG</BoxButton>
                  </DownloadGroup>
                </Overlay>
              </LogoWrap>
              <BoxSeprator className="absolute left" />
              <BoxEm className="left-right" />
            </LogoItem>

            <LogoItem className="border-right">
              <LogoWrap>
                <Content>
                  <img src="/logos/radiyal-t-c.png" />
                </Content>
              </LogoWrap>
              <BoxSeprator className="absolute" />
              <BoxEm className="right" />
            </LogoItem>
            <LogoItem className="border-right">
              <LogoWrap>
                <Content>
                  <img src="/logos/radiyal-t-c.png" />
                </Content>
              </LogoWrap>
              <BoxSeprator className="absolute" />
              <BoxEm className="right" />
            </LogoItem>
            <LogoItem>
              <LogoWrap>
                <Content>
                  <img src="/logos/radiyal-m-c.png" />
                </Content>
              </LogoWrap>
              <BoxSeprator className="absolute right" />
              <BoxEm className="right" />
            </LogoItem>

            {/* Row 2 */}
            <LogoItem className="border-right">
              <LogoWrap>
                <Content>
                  HEre text here
                </Content>
              </LogoWrap>
              <BoxSeprator className="absolute left" />
              <BoxEm className="left-right" />
            </LogoItem>

            <LogoItem className="border-right">
              <LogoWrap>
              </LogoWrap>
              <BoxSeprator className="absolute" />
              <BoxEm className="right" />
            </LogoItem>
            <LogoItem className="border-right">
              <LogoWrap>
              </LogoWrap>
              <BoxSeprator className="absolute" />
              <BoxEm className="right" />
            </LogoItem>
            <LogoItem>
              <LogoWrap>
              </LogoWrap>
              <BoxSeprator className="absolute right" />
              <BoxEm className="right" />
            </LogoItem>




          </LogoGrid>
        </LogosWrap>
      </Container>
    </LogosSection>
  )
}

const LogosSection = styled.div`

`

const LogosWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ToggleBar = styled.div`
  padding: 20px;
  background: var(--white);
  display: flex;
  justify-content: center;
`

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  gap:4px
`

const Toggle = styled.a`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.2px;
  padding: 8px 18px;
  border-radius: 16px;
  cursor: default;
  &.active{
    color: var(--white);
    background: var(--main-black);
  }
`

const LogoGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  align-items: center;
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