import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import Flex from '../components/Flex';
import Page from '../components/Page';

const About = ({ title }) => {
  return (
    <Flex>
      <Header />
      <Page title='О нас' />
    </Flex>
  );
}

export default About;