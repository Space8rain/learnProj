import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import Flex from '../components/Wrapper';
import Page from '../components/MainPage';

const About = ({ title }) => {
  return (
    <Flex>
      <Header />
      <Page title='Sport' />
    </Flex>
  );
}

export default About;