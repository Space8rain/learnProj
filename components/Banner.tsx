import React from 'react'
import styled from 'styled-components';

interface BannerProps {
  direction?: string;
  align?: string;
  justify?: string;
  background?: string;
  width?: string;
  height?: string;
}

const StyledBanner = styled.div<BannerProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  background-color: ${props => props.background || 'black'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '655px'};
`;

const Banner = (props) => {
  return (
    <StyledBanner {...props} />
  );
}

export default Banner;
