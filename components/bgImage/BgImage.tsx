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
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  max-width: ${props => props.width + 'px' || '100%'};
  width: 100%;
  height: ${props => props.height + 'px' || '50px'};
  top: ${props => props.top || '0'};
  right: ${props => props.right || '0'};
  left: ${props => props.left || '0'};
  // background-attachment: local, scroll;
  // transform: translate3d($0, 0, 0);
`;

export default BgImage;