"use client";
import styled from "styled-components";
import { TwitterIcon, UILogosHeart } from "./icons";
import { Container, Seprator } from "@/styles/ReuseableStyle";

export default function Nav() {
  return (
    <NavSection>
      <Container>
        <NavWrap className="border-left-right">
          <Logo>
            <UILogosHeart />
          </Logo>
        </NavWrap>
        <Seprator >
          <em></em>
        </Seprator>
      </Container>
    </NavSection>
  )
}

const NavSection = styled.div`

`

const NavWrap = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  position: relative;
`;

const Logo = styled.div`
  background: var(--white);
  height: 50px;
  width: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 1.2px rgba(188, 202, 218, 0.14), 0px 1.2px 4px rgba(143, 143, 143, 0.2), inset 0px -3px 0.5px rgba(62, 62, 62, 0.04);
  overflow: visible;
  .uilogos-heart {
    transform: translateY(1px);
  }
`