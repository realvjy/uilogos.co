"use client";
import styled from "styled-components";
import { DownloadIcon, FigmaIcon, GithubIcon, TwitterIcon, UILogosHeart } from "./icons";
import { Container, Seprator, LinkButton } from "@/styles/ReuseableStyle";

export default function Footer() {
    return (
        <FootSection>
            <Container>
                <FootWrap className="border-left-right">
                    <Credit><h3>made by <a href="https://x.com/realvjy">@realvjy</a> at <a href="https://overlayz.studio">overlayz <TwitterIcon /></a></h3></Credit>
                </FootWrap>
            </Container>
        </FootSection>
    )
}

const FootSection = styled.div`

`

const FootWrap = styled.div`
  display: flex;
  padding: 40px 20px;
  flex-direction: column;
  justify-content: center;

`;

const Credit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    h3{
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 400;
        color: var(--text-black2);
    }
    a{
        display: flex;
        align-items: center;
        padding: 6px;
        font-weight: 500;
        &:hover{
            color: var(--main-black);
        }
        .tw-icon{
            transform: scale(0.8);
        }
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

