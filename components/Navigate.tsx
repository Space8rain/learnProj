import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  background-color: black;
  & ul {
    list-style: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    margin: 0;
    padding: 0;
  }
`

const Navigate = () => {
  return (
    <Nav>
      <ul>
          <li>
            <Link href='/sport' >Спорт</Link>
          </li>
          <li>
            <Link href='/live' >Live</Link>
          </li>
          <li>
            <Link href='/kibersport' >Киберспорт</Link>
          </li>
          <li>
            <Link href='/fastbet' >Быстрые ставки</Link>
          </li>
          <li>
            <Link href='/promo' >Акции и бонусы</Link>
          </li>
      </ul>
    </Nav>
  )
}

export default Navigate;