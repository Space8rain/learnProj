import React from 'react'
import styled from 'styled-components';

interface FlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  margin: ${({margin}) => margin || '0'};
`;

const Flex = (props) => {
  return (
    <StyledFlex {...props} />
  );
}

export default Flex;
