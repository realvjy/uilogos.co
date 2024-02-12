"use client";
import styled from "styled-components";
import { DownloadIcon, FigmaIcon, GithubIcon, TwitterIcon, UILogosHeart } from "./icons";
import { Container, Seprator, LinkButton } from "@/styles/ReuseableStyle";

export default function Header() {
    return (
        <HeadSection>
            <Container>
                <HeadWrap className="border-left-right">
                    <h3>25+ logos for personal and commercial use</h3>
                    <h1>Free Professional Logo Placeholders</h1>
                    <ButtonGroup>
                        <LinkButton className="blue-btn"><FigmaIcon /> Get figma</LinkButton>
                        <LinkButton className="white-btn"><DownloadIcon /> Download .zip</LinkButton>
                        <LinkButton className="white-btn"><GithubIcon /> Get on github</LinkButton>
                    </ButtonGroup>
                </HeadWrap>
                <Seprator >
                    <em></em>
                </Seprator>
            </Container>
        </HeadSection>
    )
}

const HeadSection = styled.div`

`

const HeadWrap = styled.div`
  display: flex;
  padding: 40px 20px;
  flex-direction: column;
  justify-content: center;
  h3{
    text-align: center;
    color: var(--blue);
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
  }
  h1{
    font-size: 44px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--main-black);
  }
`;

const ButtonGroup = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

