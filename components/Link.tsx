import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled.a`
font-size: 16px
`

const MyLink = ({ linkTo, children }) => {
  return (
    <StyledLink href = { linkTo }>
      {children}
    </StyledLink>
  )
}

export default MyLink;