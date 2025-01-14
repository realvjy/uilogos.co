// 'use client'

import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { TwitterIcon, UILogosHeart } from "@/components/icons";
import Logos from "@/components/logos";
import Nav from "@/components/nav";
import { Container } from "@/styles/ReuseableStyle";
import DirectoryTraversal from "@/utils/DirectoryTraversal";
import Image from "next/image";
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';

function formatLogoData() {
  try {
    const baseDir = path.join(process.cwd(), 'public', 'uilogos', 'brand');

    // Define all possible paths
    const paths = {
      textColor: path.join(baseDir, 'text', 'color'),
      textBlack: path.join(baseDir, 'text', 'black'),
      markColor: path.join(baseDir, 'mark', 'color'),
      markBlack: path.join(baseDir, 'mark', 'black')
    };

    // Get files from all directories
    const files = {
      textColor: fs.existsSync(paths.textColor) ? fs.readdirSync(paths.textColor) : [],
      textBlack: fs.existsSync(paths.textBlack) ? fs.readdirSync(paths.textBlack) : [],
      markColor: fs.existsSync(paths.markColor) ? fs.readdirSync(paths.markColor) : [],
      markBlack: fs.existsSync(paths.markBlack) ? fs.readdirSync(paths.markBlack) : []
    };

    // Create a set of all unique logo names (without extensions)
    const allLogoNames = new Set([
      ...files.textColor.map(file => path.parse(file).name),
      ...files.textBlack.map(file => path.parse(file).name),
      ...files.markColor.map(file => path.parse(file).name),
      ...files.markBlack.map(file => path.parse(file).name)
    ]);

    // Convert to array and sort
    const logos = Array.from(allLogoNames).sort();

    // Format data according to specified structure
    const formattedData = logos.map((logoName, index) => {
      // Helper function to create full URL path
      const getPath = (fileName, type, style) => {
        if (!fileName) return null;
        return `https://uilogos.co/uilogos/brand/${type}/${style === 'bw' ? 'black' : 'color'}/${fileName}`;
      };

      // Find files for each variant
      const textColorFile = files.textColor.find(file => path.parse(file).name === logoName);
      const textBlackFile = files.textBlack.find(file => path.parse(file).name === logoName);
      const markColorFile = files.markColor.find(file => path.parse(file).name === logoName);
      const markBlackFile = files.markBlack.find(file => path.parse(file).name === logoName);

      return {
        id: `${logoName}-${index + 1}`,
        name: logoName.charAt(0).toUpperCase() + logoName.slice(1), // Capitalize first letter
        variants: {
          text: {
            color: getPath(textColorFile, 'text', 'color'),
            bw: getPath(textBlackFile, 'text', 'bw')
          },
          mark: {
            color: getPath(markColorFile, 'mark', 'color'),
            bw: getPath(markBlackFile, 'mark', 'bw')
          }
        }
      };
    });

    console.log('Formatted Logo Data:', JSON.stringify(formattedData, null, 2));
    return formattedData;
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}

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


