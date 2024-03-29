import React, { useState } from "react";
import styled from "styled-components";
import LogoHorizontal from "assets/icons/logo/logo-horizontal.svg";
import YoutubeIcon from "assets/icons/youtube-icon.svg";
import InstagramIcon from "assets/icons/instagram-icon.svg";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import slugify from "slugify";

const tagsList = [];

const NavBarWrapper = styled.div`
  height: 50px;
`;

const Navbar = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
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
      transition: all 0.3s ease-in-out;
      transform-origin: 1px;
    }

    span:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translateX(-2px)" : "transform: none"};
    }

    span:nth-child(2) {
      display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    }

    span:nth-child(3) {
      width: ${({ isOpen }) => (isOpen ? "18px" : "14px")};
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translateX(-3px)" : "transform: none"};
    }
  }
`;

const NavMenu = styled.nav`
  position: fixed;
  z-index: 990;
  top: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green400};
  padding: 60px 0 0 16px;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  a {
    font-family: "Playfair Display", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.navi1};
    color: ${({ theme }) => theme.colors.yellow300};
    line-height: 100%;
  }

  a.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.yellow300};
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    margin-bottom: 20px;
  }

  li:nth-last-of-type(1) {
    margin-bottom: 0;
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
    line-height: 120%;
  }
`;

const SocialIcon = styled.ul`
  display: flex;
  margin-top: 40px;
  margin-bottom: 60px;

  li {
    margin-right: 58px;
    a {
      height: 24px;
      display: flex;
      svg path {
        fill: ${({ theme }) => theme.colors.yellow300};
      }

      svg:nth-child(1) {
        width: 32px;
        height: 24px;
      }

      svg:nth-child(2) {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Navigation = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          nodes {
            tags
          }
        }
      }
    `
  );
  // console.log(data.allContentfulBlogPost.nodes);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {" "}
      <NavBarWrapper>
        <Navbar>
          <StyledLogo>
            <LogoHorizontal />
          </StyledLogo>
          <StyledBurger isOpen={isOpen} onClick={toggleNavigation}>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </StyledBurger>
        </Navbar>
      </NavBarWrapper>
      <NavMenu isOpen={isOpen}>
        <MenuList>
          <li>
            {" "}
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" activeClassName="active">
              O mnie
            </Link>
          </li>
          <li>
            <Link to="/oferta" activeClassName="active">
              Oferta
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="active">
              Blog
            </Link>
            <BlogCategoriesList>
              {data.allContentfulBlogPost.nodes.map((item) => {
                item.tags.map((tag) => {
                  if (!tagsList.includes(tag)) {
                    tagsList.push(tag);
                  }
                });
              })}
              {tagsList.map((tag) => {
                return (
                  <li>
                    <Link
                      to={`/blog/${slugify(tag.slice(1), { lower: true })}`}
                      activeClassName="active"
                    >
                      {tag}
                    </Link>
                  </li>
                );
              })}
            </BlogCategoriesList>
          </li>
          <li>
            <Link to="/kontakt" activeClassName="active">
              Kontakt
            </Link>
          </li>
        </MenuList>
        <SocialIcon>
          <li>
            <Link to="/">
              <YoutubeIcon />
            </Link>
          </li>
          <li>
            <Link to="/">
              <InstagramIcon />
            </Link>
          </li>
        </SocialIcon>
      </NavMenu>
    </>
  );
};
