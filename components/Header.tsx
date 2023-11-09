import React from "react"
import styled from 'styled-components';
import Navigate from "./Navigate";
import Logo from "./Logo";

interface HeaderProps {
  align?: string;
  justify?: string;
  background?: string;
  width?: string;
  height?: string;
}

const StyledHeader = styled.header<HeaderProps>`
  display: flex;
  gap: 67px;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  background-color: ${props => props.background || 'black'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '80px'};
  font-family: var(--fonts-Lato);
  font-weight: var(--fonts-weights-normal);
  color: var(--text-primary);
`;


const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigate />
    </StyledHeader>
  )
}

export default Header