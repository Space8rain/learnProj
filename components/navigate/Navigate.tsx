import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Logo from '../logo/Logo';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  & ul {
    list-style: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    margin-left: 67px;
    padding: 0;

    @media (max-width: 1600px) {
      margin-left: 25px;
      gap: 24px;
    };

    @media (max-width: 1200px) {
      font-size: 12px;
    };
  };
`

const Navigate = () => {
  return (
    <Nav>
      <Logo />
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