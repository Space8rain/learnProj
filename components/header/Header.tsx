import React from "react"
import styled from 'styled-components';
import Button from "../button/Button";
import Wrapper from "../wrapper/Wrapper";
import Navigate from "../navigate/Navigate";
import Logo from "../logo/Logo";

interface HeaderProps {
  align?: string;
  justify?: string;
  background?: string;
  width?: string;
  height?: string;
}

const iconButton = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.25H6.75L6.75 6.75H12V5.25H6.75C5.925 5.25 5.25 5.925 5.25 6.75L5.25 17.25C5.25 18.075 5.925 18.75 6.75 18.75H12V17.25Z" fill="#010101"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.065 11.4375L14.13 9.495L15.1875 8.4375L18.9375 12.1875L15.1875 15.9375L14.13 14.88L16.065 12.9375H8.8125V11.4375H16.065Z" fill="#010101"/>
</svg>

const DesktopHeader = styled.header<HeaderProps>`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'space-between'};
  background-color: ${props => props.background || 'black'};
  max-width: min(1603px, 100% - 48px);
  width: 100%;
  height: ${props => props.height || '80px'};
  font-family: var(--fonts-Lato);
  font-weight: var(--fonts-weights-normal);
  color: var(--text-primary);

  @media (max-width: 1200px) {
    & button{
      padding: 12px 20px;
    };
  };

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileHeader = styled.header<HeaderProps>`
  display: flex;
  max-width: min(1603px, 100% - 48px);
  width: 100%;
  height: ${props => props.height || '80px'};

  @media (min-width: 901px) {
    display: none;
  }
`;

const WrapperLogo = styled(Wrapper)`
  width: 115px;
`;


const Header = () => {
  return (
    <>
    <DesktopHeader>
      <Navigate />
      <Wrapper direction='row' gap='16px' width='min-content'>
      <Button
        padding='12px 42px'
        background={'transparent'}
        color={'var(--text-secondary)'}
        border={'1px solid var(--border-medium)'}
        fweight='400'
        fsize='16px'
      >
        Вход
      </Button>
      <Button 
        padding='12px 42px'
        fweight='400'
        fsize='16px'
      >
        Регистрация
      </Button>
      </Wrapper>
    </DesktopHeader>

    {/* MOBILE LAYOUT */}

    <MobileHeader height="64px">
      <Wrapper direction='row' gap='16px' justify='space-between' >
        <WrapperLogo>
          <Logo />
        </WrapperLogo>
        <Button
          padding='6px 22px'
          color={'var(--text-on-light-bg)'}
          fweight='400'
          fsize='14px'
        >
          {iconButton} Вход
        </Button>
      </Wrapper>
    </MobileHeader>
    </>
  )
}

export default Header