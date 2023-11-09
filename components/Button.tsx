import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  padding?: string;
  width?: string;
  background?: string;
  color?: string;
  margin?: string;
};

const StyleButton = styled.button<ButtonProps>`
  display: flex;
  border: none;
  cursor: pointer;
  padding: ${props => props.padding || '12px 20px'};
  margin: ${props => props.margin || '0'};
  width: ${props => props.width || 'max-content'};
  background-color: ${props => props.background || 'var(--background-yellow)'};
  color: ${props => props.color || 'var(--text-on-light-bg)'};
  border-radius: var(--border-r-S);
  font-size: 18px;
  font-family: var(--fonts-Lato);
  font-weight: var(--fonts-weights-semiBold);
`;

const Button = (props) => {
  return (
    <StyleButton {...props}>
      
    </StyleButton>
  )
};

export default Button