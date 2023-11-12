import styled from 'styled-components';


interface imgProps {
  position?: string;
  imageUrl?: string;
  width?: number;
  height?: number;
  top?: string;
  right?: string;
  left?: string;
};

const BgImage = styled.div<imgProps>`
  position: ${props => props.position || 'absolute'};
  background-image: url(${props => props.imageUrl || ''});
  width: ${props => props.width + 'px' || '50px'};
  height: ${props => props.height + 'px' || '50px'};
  top: ${props => props.top || '0'};
  right: ${props => props.right || '0'};
  left: ${props => props.left || '0'};
`;

export default BgImage;