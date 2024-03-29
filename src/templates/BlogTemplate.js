import slugify from "slugify";
import * as React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplates";
import { Navigation } from "../components/Navigation/Navigation";
import { StaticImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import { FooterComponent } from "../components/Footer/Footer";
import { Button } from "../components/Button/Button";

import LyingDogIcon from "../assets/icons/lying-dog2.svg";

const tagsList = [];

const Header = styled.header`
  height: calc(100vh - 50px);
  position: relative;

  div.gatsby-image-wrapper {
    height: 100%;
  }

  h1 {
    position: absolute;
    top: 18%;
    bottom: 18%;
    left: 12px;
    right: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.h3};
    font-weight: 800;

    span:nth-of-type(1) {
      color: ${({ theme }) => theme.colors.green400};
    }

    span:nth-of-type(2) {
      color: ${({ theme }) => theme.colors.yellow300};
    }
  }
`;

const ContentWrapper = styled.section`
  margin: 60px 0 80px;
  padding: 0 16px;
  position: relative;

  h1 {
    font-family: "Playfair Display", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.h2};
    font-weight: 900;
    color: ${({ theme }) => theme.colors.green300};
    width: 100%;
    text-align: center;
  }

  span {
    display: block;
    font-family: "Lora", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.bodySmall};
    color: ${({ theme }) => theme.colors.black500};
    line-height: 160%;
    text-align: center;
    margin-top: 20px;
    letter-spacing: 0.04em;

    &::after {
      content: "";
      display: block;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.green300};
      margin-top: 20px;
      border-radius: 6px;
    }
  }
`;

const CategoriesWrapper = styled.ul`
  margin-top: 40px;
  display: flex;
  column-gap: 12px;
  row-gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 24px;

  a {
    font-family: "Lora", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.bodySmall};
    color: ${({ theme }) => theme.colors.black300};
    line-height: 160%;
    letter-spacing: 0.04em;
  }

  a.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.black300};
  }
`;

const ArticlesWrapper = styled.div`
  display: flex;
  margin-top: 60px;
`;

const LayingDogWrapper = styled.div`
  position: absolute;
  right: 22px;
  bottom: -94px;
`;

const DataAndTags = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  div {
    display: flex;
  }

  a {
    margin-right: 10px;
  }

  a:nth-last-of-type(1) {
    margin-right: 0px;
  }

  a,
  p {
    font-family: "Lora", serif;
    font-size: ${({ theme }) => theme.font.size.mobile.caption};
    color: ${({ theme }) => theme.colors.black200};
  }

  a::after {
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    margin-top: 2px;
    background-color: ${({ theme }) => theme.colors.black200};
  }
`;

const PostTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: ${({ theme }) => theme.font.size.mobile.h5};
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.green300};
  font-weight: 600;
`;

const DescriptionWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const ArticleListItem = styled.li`
  margin-top: 80px;

  &:nth-of-type(1) {
    margin-top: 0;
  }

  a {
    padding-left: 0;
  }
`;

const BlogTemplate = (tagProp) => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          nodes {
            miniaturPhoto {
              gatsbyImageData(
                aspectRatio: 1
                formats: WEBP
                placeholder: BLURRED
              )
            }
            dataPublikacji
            description {
              raw
            }
            title
            tags
            slug
          }
        }
      }
    `
  );
  return (
    <MainTemplate>
      <Navigation></Navigation>
      <Header>
        {" "}
        <StaticImage
          src="../assets/images/blog/mobile/Photo.png"
          alt=""
          placeholder="blurred"
        />
        <h1>
          <span>Nie zmusisz psa by myślał jak człowiek, </span>
          <span>ale możesz nauczyć się myśleć jak pies.</span>
        </h1>
      </Header>
      <ContentWrapper>
        <h1>Blog</h1>
        <span>
          Tu poczytasz o, szkoleniach, treningach i codziennym życiu z psem.
        </span>
        <nav>
          {" "}
          <CategoriesWrapper>
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
                    to={`/blog/${slugify(tag, { lower: true })}`}
                    activeClassName="active"
                  >
                    {tag}
                  </Link>
                </li>
              );
            })}
          </CategoriesWrapper>
        </nav>

        <ArticlesWrapper>
          <ul>
            {data.allContentfulBlogPost.nodes.map((item) => {
              if (item.tags.includes(tagProp.pageContext.tag)) {
                const MiniaturPhoto = getImage(item.miniaturPhoto);
                return (
                  <ArticleListItem key={item.title}>
                    <article>
                      <GatsbyImage image={MiniaturPhoto} alt="psi hotel" />
                      <DataAndTags>
                        {" "}
                        <p>{item.dataPublikacji}</p>
                        <div>
                          {item.tags.map((tag) => {
                            return (
                              <Link
                                to={`/blog/${slugify(tag, { lower: true })}`}
                                key={tag}
                              >
                                {tag}
                              </Link>
                            );
                          })}
                        </div>
                      </DataAndTags>
                      <PostTitle>{item.title}</PostTitle>
                      <DescriptionWrapper>
                        {renderRichText(item.description)}
                      </DescriptionWrapper>
                      <Button
                        as="a"
                        href="/"
                        variant="secondary"
                        text="Czytaj więcej"
                      />
                    </article>
                  </ArticleListItem>
                );
              }
            })}
          </ul>
        </ArticlesWrapper>
        <LayingDogWrapper>
          <LyingDogIcon />
        </LayingDogWrapper>
      </ContentWrapper>
      <FooterComponent></FooterComponent>
    </MainTemplate>
  );
};

export default BlogTemplate;
