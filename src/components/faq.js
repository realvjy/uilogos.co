"use client";
import styled from "styled-components";
import { TwitterIcon, UILogosHeart } from "./icons";
import { Container, Seprator } from "@/styles/ReuseableStyle";

export default function Faq() {
  return (
    <FAQSection>
      <Container>
        <FAQWrap className="border-left-right">
          <h3>FAQs</h3>
          <h1>Frequently asked questions</h1>
          <h4>Answers to common questions about this uilogos</h4>
        </FAQWrap>
        <Seprator >
          <em></em>
        </Seprator>
      </Container>
    </FAQSection>
  )
}

const FAQSection = styled.div`

`

const FAQWrap = styled.div`
  background: var(--white);
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
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--main-black);
    margin-bottom: 8px;
  }
  h4{
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }
`;