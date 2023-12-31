import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  gap?: string;
  border?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
  borderRadius?: string;
  fsize?: string;
  fweight?: string;
  alignSelf?: string;
};

const StyleButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({gap}) => gap || '0'};
  border: ${props => props.border || 'none'};
  cursor: pointer;
  padding: ${props => props.padding || '12px 20px'};
  margin: ${props => props.margin || '0'};
  width: ${props => props.width || 'max-content'};
  min-height: ${props => props.height || 'max-content'};
  background-color: ${props => props.background || 'var(--background-yellow)'};
  color: ${props => props.color || 'var(--text-on-light-bg)'};
  border-radius: ${({borderRadius}) => borderRadius || 'var(--border-r-S)'};
  font-size: ${props => props.fsize || '18px'};
  font-family: var(--fonts-Lato);
  font-weight:${props => props.fweight || 'var(--fonts-weights-semiBold)'};
  align-self: ${props => props.alignSelf || 'center'};
  text-align: center;
  &:hover {
    transform: scale(1.02);
  };
`;

const Button = (props) => {
  return (
    <StyleButton {...props}>
      
    </StyleButton>
  )
};

export default Button