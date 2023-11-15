import React from 'react'
import MainPage from '../components/mainPage/MainPage';
import Header from '../components/header/Header';
import Wrapper from '../components/wrapper/Wrapper';
import Banner from '../components/banner/Banner';


export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <MainPage />
    </Wrapper> 
  )
}
