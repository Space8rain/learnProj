import Head from 'next/head'
import React from 'react'
import MainPage from '../components/MainPage';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';
import Banner from '../components/Banner';
import { GlobalStyle, AppWrapper } from '../components/GlobalStyle';


export default function Home() {
  return (
    <>
      <Head>
        <title>Test betboom</title>
        <meta name="description" content="test task" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyle />
      <AppWrapper>
        <Wrapper>
          <Header />
          <Banner  background='var(--background-red)'/>
          <MainPage />
        </Wrapper> 
      </AppWrapper>
    </>
  )
}
