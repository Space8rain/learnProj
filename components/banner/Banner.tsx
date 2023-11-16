import React from 'react';
import styled from 'styled-components';
import bannerImage from '../../public/images/banner_image.png';
import Wrapper from '../wrapper/Wrapper';
import Button from '../button/Button';
import BgImage from '../bgImage/BgImage';
import Link from 'next/link';

const WrapperBannerText = styled(Wrapper)`
  gap: 16px;

  @media (min-width: 768px) {
    gap: 36px;
  }
`;

const MobileBannerButton = styled(Button)`
  height: 56px;
  width: 100%;
`;

const BannerTitle = styled.h1`
  font-size: 100px;
  font-family: var(--fonts-Giorgio);
  font-weight: var(--fonts-weights-bold);
  font-style: normal;
  text-transform: uppercase;
  & ~ p {
    font-size: 24px;
    font-family: var(--fonts-Gilroy);
    font-weight: var(--fonts-weights-bold);
    max-width: 493px;
  }

  @media (max-width: 1200px) {
    font-size: 65px;

    & ~ p {
      font-size: 20px;
    }
  }
`;

const DesktopBanner = styled(Wrapper)`
  height: 655px;
  @media (max-width: 1200px) {
    ${WrapperBannerText} {
      gap: 25px;
    }
    ${BgImage} {
      left: 100px;
    }
  }
  @media (max-width: 1023px) {
    ${BgImage} {
      left: 100px;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileBanner = styled(Wrapper)`
  @media (min-width: 901px) {
    display: none;
  }

  height: 655px;

  ${BannerTitle} {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    font-family: var(--fonts-Gilroy);
    font-weight: var(--fonts-weights-bold);
    font-size: 32px;
    padding: 16px 22px;
    text-transform: none;
    text-align: center;
    background-color: var(--background-foreground);
  }

  & p {
    font-size: 24px;
    font-family: var(--fonts-Gilroy);
    font-weight: var(--fonts-weights-bold);
  }
`;


const Banner = (props) => {
  return (
    <>
    <DesktopBanner background={'var(--background-red)'} {...props} >
      <Wrapper maxWidth='min(1216px, 100% - 48px)'>
        <BgImage 
          imageUrl={bannerImage.src}
          width={1080}
          height={580}
          top='-142px'
          left='272px'
        />
        <WrapperBannerText gap='40px' background={'transparent'}>
          <Wrapper gap='16px' align='left' background={'transparent'}>
            <BannerTitle>Фрибеты за купоны</BannerTitle>
            <p>С 31 октября по 13 ноября собирай экспрессы в разделе «Спорт», получай купоны и обменивай их на фрибеты!</p>
          </Wrapper>

          <Link href='#make-bet' scroll={false}>
            <Button alignSelf={'start'}>
              Принять участие
            </Button>
          </Link>
        </WrapperBannerText>
      </Wrapper>
    </DesktopBanner>

    {/* MOBILE LAYOUT */}

    <MobileBanner justify='flex-start' {...props} >
    <BannerTitle>Фрибеты за купоны</BannerTitle>

      <Wrapper background={'var(--background-red)'} justify='flex-start' padding='24px 22px 0'>
        <WrapperBannerText background={'transparent'}>
            <p>С 31 октября по 13 ноября собирай экспрессы в разделе «Спорт», получай купоны и обменивай их на фрибеты!</p>

          <Link href='#make-bet' scroll={false}>
            <MobileBannerButton>
              Принять участие
            </MobileBannerButton>
          </Link>
        </WrapperBannerText>
        <BgImage
          position='relative'
          imageUrl={bannerImage.src}
          height={416}
          left='-100px'
        />
      </Wrapper>
    </MobileBanner>
    </>
  );
};

export default Banner;
