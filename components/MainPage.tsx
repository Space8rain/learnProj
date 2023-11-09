import React from 'react';
import styled from 'styled-components';
import basketball from '../src/images/basketball_black_image.png';
import baseball from '../src/images/baseball_balck_image.png';
import gamepad from '../src/images/gamepad_black_image.png';
import Wrapper from './Wrapper';
import Button from './Button';
import Image from 'next/image';


const Title = styled.h2`
  font-family: var(--fonts-Giorgio);
  color: white;
  font-size: 60px;
  text-transform: uppercase;
  margin-top: 32px;
`;

interface imgProps {
  imgLink?: string;
  top?: string;
  right?: string;
  left?: string;
  position?: string;
  src?: string;
};

const Container = styled.div`
  position: relative;
  width: 1603px;
  height: 680px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Img = styled(Image)<imgProps>`
  // position: ${props => props.position || 'absolute'};
  top: ${props => props.top || '0'};
`;

const StepsWrapper = styled(Wrapper)`
  z-index: 2;
  position: relative;
  width: 1216px;
  border-radius: var(--border-r-X);
  background: var(--background-foreground);
`;

const Step = styled(Wrapper)`
  font-family: var(--fonts-Lato);
  display: flex;
  align-items: flex-start;
  gap: 16px;
  & span {
    background-color: red;
    border-radius: 50%;
    min-width: 32px;
    height: 32px;
    text-align: center;
    line-height: 1.9;
  }
`;


const MainPage = () => {
  return (
    <main>
      <Container>
        <StepsWrapper justify={'start'} gap={'48px'} margin={'60px auto'} padding={'32px 48px 56px'}>
          <Title>Как принять участие?</Title>
          <StepsWrapper direction={'row'} gap={'48px'} justify={'space-evenly'}>
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
          </StepsWrapper>
          <Button color={`var(--text-primary)`} background={`var(--background-red)`}>
            Сделать ставку
          </Button>
        </StepsWrapper>
        <Img src={basketball}/>
        <Img src={baseball} />
        <Img src={gamepad}/>
      </Container>
    </main>
  );
};

export default MainPage;
