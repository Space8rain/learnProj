import React from 'react'
import Header from '../components/Header';
import Flex from '../components/Wrapper';
import Page from '../components/MainPage';
import { GlobalStyle, AppWrapper } from '../components/GlobalStyle';


const About = ({ title }) => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Flex>
        <Header />
      </Flex>
    </AppWrapper>
  );
}

export default About;