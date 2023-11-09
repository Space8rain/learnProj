import Head from 'next/head'
import React from 'react'
import MainPage from '../components/MainPage';
import Header from '../components/Header';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import Wrapper from '../components/Wrapper';
import Banner from '../components/Banner';

const GlobalStyle = createGlobalStyle`
:root {
  /* Fonts */
  --fonts-Lato: Lato, sans-serif;
  --fonts-Gilroy: Gilroy;
  --fonts-Giorgio: Giorgio Sans LCG;

  /* Fonts: Weight */
  --fonts-weights-normal: 400;
  --fonts-weights-semiBold: 600;
  --fonts-weights-bold: 700;

  /* Colors */
  --text-primary: #FFF;
  --text-secondary: #A1A1AA;
  --text-on-light-bg: #010101;
  --Medium-grey: #9D9D9D;
  --background-background: #010101;
  --Rich-black: #121212;
  --background-yellow: #F8E800;
  --background-red: #FF0025;
  --background-foreground: #121212;

  /* Borders */
  --border-r-S: 8px;
  --border-r-M: 12px;
  --border-r-X: 20px;

}`;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-background);
  color: var(--text-primary);
  overflow: hidden;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Test betboom</title>
        <meta name="description" content="test task" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyle />
      <AppWrapper>
        <Wrapper>
          <Header />
          <Banner  background='#FF0025'/>
          <MainPage />
        </Wrapper> 
      </AppWrapper>
    </>
  )
}
