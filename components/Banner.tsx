import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import bannerImage from '../src/images/banner_image.png';
import Wrapper from './Wrapper';
import Button from './Button';
import BgImage from './BgImage';
import Link from 'next/link';


const StyledBanner = styled(Wrapper)`
  height: 655px;
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
    <StyledBanner {...props} >
      <Wrapper width='1216px'>
        <BgImage 
          imageUrl={bannerImage.src}
          width={bannerImage.width}
          height={bannerImage.height}
          top='-142px'
          left='272px'
        />
        <Wrapper gap='40px'  align='left' background={'transparent'}>
          <Wrapper gap='16px' align='left' background={'transparent'}>
            <BannerTitle>Фрибеты за купоны</BannerTitle>
            <p>С 31 октября по 13 ноября собирай экспрессы в разделе «Спорт», получай купоны и обменивай их на фрибеты!</p>
          </Wrapper>
          <Link href='#make-bet' scroll={false}>
            <Button alignSelf={'start'}>
              Принять участие
            </Button>
            
          </Link>
        </Wrapper>
      </Wrapper>
    </StyledBanner>
  );
};

export default Banner;
