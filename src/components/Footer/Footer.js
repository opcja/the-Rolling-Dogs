import styled, { css } from "styled-components";
import React from "react";
import { Link } from "gatsby";

import Logo from "../../assets/icons/logo/logo-vertical.svg";

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.green500};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 40px 16px 60px;
`;

const LinksWrapper = styled.div`
  width: 100%;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-auto-flow: column;
    row-gap: 10px;

    li:nth-last-of-type(1),
    li:nth-last-of-type(2) {
      justify-self: end;
    }

    li:nth-last-of-type(3),
    li:nth-last-of-type(4),
    li:nth-last-of-type(5),
    li:nth-last-of-type(6),
    li:nth-last-of-type(7) {
      justify-self: start;
    }

    a {
      font-family: "Lora", serif;
      color: ${({ theme }) => theme.colors.orange400};
      font-size: ${({ theme }) => theme.font.size.mobile.bodySmall};
      line-height: 160%;
      letter-spacing: 0.04em;

      &::after {
        content: "";
        display: block;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.orange400};
        margin-top: 4px;
      }
    }
  }
`;

const CopyAndPolicy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-family: "Lora", serif;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.orange400};
      margin-top: 4px;
    }
  }

  span,
  a {
    font-family: "Lora", serif;
    color: ${({ theme }) => theme.colors.orange400};
    font-size: ${({ theme }) => theme.font.size.mobile.caption};
    line-height: 160%;
    letter-spacing: 0.04em;
  }
`;

export const FooterComponent = () => {
  return (
    <FooterWrapper>
      <Logo />
      <LinksWrapper>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>O mnie</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="oferta">Oferta</Link>
          </li>
          <li>
            <Link>Kontakt</Link>
          </li>
          <li>
            <Link>Youtube</Link>
          </li>
          <li>
            <Link>Instagram</Link>
          </li>
        </ul>
      </LinksWrapper>
      <CopyAndPolicy>
        <span>&copy; 2022</span>
        <Link>Polityka prywatności</Link>
      </CopyAndPolicy>
    </FooterWrapper>
  );
};
