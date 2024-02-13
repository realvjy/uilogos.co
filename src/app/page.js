'use client'

import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { TwitterIcon, UILogosHeart } from "@/components/icons";
import Logos from "@/components/logos";
import Nav from "@/components/nav";
import { Container } from "@/styles/ReuseableStyle";
import Image from "next/image";
import styled from 'styled-components';

export default function Home() {
  return (
    <main >
      <Nav />
      <Header />
      <Logos />
      <Faq />
      <Footer />
    </main>
  );
}


