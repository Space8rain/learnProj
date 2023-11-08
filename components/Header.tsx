import React from "react"
import styled from 'styled-components';
import Navigate from "./Navigate";

interface HeaderProps {
  align?: string;
  justify?: string;
  background?: string;
  width?: string;
  height?: string;
}

const StyledHeader = styled.header<HeaderProps>`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  background-color: ${props => props.background || 'black'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '80px'};
`;


const Header = () => {
  return (
    <StyledHeader>
      <Navigate />
    </StyledHeader>
  )
}

export default Header