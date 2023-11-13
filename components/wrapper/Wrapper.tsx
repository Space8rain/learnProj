import React from 'react'
import styled from 'styled-components';

interface FlexProps {
  display?: string;
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  padding?: string;
  gap?: string;
  width?: string;
  background?: string;
  gridTemplateColumns?: string;
  borderRadius?: string;
}

const StyledWrapper = styled.div<FlexProps>`
  position: relative;
  z-index: 10;
  display: ${({display}) => display || 'flex'};
  flex-direction: ${({direction}) => direction || 'column'};
  align-items: ${({align}) => align || 'center'};
  justify-content: ${({justify}) => justify || 'center'};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
  gap: ${({gap}) => gap || '0'};
  width: ${({width}) => width || '100%'};
  background: ${({background}) => background || 'transparent'};
  grid-template-columns: ${({gridTemplateColumns}) => gridTemplateColumns || 'repeat(3, 1fr)'};
  border-radius: ${({borderRadius}) => borderRadius || '0'};
`;

const Wrapper = (props) => {
  return (
    <StyledWrapper {...props} />
  );
}

export default Wrapper;
