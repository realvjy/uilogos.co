"use client";
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { CopyIcon, TwitterIcon, UILogosHeart } from "./icons";
import { Container, Seprator, BoxEm, BoxSeprator, BoxButton } from "@/styles/ReuseableStyle";
import Image from "next/image";
import LogoBox from "./logo-box";

export default function Logos() {
  const [itemPerRow, setItemPerRow] = useState(2); // Initialize with mobile value
  const someButton = () => {
    console.log('Button clicked');
  }
  let currentRow = 0; // Initialize the current row
  const LogosData = [1, 2, 4, 5, 6, 7, 8, 12, 11, 7, 12, 19];

  useEffect(() => {
    const handleResize = () => {
      // Update itemsPerRow based on screen size
      if (window.innerWidth >= 768) {
        // Desktop view
        setItemPerRow(4);
      } else {
        // Mobile view
        setItemPerRow(2);
      }
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to set itemsPerRow based on the initial screen size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount


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
            {LogosData.map((data, i) => {
              if (i % itemPerRow === 0) {
                // Increment the currentRow when a new row starts
                currentRow++;
                // Print a message or perform any action when a new row starts
                console.log(`New row (${currentRow}) started at index ${i}`);
              }
              // Determine if it's the first or last box in the row
              const isFirstInRow = i % itemPerRow === 0;
              const isLastInRow = i % itemPerRow === itemPerRow - 1 || i === LogosData.length - 1;
              const isLastRow = currentRow === Math.ceil(LogosData.length / itemPerRow);

              return (<>

                <LogoBox
                  imgSrc="/logos/radiyal-t-c.png"
                  data={data}
                  row={currentRow}
                  isFirstInRow={isFirstInRow}
                  isLastInRow={isLastInRow}
                  isLastRow={isLastRow}
                />
              </>)
            })}
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
`;

const ToggleWrap = styled.div`
  display: flex;
  align-items: center;
  gap:4px;
`;

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
`;

const LogoGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  align-items: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2,1fr);
  }
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