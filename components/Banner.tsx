import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import bannerImage from '../src/images/banner_image.png';
import Wrapper from './Wrapper';
import Button from './Button';

interface BannerProps {
  direction?: string;
  align?: string;
  justify?: string;
  background?: string;
  width?: string;
  height?: string;
};

const StyledBanner = styled.section<BannerProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  background-color: ${props => props.background || 'black'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '655px'};
  z-index: 2;
`;

const BannerTitle = styled.h1`
  font-size: 100px;
  font-family: var(--fonts-Giorgio);
  font-weight: var(--fonts-weights-bold);
  font-style: normal;
  text-transform: uppercase;
  text-align: left;
  & ~ p {
    font-size: 24px;
    font-family: var(--fonts-Gilroy);
    font-weight: var(--fonts-weights-bold);
    max-width: 493px;
  }
`;

const Banner = (props) => {
  return (
    <StyledBanner {...props} width='1206px'>
      <Wrapper gap='40px' margin='0px -350px 0px 0px' align='left'>
        <Wrapper gap='16px' align='left'>
          <BannerTitle>Фрибеты за купоны</BannerTitle>
          <p>С 31 октября по 13 ноября собирай экспрессы в разделе «Спорт», получай купоны и обменивай их на фрибеты!</p>
        </Wrapper>
        <Button>Принять участие</Button>
      </Wrapper>
        <Image src={bannerImage} alt='banner image'></Image>
    </StyledBanner>
  );
};

export default Banner;
