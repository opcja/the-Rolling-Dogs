import React from "react";
import styled from "styled-components";
import LogoHorizontal from "assets/icons/logo/logo-horizontal.svg";
import { Link } from "gatsby";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Navbar = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.yellow100};
`;

const StyledLogoWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    width: 155px;
    height: 32px;
  }
`;

const StyledLogo = ({ children }) => (
  <StyledLogoWrapper>{children}</StyledLogoWrapper>
);

const StyledBurger = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 42px;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 18px;
    height: 10px;
    justify-content: space-between;

    span {
      width: 18px;
      height: 2px;
      background: ${({ theme }) => theme.colors.black500};
      border-radius: 10px;
      transition: all 0.3s linear;
      transform-origin: 1px;
    }

    span:nth-last-child(1) {
      width: 14px;
    }
  }
`;

const NavMenu = styled.nav`
  flex-grow: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green400};
  padding: 110px 0 0 16px;

  a {
    font-family: "Playfair Display", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.navi1};
    color: ${({ theme }) => theme.colors.yellow300};
    text-decoration: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    margin-bottom: 20px;
  }
`;

const BlogCategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding-left: 16px;

  li {
    margin-bottom: 12px;
  }

  li:nth-last-child(1) {
    margin: 0;
  }
  a {
    font-size: ${({ theme }) => theme.font.size.mobile.navi2};
  }
`;

export const Navigation = () => {
  return (
    <>
      {" "}
      <Wrapper>
        <Navbar>
          <StyledLogo>
            <LogoHorizontal />
          </StyledLogo>
          <StyledBurger>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </StyledBurger>
        </Navbar>
        <NavMenu>
          <MenuList>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">O mnie</Link>
            </li>
            <li>
              <Link to="/">Oferta</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
              <BlogCategoriesList>
                <li>
                  <Link to="/">#szkolenia</Link>
                </li>
                <li>
                  <Link to="/">#psie potrzeby</Link>
                </li>
                <li>
                  <Link to="/">#trening</Link>
                </li>
                <li>
                  <Link to="/">#psi hotel</Link>
                </li>
              </BlogCategoriesList>
            </li>
            <li>
              <Link to="/">Kontakt</Link>
            </li>
          </MenuList>
        </NavMenu>
      </Wrapper>
    </>
  );
};
