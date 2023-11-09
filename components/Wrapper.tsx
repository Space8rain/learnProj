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
}

const StyledWrapper = styled.div<FlexProps>`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.direction || 'column'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
  gap: ${({gap}) => gap || '0'};
`;

const Wrapper = (props) => {
  return (
    <StyledWrapper {...props} />
  );
}

export default Wrapper;
