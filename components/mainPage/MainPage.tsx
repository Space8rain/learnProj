import React from 'react';
import styled from 'styled-components';
import football from '../../public/images/football_black_image.png';
import baseball from '../../public/images/baseball_balck_image.png';
import gamepad from '../../public/images/gamepad_black_image.png';
import Wrapper from '../wrapper/Wrapper';
import Button from '../button/Button';
import BgImage from '../bgImage/BgImage';

const listIcon = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
  <circle cx="4" cy="12" r="4" fill="#A1A1AA"/>
</svg>

const buttonIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.5 18C6.09 18 2.5 14.41 2.5 10C2.5 5.59 6.09 2 10.5 2C14.91 2 18.5 5.59 18.5 10C18.5 14.41 14.91 18 10.5 18ZM10.5 0C9.18678 0 7.88642 0.258658 6.67317 0.761205C5.45991 1.26375 4.35752 2.00035 3.42893 2.92893C1.55357 4.8043 0.5 7.34784 0.5 10C0.5 12.6522 1.55357 15.1957 3.42893 17.0711C4.35752 17.9997 5.45991 18.7362 6.67317 19.2388C7.88642 19.7413 9.18678 20 10.5 20C13.1522 20 15.6957 18.9464 17.5711 17.0711C19.4464 15.1957 20.5 12.6522 20.5 10C20.5 8.68678 20.2413 7.38642 19.7388 6.17317C19.2362 4.95991 18.4997 3.85752 17.5711 2.92893C16.6425 2.00035 15.5401 1.26375 14.3268 0.761205C13.1136 0.258658 11.8132 0 10.5 0ZM11.5 5H9.5V9H5.5V11H9.5V15H11.5V11H15.5V9H11.5V5Z" fill="#A1A1AA"/>
</svg>

const SecondTitle = styled.h2`
  font-family: var(--fonts-Giorgio);
  color: white;
  font-size: 60px;
  text-transform: uppercase;
`;

const ThirdTitle = styled.h3`
  font-family: var(--fonts-Gilroy);
  font-size: 24px;
`;

const Step = styled(Wrapper)`
  font-family: var(--fonts-Lato);
  display: flex;
  align-items: flex-start;
  gap: 16px;
  max-width: 335px;
  & span {
    text-align: center;
    line-height: 200%;
    background-color: var(--background-yellow);
    color: var(--text-on-light-bg);
    font-weight: 700;
    border-radius: 50%;
    min-width: 32px;
    height: 32px;
  }
`;

const Rules = styled.ul`
  font-family: var(--fonts-Lato);
  color: var(--text-secondary);
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  list-style: none;
  & li {
    & svg {
      margin-right: 16px;
      padding-bottom: 2px;
    }
  }
`;

const DesktopPageContent = styled(Wrapper)`
  @media (max-width: 900px) {
    display: none;
  }
`;

const MobilePageContent = styled(Wrapper)`

  margin-top: 60px;

  ${SecondTitle} {
    font-size: 48px;
  }

  ${Step} {
    max-width: 100%;
    justify-content: flex-start;
  }

  @media (min-width: 901px) {
    display: none;
  }

  ${Rules} {
    gap: 16px;
    & li {
      display: flex;
      & svg {
      flex-shrink: 0;
      }
    }
  }
`;


const MainPage = () => {
  return (
    <main>
      <DesktopPageContent>
        <Wrapper
          gap={'48px'}
          margin={'60px auto'}
          padding={'32px 48px 56px'}
          background={'var(--background-foreground)'}
          borderRadius={'var(--border-r-X)'}
          maxWidth='min(1216px, 100% - 48px)'
        >
          <SecondTitle>Как принять участие?</SecondTitle>
          <Wrapper display={'grid'} gap={'48px'} align={'flex-start'}>
            <Step direction={'row'}>
              <span>1</span>
              <p>Собирай экспрессы с общим коэффициентом от 2.5 в разделе «Спорт»</p>
            </Step>
            <Step direction={'row'}>
              <span>2</span>
              <p>Получай купоны и гарантированные фрибеты за собранные экспрессы</p>
            </Step>
            <Step direction={'row'}>
              <span>3</span>
              <p>14 ноября в 15:00 (мск) подведём итоги акции и начислим фрибеты</p>
            </Step>
          </Wrapper>
          <Button 
            color={`var(--text-primary)`}
            background={`var(--background-red)`}
            fsize={'18px'}
            fweight={'100'}
            id='make-bet'
          >
            Сделать ставку
          </Button>
        </Wrapper>

          <BgImage 
              imageUrl={football.src}
              width={football.width}
              height={football.height}
              top='305px'
              left='-150px'
            />
          <BgImage
            imageUrl={baseball.src}
            width={baseball.width}
            height={baseball.height}
            top='-64px'
            left='655px'
            />
          <BgImage 
              imageUrl={gamepad.src}
              width={gamepad.width}
              height={gamepad.height}
              top='260px'
              left='1025px'
            />

        <Wrapper 
          padding={'40px'}
          align={'flex-start'}
          background={'var(--background-foreground)'}
          borderRadius={'var(--border-r-X)'}
          gap={'32px'}
          maxWidth='min(1216px, 100% - 48px)'
        >
          <ThirdTitle>Правила акции</ThirdTitle>
          <Rules>
            <li>
              {listIcon}
              Ставки должны быть вида «экспресс»
            </li>
            <li>
              {listIcon}
              Ставки должны быть с денежного счёта
            </li>
            <li>
              {listIcon}
              Ставки принимаются на любое событие в разделе «Спорт»
            </li>
            <li>
              {listIcon}
              Ставки должны быть с общим коэффициентом не ниже 2.5
            </li>
            <li>
              {listIcon}
              Ставки должны быть рассчитаны в период с 31.10 (в 12:00) до 13.11 (в 23:59) включительно
            </li>
            <li>
              {listIcon}
              Призовые фрибеты будут начислены 14.11 в 15:00 (мск), в соответствии с количеством полученных купонов
            </li>
          </Rules>
          <Button
            background={'transparent'}
            color={'var(--text-secondary)'}
          >
            <Wrapper direction ={'row'} gap={'16px'}>
              {buttonIcon}
              Показать больше
            </Wrapper>
          </Button>
        </Wrapper>

        <Wrapper direction={'row'} margin={'32px 0 60px'} gap={'24px'}>
          <Button
            border={'1px solid var(--border-medium)'}
            background={'transparent'}
            color={'var(--text-secondary)'}
            fsize={'14px'}
            fweight={'400'}
            padding={'14px 0'}
            borderRadius={'6px'}
            width={'198px'}
          >
            Узнать подробнее
          </Button>

          <Button
            border={'1px solid var(--border-medium)'}
            background={'transparent'}
            color={'var(--text-secondary)'}
            fsize={'14px'}
            fweight={'400'}
            padding={'14px 0'}
            borderRadius={'6px'}
            width={'198px'}
          >
            Оставить отзыв
          </Button>
        </Wrapper>
        </DesktopPageContent>

        {/* MOBILE LAYOUT */}

        <MobilePageContent>
        <Wrapper
          gap='24px'
          margin='60px auto 80px'
          padding='24px 22px 42px'
          background={'var(--background-foreground)'}
          borderRadius={'var(--border-r-X)'}
        >
          <SecondTitle>Как принять участие?</SecondTitle>
          <Wrapper display='' gap={'24px'} align={'flex-start'}>
            <Step direction={'row'}>
              <span>1</span>
              <p>Собирай экспрессы с общим коэффициентом от 2.5 в разделе «Спорт»</p>
            </Step>
            <Step direction={'row'}>
              <span>2</span>
              <p>Получай купоны и гарантированные фрибеты за собранные экспрессы</p>
            </Step>
            <Step direction={'row'}>
              <span>3</span>
              <p>14 ноября в 15:00 (мск) подведём итоги акции и начислим фрибеты</p>
            </Step>
          </Wrapper>
          <Button 
            color={`var(--text-primary)`}
            background={`var(--background-red)`}
            fsize='18px'
            fweight='100'
            id='make-bet'
          >
            Сделать ставку
          </Button>
        </Wrapper>

          <BgImage 
              imageUrl={gamepad.src}
              width={gamepad.width}
              height={gamepad.height}
              top='-100px'
              left='500px'
            />

        <Wrapper 
          padding='40px'
          align='flex-start'
          background='var(--background-foreground)'
          gap='16px'
        >
          <ThirdTitle>Правила акции</ThirdTitle>

          <Rules>
            <li>
              {listIcon}
              Ставки должны быть вида «экспресс»
            </li>
            <li>
              {listIcon}
              Ставки должны быть с денежного счёта
            </li>
            <li>
              {listIcon}
              Ставки принимаются на любое событие в разделе «Спорт»
            </li>
            <li>
              {listIcon}
              Ставки должны быть с общим коэффициентом не ниже 2.5
            </li>
            <li>
              {listIcon}
              Ставки должны быть рассчитаны в период с 31.10 (в 12:00) до 13.11 (в 23:59) включительно
            </li>
            <li>
              {listIcon}
              Призовые фрибеты будут начислены 14.11 в 15:00 (мск), в соответствии с количеством полученных купонов
            </li>
          </Rules>

          <Button
            background='transparent'
            color='var(--text-secondary)'
            width='100%'
            fsize='24px'
            gap='16px'
          >
            {buttonIcon}
            Показать больше
          </Button>

          <Button
            border='1px solid var(--border-medium)'
            background='transparent'
            color='var(--text-secondary)'
            fsize='14px'
            fweight='400'
            padding='14px 0'
            borderRadius='6px'
            width='100%'
          >
            Узнать подробнее
          </Button>

          <Button
            border='1px solid var(--border-medium)'
            background='transparent'
            color='var(--text-secondary)'
            fsize='14px'
            fweight='400'
            padding='14px 0'
            borderRadius='6px'
            width='100%'
          >
            Оставить отзыв
          </Button>
        </Wrapper>
        </MobilePageContent>

    </main>
  );
};

export default MainPage;
