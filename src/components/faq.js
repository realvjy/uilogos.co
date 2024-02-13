"use client";
import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { TwitterIcon, UILogosHeart, PlusIcon } from "./icons";
import { Container, Seprator } from "@/styles/ReuseableStyle";
import Collapsible from 'react-collapsible';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleCollapsibleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
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
      <Container>
        <FAQListWrap className="border-left-right">
          <div className="faq-list">
            <Collapsible
              trigger={
                <div className="collapsible-title" onClick={() => handleCollapsibleClick(1)}>
                  <span>What is uilogos?</span>
                  <PlusIcon />
                </div>
              }
              key="1"
              open={openIndex === 1}
            >
              <p>
                Loreum ipusm for logos. Insert dummy logos. More than 25+ professionally designed logos and plugin that help you get dummy logos directly into your mock, design or presentations.
              </p>
            </Collapsible>

            <Collapsible
              trigger={
                <div className="collapsible-title" onClick={() => handleCollapsibleClick(2)}>
                  <span>What is license to use it?</span>
                  <PlusIcon />
                </div>
              }
              key="2"
              open={openIndex === 2}
            >
              <p >
                This is shared under the <a href="https://creativecommons.org/licenses/by/4.0/deed.en">CC-BY-4.0</a> license. You are free to use it for both commercial and personal projects.
              </p>
            </Collapsible>


            <Collapsible
              trigger={
                <div className="collapsible-title" onClick={() => handleCollapsibleClick(3)}>
                  <span>Can I use it for commercial project?</span>
                  <PlusIcon />
                </div>
              }
              key="3"
              open={openIndex === 3}
            >
              <p >
                Yes, you are free to use it for both commercial and personal projects. The free version is shared under the CC-BY-4 license.
              </p>
            </Collapsible>
            <Collapsible
              trigger={
                <div className="collapsible-title" onClick={() => handleCollapsibleClick(4)}>
                  <span>Support & Help?</span>
                  <PlusIcon />
                </div>
              }
              key="4"
              open={openIndex === 4}
            >
              <p >
                You can reach out to me on twitter <a href="https://twitter.com/realvjy">@realvjy</a> for any help or support.
              </p>
            </Collapsible>

          </div>
        </FAQListWrap>
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
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
    }
  }
  h1{
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--main-black);
    margin-bottom: 8px;
    @media screen and (max-width: 768px) {
        font-size: 36px;
        line-height: 40px;
    }
  }
  h4{
    color: var(--text-black2);
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
    }
  }
`;

const FAQListWrap = styled.div`
  max-width: 480px;
  padding: 20px;
  display: flex;
  margin: 20px auto;
`