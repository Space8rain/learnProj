import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  color: white;
  font-size: 90px
`;

const Page = ({ title }) => {
  return (
    <main>
      <Title>{title}</Title>
    </main>
  );
}

export default Page;
