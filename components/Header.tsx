import React from "react"
import styled from 'styled-components';
import MyLink from "./Link";
import Links from "./Navigate";
import Navigate from "./Navigate";

const StyledHeader = styled.header`
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